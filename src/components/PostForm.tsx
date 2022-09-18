// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React, {useState} from 'react';
// @ts-expect-error TS(6142): Module './UI/input/MyInput' was resolved to 'C:/Us... Remove this comment to see the full error message
import MyInput from "./UI/input/MyInput";
// @ts-expect-error TS(6142): Module './UI/button/MyButton' was resolved to 'C:/... Remove this comment to see the full error message
import MyButton from "./UI/button/MyButton";
import "./UI/input/MyInput.module.css"

const PostForm = ({
    create
}: any) => {
    const [post, setPost] = useState({model: '', number: '',owner:'', mileage:''})


    const addNewPost = (e: any) => {
        e.preventDefault()
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({model: '', number: '',owner:'', mileage:''})
    }

    return (
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        <form>
            {/*Управляемый компонент*/}
            {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <MyInput
                value={post.model}
                onChange={(e: any) => setPost({...post, model: e.target.value})}
                type="text"
                placeholder="Модель"
            />
            {/*Неуправляемый\Неконтролируемый компонент*/}
            {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <MyInput
                value={post.number}
                onChange={(e: any) => setPost({...post, number: e.target.value})}
                type="text"
                placeholder="Номер"
            />
            {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <MyInput
                value={post.owner}
                onChange={(e: any) => setPost({...post, owner: e.target.value})}
                type="text"
                placeholder="Владелец"
            />
            {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <MyInput
                value={post.mileage}
                onChange={(e: any) => setPost({...post, mileage: e.target.value})}
                type="text"
                placeholder="Пробег"
            />
            {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <MyButton style={{marginLeft: 'auto',marginRight: '0', marginTop: '20px'}} onClick={addNewPost}>Опубликовать</MyButton>
        {/* @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
        </form>
    );
};

export default PostForm;
