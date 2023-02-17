import React, { useEffect, useState, useRef } from "react";
import PostList from "../components/PostList";
import PostForm from "../components/PostForm";
import { usePosts } from "../hooks/usePosts";
import PostFilter from "../components/PostFilter";
import { getTotalPages } from "../utils/pages";
import { useFetching } from "../hooks/useFetching";
import { useObserver } from "../hooks/useObserver"
import PostService from "../API/PostService";
import Loader from "../components/UI/loaders/Loader";
import ClassicButton from "../components/UI/buttons/ClassicButton";
import ClassicSelect from "../components/UI/selects/ClassicSelect";
import Modal from "../components/UI/modals/Modal";
import Pagination from "../components/UI/pagination/Pagination";

function Posts() 
{
    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState({sort: '', search: ''});
    const [modal, setModal] = useState(false);

    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);

    const lastElement = useRef();

    const [fetchPosts, loading, postError] = useFetching(async () => {
        const response = await PostService.getPosts(limit, page);
        const totalCount = response.headers['x-total-count'];
        setTotalPages(getTotalPages(totalCount, limit));
        setPosts([...posts, ...response.data]);
    });

    useObserver(lastElement, page < totalPages, loading, () => {
        setPage(page + 1)
    });

    useEffect(() => { fetchPosts(posts) }, [page, limit]);

    const createPost = (post) => {
        setPosts([...posts, post]);
        setModal(false);
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id));
    }

    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.search);

    return (
        <div className="posts__main-wrapper">
            <ClassicButton style={{marginTop: "20px"}} onClick={() => setModal(true)}>Create Post</ClassicButton>
            <Modal visible={modal} setVisible={setModal}>
                <PostForm create={createPost}/>
            </Modal>
            <hr style={{margin: "20px 0 20px"}}/>
            <PostFilter filter={filter} setFilter={setFilter}/>
            <ClassicSelect
                value={limit}
                onChange={(value) => setLimit(value)}
                default="Number of elements"
                options={[
                    {value: 5, name: "5"},
                    {value: 10, name: "10"},
                    {value: 25, name: "25"},
                    {value: -1, name: "Show all"}
                ]}
            />
            {
                postError && 
                <h1>Произошла ошибка {postError}</h1>
            }
            { 
                loading &&
                <div style={{height: "100%", display:"flex", justifyContent:"center", alignItems:"center"}}><Loader></Loader></div>
            }
            <PostList remove={removePost} posts={sortedAndSearchedPosts}/>
            <div style={{height: 20}} ref={lastElement}></div>
            <Pagination totalPages={totalPages} page={page} setPage={setPage}></Pagination>
        </div>
    )
}

export default Posts;