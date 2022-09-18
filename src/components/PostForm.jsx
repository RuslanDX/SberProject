import React, {useState} from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";
import "./UI/input/MyInput.module.css"

const PostForm = ({create}) => {
    const [post, setPost] = useState({model: '', number: '',owner:'', mileage:''})


    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({model: '', number: '',owner:'', mileage:''})
    }

    return (
        <form>
            {/*Управляемый компонент*/}
            <MyInput
                value={post.model}
                onChange={e => setPost({...post, model: e.target.value})}
                type="text"
                placeholder="Модель"
            />
            {/*Неуправляемый\Неконтролируемый компонент*/}
            <MyInput
                value={post.number}
                onChange={e => setPost({...post, number: e.target.value})}
                type="text"
                placeholder="Номер"
            />
            <MyInput
                value={post.owner}
                onChange={e => setPost({...post, owner: e.target.value})}
                type="text"
                placeholder="Владелец"
            />
            <MyInput
                value={post.mileage}
                onChange={e => setPost({...post, mileage: e.target.value})}
                type="text"
                placeholder="Пробег"
            />
            <MyButton style={{marginLeft: 'auto',marginRight: '0', marginTop: '20px'}} onClick={addNewPost}>Опубликовать</MyButton>
        </form>
    );
};

export default PostForm;
