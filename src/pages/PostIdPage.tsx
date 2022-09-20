import React, {useEffect, useState, FC} from 'react';
import {useParams} from 'react-router-dom';
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import Loader from "../components/UI/Loader/Loader";
import MyButton from "../components/UI/button/MyButton";
import {useHistory} from 'react-router-dom';
import MyModal from "../components/UI/MyModal/MyModal";
import MyInput from "../components/UI/input/MyInput";
//import "../components/UI/input/MyInput.module.css"
interface PostIdPageParams {
    id: string;
}

const PostIdPage : FC = () => {

    const [Clickable, setDisabled] = useState<any>("disabled");

    const [modal, setModal] = useState(false); //модальное окно с ошибкой
    const [update_error, setUpdateError] = useState(""); //модальное окно с ошибкой

    const history = useHistory();
    const params = useParams<PostIdPageParams>()
    const [post, setPost] = useState({});

    const [fetchPostById, isLoading, error] = useFetching(async (id: string) => {
        const response = await PostService.getById(id)
        setPost(response.data);
        setModel(response.data.id);
        setNumber(response.data.title);
        setOwner(response.data.id);
        setMileage(response.data.id)
    })
    const DeletePost = (id: string) => {
        const response = PostService.DeletePostByPostId(id);
        console.log(response)
        history.push("/posts");
    }

    // Обновление поста по введеным в поля данные
    const ButtonUpdateFunction = (model_: any,number_: any,owner_: any,mileage_: any,id: any) =>
    {
        if (Clickable==null)
        {
            const response = PostService.UpdatePostByPostId(model_, number_, owner_, mileage_, id);
            console.log(response);
            // if (response.data.code == 404)
            // {
            //     setModal(true);
            //     setUpdateError(response)
            // }

        }
        setDisabled(Clickable !== null ? null : "disabled")
    }

    const [model, setModel] = useState("");
    const [number, setNumber] = useState("");
    const [owner, setOwner] = useState("");
    const [mileage, setMileage] = useState("");

    useEffect(() => {
        fetchPostById(params.id);
    }, [])



    return (
        <div className={'page_of_car'}>
            <div className={'Id_of_car_text'}>Car ID : {params.id}</div>
            {
                isLoading
                ?
                  <Loader/>
                :
                   <div >
                        <div style={{marginTop: "20px"}}>
                            <div className={'name_of_category'}>
                            Model :
                            </div>
                            <div className={'input_for_category'}>
                            <MyInput type="text" value={model} name={"модель"} disabled={Clickable} onChange={(event: any) => setModel(event.target.value)} />
                            </div>
                        </div>
                        <div style={{marginTop: "10px"}}>
                            <div className={'name_of_category'}>
                            Number :
                            </div>
                            <div className={'input_for_category'}>
                            <MyInput type="text" value={number} name={"номер"} disabled={Clickable} onChange={(event: any) => setNumber(event.target.value)} />
                            </div>
                        </div>

                        <div style={{marginTop: "10px"}}>
                            <div className={'name_of_category'}>
                            Owner :
                            </div>
                            <div className={'input_for_category'}>
                            <MyInput type="text" value={owner} name={"владелец"} disabled={Clickable} onChange={(event: any) => setOwner(event.target.value)} />
                            </div>
                        </div>

                        <div style={{marginTop: "10px"}}>
                            <div className={'name_of_category'}>
                            Mileage :
                            </div>
                            <div className={'input_for_category'}>
                            <MyInput type="text" value={mileage} name={"пробег"} disabled={Clickable} onChange={(event: any) => setMileage(event.target.value)} />
                            </div>
                        </div>

                        <MyModal visible={modal} setVisible={setModal}>
                            <div>{error}</div>
                        </MyModal>
                </div>
            }

            <div style={{marginTop: "20px", textAlign: "right"}}>
                <MyButton style={{marginRight: "10px"}} onClick={(_: any) =>
                    ButtonUpdateFunction(model,number,owner,mileage,params.id)}>{Clickable !== null ? "Change" : "Save"}
                </MyButton>
            <MyButton onClick={() => DeletePost(params.id)}>
                Delete
            </MyButton>

            </div>

        </div>
    );
};

export default PostIdPage;
