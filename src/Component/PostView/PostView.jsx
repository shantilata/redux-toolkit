import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { fetchPosts } from '../../Redux/AllSlice/Post/PostSlice';

const PostView = () => {

    const { isLoading, posts, error } = useSelector(state => state.posts)
    console.log("isloading,posts,error", isLoading, posts, error);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPosts())
    }, [dispatch])
    return (
        <div>
            <h1>Posts</h1>
            {isLoading && <h3>.....Loading</h3>}
            {error && <h4>{error}</h4>}
            {posts && posts.map(post => (
                <React.Fragment key={post.id}>
                    <h2>{post.userId}.{post.title}</h2>
                    <h5>{post.body}</h5>
                </React.Fragment>

            ))}
        </div>
    )
}

export default PostView