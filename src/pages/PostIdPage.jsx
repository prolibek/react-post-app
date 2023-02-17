import React, { useEffect, useState } from "react";
import { useFetching } from "../hooks/useFetching";
import { useParams } from "react-router-dom";
import PostService from "../API/PostService";
import Loader from "../components/UI/loaders/Loader";

const PostIdPage = () => {
    const params = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);
    const [fetchPostById, loading, postError] = useFetching( async() => {
        const response = await PostService.getPostById(params.id)
        setPost(response.data)
    });
    const [fetchComments, loadingComments, commentsError] = useFetching( async() => {
        const response = await PostService.getPostComments(params.id)
        setComments(response.data)
    })
    
    useEffect(() => {
        fetchPostById()
        fetchComments()
    }, []);

    return (
        <div>
            {
                loading 
                ? <Loader/>
                : 
                <div>
                    <strong>{post.id}. {post.title}</strong>
                    <div>{post.body}</div>
                </div>
            }  
            <h3> Comments </h3>
            {
                loadingComments
                ? <Loader/>
                :
                comments.map(c =>
                    <div key={c.id} style={{marginTop:"15px"}}>
                        <h4>{c.email}</h4>
                        <span>{c.body}</span>
                    </div>
                )
            }
        </div>
    )
}

export default PostIdPage;