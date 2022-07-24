import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params:{
        api_key:"a489943250cade9f65ed3db583845eee",
        language: "ko-KR",
    },
});

export default instance;