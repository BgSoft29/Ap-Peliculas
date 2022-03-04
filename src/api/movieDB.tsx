import axios from "axios";

const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: 'ce6677ecedc94f86733d29226cfb4366',
        language: 'es-ES'
    }
});
export default movieDB;