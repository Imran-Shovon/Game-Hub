import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '271524c22316429698c7c586aca92daa'
    }
})