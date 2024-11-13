import { defineStore } from "pinia";
import { ref, Ref } from "vue";
import axios from "axios";

interface User {
    id: number;
    phone: string;
    avatar: string;
    nickname: string;
    bonus: number;
}

interface UserStore {
    user: Ref<User | null>;
    msg: Ref<string>;
    fetchUser: () => Promise<void>;
    clearUser: () => void;
}

export const useUserStore = defineStore("user", (): UserStore => {
    const user = ref<User | null>(null);
    const msg = ref<string>("欢迎回来！"); // 你可以根据需要修改初始值

    const loadUserFromLocalStorage = (): void => {
        const userData = localStorage.getItem("user");
        if (userData) {
            user.value = JSON.parse(userData);
        }
    };

    const fetchUser = async (): Promise<void> => {
        try {
            const response = await axios.get("http://localhost:8080/user/info", {
                headers: {
                    Authorization: localStorage.getItem("token"),
                },
            });
            user.value = response.data.data;
            localStorage.setItem("user", JSON.stringify(user.value));
        } catch (error) {
            console.log("获取用户信息失败：", error);
        }
    };

    const clearUser = (): void => {
        user.value = null;
        localStorage.removeItem("user");
        localStorage.removeItem("token");
    };

    loadUserFromLocalStorage();

    return {
        user,
        msg,
        fetchUser,
        clearUser,
    };
});