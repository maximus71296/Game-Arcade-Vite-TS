import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '18ac1b38bd5d4a8eace3bf2f633430ba'
    }
})