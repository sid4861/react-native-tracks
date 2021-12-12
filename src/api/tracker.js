import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage'

const instance = axios.create({
    baseURL: "https://react-native-tracker-app.sid4861.repl.co"
});

instance.interceptors.request.use(
    async (config) => {
        const token = await AsyncStorage.getItem("token");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
    },
    (err) => {
        return Promise.reject(err);
    }
);
export default instance;