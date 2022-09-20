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

    static async getById(id: any) {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
        return response;
    }

    static async DeletePostByPostId(id: any) {
        const response = await axios.delete('https://jsonplaceholder.typicode.com/posts/' + id)
        return response;
    }
    static async UpdatePostByPostId(model_: any,number_: any,owner_: any,mileage_: any,id: any) {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/' + (id+1)) // должен быть update, но пока проверка
        return response;
    }

}
