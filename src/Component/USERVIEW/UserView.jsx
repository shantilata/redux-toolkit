import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from '../../Redux/AllSlice/UserSlice/userSlice';


const UserView = () => {
    const { isLoading, users, error } = useSelector(state => state.users)
    console.log("isLoading,users,error", isLoading, users, error);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchUsers())
    }, [dispatch])

    return (
        <div>
            <h1>Users</h1>
            {isLoading && <h2>{isLoading}</h2>}
            {error && <p>{error}</p>}
            {
                users && users.map(user => (
                    <React.Fragment key={user.id}>
                        <h4>{user.username}</h4>
                        <h5>{user.email}</h5>
                    </React.Fragment>
                ))
            }
        </div>
    )
}

export default UserView