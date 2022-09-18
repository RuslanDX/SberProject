import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import Loader from "../components/UI/Loader/Loader";
import MyButton from "../components/UI/button/MyButton";
import {useHistory} from 'react-router-dom';
import MyModal from "../components/UI/MyModal/MyModal";
import MyInput from "../components/UI/input/MyInput";
//import "../components/UI/input/MyInput.module.css"

const PostIdPage = () => {

    const [disabled, setDisabled] = useState("disabled");

    const [modal, setModal] = useState(false); //модальное окно с ошибкой
    const [update_error, setUpdateError] = useState(""); //модальное окно с ошибкой

    const history = useHistory();
    const params = useParams()
    const [post, setPost] = useState({});
    //const [comments, setComments] = useState([]);
    const [fetchPostById, isLoading, error] = useFetching(async (id) => {
        const response = await PostService.getById(id)
        setPost(response.data);
        setModel(response.data.id);
        setNumber(response.data.title);
        setOwner(response.data.id);
        setMileage(response.data.id)
    })
    const DeletePost = (id) => {
        const response = PostService.DeletePostByPostId(id);
        console.log(response)
        history.push("/posts");
    }

    // Обновление поста по введеным в поля данные
    const ButtonUpdateFunction = (model_,number_,owner_,mileage_,id) =>
    {
        if (disabled==null)
        {
            const response = PostService.UpdatePostByPostId(model_, number_, owner_, mileage_, id);
            console.log(response);
            if (response.code==404)
            {
                setModal(true);
                setUpdateError(response)
            }

        }
        setDisabled(disabled !== null ? null : "disabled")
    }
    // const [fetchComments, isComLoading, comError] = useFetching(async (id) => {
    //     const response = await PostService.getCommentsByPostId(id)
    //     setComments(response.data);
    // })
    const [model, setModel] = useState("");
    const [number, setNumber] = useState("");
    const [owner, setOwner] = useState("");
    const [mileage, setMileage] = useState("");

    useEffect(() => {
        fetchPostById(params.id);
        //fetchComments(params.id)
    }, [])



    return (
        <div>
            <h1>Вы открыли страницу поста c ID = {params.id}</h1>
            {
                // isLoading
                // ? <Loader/>
                // :  <div>{post.id}. {post.title}</div>

                isLoading
                ? <Loader/>
                :  <card>

                        <div style={{marginTop: "10px", }}>
                            <div style={{marginLeft: "5px",marginRight: "auto", display:"inline-block", paddingRight:"10px"}}>
                            Модель:
                            </div>
                            <div style={{marginLeft: "auto",marginRight: "5px", display:"inline-block"}}>
                            <MyInput type="text" value={model} name={"модель"} disabled={disabled} onChange={event => setModel(event.target.value)} />
                            </div>
                        </div>
                        <div style={{marginTop: "10px", }}>
                            <div style={{marginLeft: "5px",marginRight: "auto", display:"inline-block", paddingRight:"10px"}}>
                            Номер:
                            </div>
                            <div style={{marginLeft: "auto",marginRight: "5px", display:"inline-block"}}>
                            <MyInput type="text" value={number} name={"номер"} disabled={disabled} onChange={event => setNumber(event.target.value)} />
                            </div>
                        </div>

                        <div style={{marginTop: "10px", }}>
                            <div style={{marginLeft: "5px",marginRight: "auto", display:"inline-block", paddingRight:"10px"}}>
                            Владелец:
                            </div>
                            <div style={{marginLeft: "auto",marginRight: "5px", display:"inline-block"}}>
                            <MyInput type="text" value={owner} name={"владелец"} disabled={disabled} onChange={event => setOwner(event.target.value)} />
                            </div>
                        </div>

                        <div style={{marginTop: "10px"}}>
                            <div style={{marginLeft: "5px",marginRight: "auto", display:"inline-block", paddingRight:"10px"}}>
                            Пробег:
                            </div>
                            <div style={{marginLeft: "auto",marginRight: "5px", display:"inline-block"}}>
                            <MyInput type="text" style={{marginLeft: "auto",marginRight: "5px"}} value={mileage} name={"пробег"} disabled={disabled} onChange={event => setMileage(event.target.value)} />
                            </div>
                        </div>

                        <MyModal visible={modal} setVisible={setModal}>
                            <div>{error}</div>
                        </MyModal>
                </card>
            }
            {/*<h1>*/}
            {/*    Комментарии*/}
            {/*</h1>*/}
            {/*{isComLoading*/}
            {/*    ? <Loader/>*/}
            {/*    : <div>*/}
            {/*        {comments.map(comm =>*/}
            {/*            <div key={comm.id} style={{marginTop: 15}}>*/}
            {/*                <h5>{comm.email}</h5>*/}
            {/*                <div>{comm.body}</div>*/}
            {/*            </div>*/}
            {/*        )}*/}
            {/*    </div>*/}
            {/*}*/}

            <div style={{marginTop: "10px"}}>
                <MyButton onClick={_ => ButtonUpdateFunction(model,number,owner,mileage,params.id)}>{disabled !== null ? "Изменить" : "Сохранить"}</MyButton>
            <MyButton onClick={() => DeletePost(params.id)}>
                Удалить
            </MyButton>

            </div>
        </div>

    );
};

export default PostIdPage;
