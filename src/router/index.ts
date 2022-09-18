// @ts-expect-error TS(6142): Module '../pages/About' was resolved to 'C:/Users/... Remove this comment to see the full error message
import About from "../pages/About";
// @ts-expect-error TS(6142): Module '../pages/Posts' was resolved to 'C:/Users/... Remove this comment to see the full error message
import Posts from "../pages/Posts";
// @ts-expect-error TS(6142): Module '../pages/PostIdPage' was resolved to 'C:/U... Remove this comment to see the full error message
import PostIdPage from "../pages/PostIdPage";
// @ts-expect-error TS(6142): Module '../pages/Login' was resolved to 'C:/Users/... Remove this comment to see the full error message
import Login from "../pages/Login";


export const privateRoutes = [
    {path: '/about', component: About, exact: true},
    {path: '/posts', component: Posts, exact: true},
    {path: '/posts/:id', component: PostIdPage, exact: true},
]

export const publicRoutes = [
    {path: '/login', component: Login, exact: true},
]
