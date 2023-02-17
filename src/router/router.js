import Posts from "../pages/Posts"
import PostIdPage from "../pages/PostIdPage"
import About from "../pages/About"
import Login from "../pages/Login"

export const privateRoutes = [
    { path: '/posts', element: <Posts/>, exact: true },
    { path: '/posts/:id', element: <PostIdPage/>, exact: true},
    { path: '/about', element: <About/>, exact: false},
]

export const publicRoutes = [
    { path: '/login', element: <Login/>, exact: false}
]