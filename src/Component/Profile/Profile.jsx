import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Profile1 } from '../../Redux/AllSlice/Registration/AuthSlice';
const Profile = () => {
    const dispatch = useDispatch();
    useSelector(state => {
        console.log(state);
    })

    const { first_name, last_name, email,profile_pic} = useSelector((state) => state.auth);
    console.log(first_name, last_name, email,profile_pic );

    useEffect(() => {
        dispatch(Profile1());
    }, [dispatch])

    return (
        <div>
            <h1>{first_name} {last_name}</h1>
            <h2>{email}</h2>
            <img src={profile_pic} alt='profile_pic' />
        </div>
    )
}

export default Profile