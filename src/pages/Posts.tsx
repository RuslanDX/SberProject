import React, {useEffect, useRef, useState, FC} from 'react';
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


const Posts: FC = () =>
{

    const [posts, setPosts] = useState<any[]>([])
    const [filter, setFilter] = useState({sort: '', query: ''})
    const [modal, setModal] = useState(false);
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
    const lastElement = useRef()
    //const [menuActive, setMenuActive] = useState(false)




    // const [fetchPosts, isPostsLoading, postError] = useFetching(async (limit: any, page: any) => {
    //     const response = await PostService.getAll(limit, page);
    //     setPosts([...posts, ...response.data])
    //     const totalCount = response.headers['x-total-count']
    //     setTotalPages(getPageCount(totalCount, limit));
    // })
    let ReturnOfFetching = useFetching(async (limit: any, page: any) => {
        const response = await PostService.getAll(limit, page);
        setPosts([...posts, ...response.data])
        const totalCount = response.headers['x-total-count']
        setTotalPages(getPageCount(totalCount, limit));
    })

        useObserver(lastElement, page < totalPages, ReturnOfFetching[1], () => {
            setPage(page + 1);
        })

        useEffect(() => {
            ReturnOfFetching[0](limit, page)
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
        <div className="App">

            <div>
                <MyButton style={{marginTop: 10, marginBottom: 10}} onClick={() => setModal(true)}>
                    Create card
                </MyButton>
                <MyModal visible={modal} setVisible={setModal}>
                    <PostForm create={createPost}/>
                </MyModal>

                <PostFilter
                    filter={filter}
                    setFilter={setFilter}
                />
                {/*---------------Кол-во подгружаемых элементов---------------*/}
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
                {ReturnOfFetching[2] &&
                    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                    <h1>Произошла ошибка ${postError}</h1>
                }
                <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Список автомобилей"/>
                {/* @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
                <div ref={lastElement} style={{height: 20}}/> {/*Отслеживание загрузки новых постов*/}
                {ReturnOfFetching[1] &&
                    <div style={{display: 'flex', justifyContent: 'center', marginTop: 50}}><Loader/></div>
                }
            </div>
        </div>
    );
}

export default Posts;
