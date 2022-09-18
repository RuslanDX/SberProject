import axios from "axios";

export default class PostService {
    static async getAll(limit = 10, page = 1) {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
            params: {
                _limit: limit,
                _page: page
            }
        })
        return response;
    }

    static async getById(id) {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
        return response;
    }

    // static async getCommentsByPostId(id) {
    //     const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    //     return response;
    // }

    static async DeletePostByPostId(id) {
        const response = await axios.delete('https://jsonplaceholder.typicode.com/posts/' + id)
        return response;
    }
    static async UpdatePostByPostId(model_,number_,owner_,mileage_,id) {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/' + (id+1)) // должен быть update, но пока проверка
        return response;
    }
    static async DeletePostByPostId(id) {
        const response = await axios.delete('https://jsonplaceholder.typicode.com/posts/' + id)
        return response;
    }
}
