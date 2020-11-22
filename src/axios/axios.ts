import Axios, { AxiosInstance } from 'axios';



let axiosInstance: AxiosInstance = Axios.create({
    baseURL: "https://virtserver.swaggerhub.com/selfdecode.com/game-challenge/1.0.0/"
});


export default axiosInstance;
