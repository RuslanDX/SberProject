// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React, {useEffect, useState} from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import {useParams} from 'react-router-dom';
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
// @ts-expect-error TS(6142): Module '../components/UI/Loader/Loader' was resolv... Remove this comment to see the full error message
import Loader from "../components/UI/Loader/Loader";
// @ts-expect-error TS(6142): Module '../components/UI/button/MyButton' was reso... Remove this comment to see the full error message
import MyButton from "../components/UI/button/MyButton";
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import {useHistory} from 'react-router-dom';
// @ts-expect-error TS(6142): Module '../components/UI/MyModal/MyModal' was reso... Remove this comment to see the full error message
import MyModal from "../components/UI/MyModal/MyModal";
// @ts-expect-error TS(6142): Module '../components/UI/input/MyInput' was resolv... Remove this comment to see the full error message
import MyInput from "../components/UI/input/MyInput";
//import "../components/UI/input/MyInput.module.css"

const PostIdPage = () => {

    const [disabled, setDisabled] = useState("disabled");

    const [modal, setModal] = useState(false); //модальное окно с ошибкой
    const [update_error, setUpdateError] = useState(""); //модальное окно с ошибкой

    const history = useHistory();
    const params = useParams()
    const [post, setPost] = useState({});

    const [fetchPostById, isLoading, error] = useFetching(async (id: any) => {
        const response = await PostService.getById(id)
        setPost(response.data);
        setModel(response.data.id);
        setNumber(response.data.title);
        setOwner(response.data.id);
        setMileage(response.data.id)
    })
    const DeletePost = (id: any) => {
        const response = PostService.DeletePostByPostId(id);
        console.log(response)
        history.push("/posts");
    }

    // Обновление поста по введеным в поля данные
    const ButtonUpdateFunction = (model_: any,number_: any,owner_: any,mileage_: any,id: any) =>
    {
        if (disabled==null)
        {
            const response = PostService.UpdatePostByPostId(model_, number_, owner_, mileage_, id);
            console.log(response);
            if ((response as any).code == 404)
            {
                setModal(true);
                setUpdateError(response)
            }

        }
        setDisabled(disabled !== null ? null : "disabled")
    }

    const [model, setModel] = useState("");
    const [number, setNumber] = useState("");
    const [owner, setOwner] = useState("");
    const [mileage, setMileage] = useState("");

    useEffect(() => {
        fetchPostById(params.id);

    }, [])



    return (
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        <div>
            {/* @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
            <h1>Вы открыли страницу поста c ID = {params.id}</h1>
            {


                isLoading
                ? // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <Loader/>
                : // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                   <card>

                        {/* @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
                        <div style={{marginTop: "10px", }}>
                            {/* @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
                            <div style={{marginLeft: "5px",marginRight: "auto", display:"inline-block", paddingRight:"10px"}}>
                            Модель:
                            {/* @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
                            </div>
                            {/* @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
                            <div style={{marginLeft: "auto",marginRight: "5px", display:"inline-block"}}>
                            {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                            <MyInput type="text" value={model} name={"модель"} disabled={disabled} onChange={(event: any) => setModel(event.target.value)} />
                            {/* @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
                            </div>
                        {/* @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
                        </div>
                        {/* @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
                        <div style={{marginTop: "10px", }}>
                            {/* @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
                            <div style={{marginLeft: "5px",marginRight: "auto", display:"inline-block", paddingRight:"10px"}}>
                            Номер:
                            {/* @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
                            </div>
                            {/* @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
                            <div style={{marginLeft: "auto",marginRight: "5px", display:"inline-block"}}>
                            {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                            <MyInput type="text" value={number} name={"номер"} disabled={disabled} onChange={(event: any) => setNumber(event.target.value)} />
                            {/* @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
                            </div>
                        {/* @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
                        </div>

                        {/* @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
                        <div style={{marginTop: "10px", }}>
                            {/* @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
                            <div style={{marginLeft: "5px",marginRight: "auto", display:"inline-block", paddingRight:"10px"}}>
                            Владелец:
                            {/* @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
                            </div>
                            {/* @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
                            <div style={{marginLeft: "auto",marginRight: "5px", display:"inline-block"}}>
                            {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                            <MyInput type="text" value={owner} name={"владелец"} disabled={disabled} onChange={(event: any) => setOwner(event.target.value)} />
                            {/* @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
                            </div>
                        {/* @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
                        </div>

                        {/* @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
                        <div style={{marginTop: "10px"}}>
                            {/* @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
                            <div style={{marginLeft: "5px",marginRight: "auto", display:"inline-block", paddingRight:"10px"}}>
                            Пробег:
                            {/* @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
                            </div>
                            {/* @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
                            <div style={{marginLeft: "auto",marginRight: "5px", display:"inline-block"}}>
                            {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                            <MyInput type="text" style={{marginLeft: "auto",marginRight: "5px"}} value={mileage} name={"пробег"} disabled={disabled} onChange={(event: any) => setMileage(event.target.value)} />
                            {/* @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
                            </div>
                        {/* @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
                        </div>

                        {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                        <MyModal visible={modal} setVisible={setModal}>
                            {/* @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
                            <div>{error}</div>
                        </MyModal>
                {/* @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
                </card>
            }

            {/* @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
            <div style={{marginTop: "10px"}}>
                {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <MyButton onClick={(_: any) => ButtonUpdateFunction(model,number,owner,mileage,params.id)}>{disabled !== null ? "Изменить" : "Сохранить"}</MyButton>
            {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <MyButton onClick={() => DeletePost(params.id)}>
                Удалить
            </MyButton>

            {/* @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
            </div>
        {/* @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
        </div>
    );
};

export default PostIdPage;
