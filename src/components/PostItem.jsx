import React from "react";
import ClassicButton from "./UI/buttons/ClassicButton";
import { useNavigate } from 'react-router-dom';

const PostItem = ({post, remove}) => {
    const navigate = useNavigate();

    return (
        <div className="post">
            <div className="post__content">
                <strong>{post.id}. {post.title}</strong>
                <p>{post.body}</p>
            </div>
            <div className="post__btns">
                <ClassicButton onClick={() => navigate(`/posts/${post.id}`, {replace: true})}>Open Post</ClassicButton>
                <ClassicButton onClick={() => remove(post)}>Delete post</ClassicButton>
            </div>
        </div>
    )
}

export default PostItem;