import Axios, { AxiosInstance } from "axios";

/**
 * This axios instance is used throughout the app
 */

let axiosInstance: AxiosInstance = Axios.create({
    //backend API
    baseURL:
        "https://virtserver.swaggerhub.com/selfdecode.com/game-challenge/1.0.0/",
});

export default axiosInstance;
