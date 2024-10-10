import axios from "axios";

const numberAPI = axios.create({
    baseURL: "http://localhost:5000",
});

export const getNumber = async () => {
    const res = await numberAPI.get("/number");
    const numbers = res.data.data;

    console.log(numbers);
};
