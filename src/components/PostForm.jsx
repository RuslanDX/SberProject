import React, {useState} from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";
import "./UI/input/MyInput.module.css"

const PostForm = ({create}) => {
    const [post, setPost] = useState({title: '', body: '',time:''})


    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({title: '', body: '',time:''})
    }

    return (
        <form>
            {/*Управляемый компонент*/}
            <MyInput
                value={post.title}
                onChange={e => setPost({...post, title: e.target.value})}
                type="text"
                placeholder="Организатор"
            />
            {/*Неуправляемый\Неконтролируемый компонент*/}
            <MyInput
                value={post.body}
                onChange={e => setPost({...post, body: e.target.value})}
                type="text"
                placeholder="Описание события"
            />
            <MyInput
                value={post.time}
                onChange={e => setPost({...post, time: e.target.value})}
                type="text"
                placeholder="Дата события"
            />
            <MyButton style={{marginLeft: 'auto',marginRight: '0'}} onClick={addNewPost}>Создать пост</MyButton>
        </form>
    );
};

export default PostForm;
