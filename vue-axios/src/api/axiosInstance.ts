import axios from "axios";

//创建axios实例
const api = axios.create({
    baseURL: "http://api.zhihu.com",
    timeout: 8000,
    headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer " + ${localStorage.getItem("token")}`,
    }
});
api.interceptors.request.use(
    config => {
        const token = localStorage.getItem("token");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
)
api.interceptors.response.use(
    response => {
        return response.data;
    },
    error => {
        if (error.response) {
            const status = error.response.status;
            switch (status) {
                case 401:
                    console.log("未认证，请登录");
                case 403:
                    console.log("权限不足，访问被禁止");
                case 404:
                    console.log("请求的资源不存在");
                case 500:
                    console.log("服务器内部错误");
                default:
                    console.error("请求错误", error.response.data.message);
            }
        } else if (error.request) {
            console.error("网络连接失败，请检查网络");
        } else {
            console.error("请求错误", error.message);
        }
        return Promise.reject(error);
    }
)
export default api;