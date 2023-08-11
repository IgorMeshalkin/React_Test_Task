import axios from "axios";

const REST_URL = "https://test.relabs.ru/api/users/list";
export default class UsersAPI {

    static async get(limit, offset) {
        const response = await axios.get(REST_URL, {
            params: {
                limit: limit,
                offset: offset
            }
        });
        return response
    }
}