import React, {useEffect, useRef, useState} from 'react';
//import './Menu.css'
import MySelect from "../components/UI/select/MySelect";
import {usePosts} from "../hooks/usePosts";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import {getPageCount} from "../utils/pages";
import {useObserver} from "../hooks/useObserver";
import PostList from "../components/PostList";
import Loader from "../components/UI/Loader/Loader";
import MyButton from "../components/UI/button/MyButton";
import MyModal from "../components/UI/MyModal/MyModal";
import PostForm from "../components/PostForm";
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


    const [fetchPosts, isPostsLoading, postError] = useFetching(async (limit, page) => {
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

        const createPost = (newPost) => {
            setPosts([...posts, newPost]) //Добавляем новые данные в конец массива постов.В дальнейшем,можно реализовать затирание верхних постов
            setModal(false)
        }

        // Получаем post из дочернего компонента
        const removePost = (post) => {
            setPosts(posts.filter(p => p.id !== post.id))
        }

        const changePage = (page) => {
            setPage(page)
        }
    return (
        <div className="App">

            {/*<div className="ramka">*/}
            {/*<nav>*/}
            {/*    <div className="nav_but" onClick={()=>setMenuActive(!menuActive)}>*/}
            {/*        <span/>*/}
            {/*    </div>*/}
            {/*</nav>*/}
            {/*</div>*/}

            {/*<Menu active={menuActive} setActive={setMenuActive} header = {"Список событий"}/>*/}
            <div>
                <MyButton style={{marginTop: 10, marginBottom: 10}} onClick={() => setModal(true)}>
                    Создать карточку
                </MyButton>
                <MyModal visible={modal} setVisible={setModal}>
                    <PostForm create={createPost}/>
                </MyModal>
                {/*<hr style={{margin: '15px 0'}}/>*/}
                <PostFilter
                    filter={filter}
                    setFilter={setFilter}
                />
                {/*---------------Кол-во подгружаемых элементов---------------*/}
                <MySelect
                    value={limit}
                    onChange={value => setLimit(value)}
                    defaultValue="Кол-во подгружаемых элементов"
                    options={[
                        {value: 5, name: '5'},
                        {value: 10, name: '10'},
                        {value: 25, name: '25'},
                        /*{value: -1, name: 'Показать все'},*/
                    ]}
                />
                {postError &&
                    <h1>Произошла ошибка ${postError}</h1>
                }
                <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Список автомобилей"/>
                <div ref={lastElement} style={{height: 20}}/> {/*Отслеживание загрузки новых постов*/}
                {isPostsLoading &&
                    <div style={{display: 'flex', justifyContent: 'center', marginTop: 50}}><Loader/></div>
                }
            </div>
        </div>
    );
}

export default Posts;
