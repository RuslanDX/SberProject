// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React, {useEffect, useRef, useState} from 'react';
//import './Menu.css'
// @ts-expect-error TS(6142): Module '../components/UI/select/MySelect' was reso... Remove this comment to see the full error message
import MySelect from "../components/UI/select/MySelect";
import {usePosts} from "../hooks/usePosts";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import {getPageCount} from "../utils/pages";
import {useObserver} from "../hooks/useObserver";
// @ts-expect-error TS(6142): Module '../components/PostList' was resolved to 'C... Remove this comment to see the full error message
import PostList from "../components/PostList";
// @ts-expect-error TS(6142): Module '../components/UI/Loader/Loader' was resolv... Remove this comment to see the full error message
import Loader from "../components/UI/Loader/Loader";
// @ts-expect-error TS(6142): Module '../components/UI/button/MyButton' was reso... Remove this comment to see the full error message
import MyButton from "../components/UI/button/MyButton";
// @ts-expect-error TS(6142): Module '../components/UI/MyModal/MyModal' was reso... Remove this comment to see the full error message
import MyModal from "../components/UI/MyModal/MyModal";
// @ts-expect-error TS(6142): Module '../components/PostForm' was resolved to 'C... Remove this comment to see the full error message
import PostForm from "../components/PostForm";
// @ts-expect-error TS(6142): Module '../components/PostFilter' was resolved to ... Remove this comment to see the full error message
import PostFilter from "../components/PostFilter";
//import Menu from "../components/UI/Menu/Menu";


function Posts()
{

    const [posts, setPosts] = useState([])
    const [filter, setFilter] = useState({sort: '', query: ''})
    const [modal, setModal] = useState(false);
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
    const lastElement = useRef()
    //const [menuActive, setMenuActive] = useState(false)


    const [fetchPosts, isPostsLoading, postError] = useFetching(async (limit: any, page: any) => {
        const response = await PostService.getAll(limit, page);
        setPosts([...posts, ...response.data])
        const totalCount = response.headers['x-total-count']
        setTotalPages(getPageCount(totalCount, limit));
    })

        useObserver(lastElement, page < totalPages, isPostsLoading, () => {
            setPage(page + 1);
        })

        useEffect(() => {
            fetchPosts(limit, page)
        }, [page, limit])

        const createPost = (newPost: any) => {
            setPosts([...posts, newPost]) //Добавляем новые данные в конец массива постов.В дальнейшем,можно реализовать затирание верхних постов
            setModal(false)
        }

        // Получаем post из дочернего компонента
        const removePost = (post: any) => {
            setPosts(posts.filter((p: any) => p.id !== post.id))
        }

        const changePage = (page: any) => {
            setPage(page)
        }
    return (
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        <div className="App">

            {/* @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
            <div>
                {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <MyButton style={{marginTop: 10, marginBottom: 10}} onClick={() => setModal(true)}>
                    Создать карточку
                </MyButton>
                {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <MyModal visible={modal} setVisible={setModal}>
                    {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                    <PostForm create={createPost}/>
                </MyModal>

                {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <PostFilter
                    filter={filter}
                    setFilter={setFilter}
                />
                {/*---------------Кол-во подгружаемых элементов---------------*/}
                {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <MySelect
                    value={limit}
                    onChange={(value: any) => setLimit(value)}
                    defaultValue="Кол-во подгружаемых элементов"
                    options={[
                        {value: 5, name: '5'},
                        {value: 10, name: '10'},
                        {value: 25, name: '25'},

                    ]}
                />
                {postError &&
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    <h1>Произошла ошибка ${postError}</h1>
                }
                {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Список автомобилей"/>
                {/* @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
                <div ref={lastElement} style={{height: 20}}/> {/*Отслеживание загрузки новых постов*/}
                {isPostsLoading &&
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    <div style={{display: 'flex', justifyContent: 'center', marginTop: 50}}><Loader/></div>
                }
            {/* @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
            </div>
        {/* @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
        </div>
    );
}

export default Posts;
