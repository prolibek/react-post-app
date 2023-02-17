import React from "react";
import PostItem from './PostItem';

const PostList = ({posts, title, remove}) => {
    if(!posts.length)
        return (
            <h1>Posts not found...</h1>
        )
    return ( 
        <div>
            <h1 style={{marginTop: "30px"}}>{title}</h1>
            {posts.map(
                (post) => 
                <PostItem post={post} remove={remove} key={post.id}></PostItem>
            )}
        </div>
    )
}

export default PostList;