import React, { useState } from "react";
import ClassicButton from "./UI/buttons/ClassicButton";
import ClassicInput from "./UI/inputs/ClassicInput";

const PostForm = ({create}) => {

    const [post, setPost] = useState({title: '', body: ''});

    const addNewPost = () => {
        create({...post, id: Date.now()});
        setPost({title: '', body: ''});
    }

    return (
        <div>
            <ClassicInput 
                type="text"
                placeholder='Title of your post'
                value={post.title} 
                onChange={(e) => setPost({...post, title: e.target.value})}/>
            <ClassicInput 
                type="text"
                placeholder='Body of your post'
                value={post.body}
                onChange={(e) => setPost({...post, body: e.target.value})}/>
            <ClassicButton onClick={()=>addNewPost()}>Create Posts</ClassicButton>
        </div>
    )
}

export default PostForm;