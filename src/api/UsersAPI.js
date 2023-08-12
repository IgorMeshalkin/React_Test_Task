import axios from "axios";
import {REST_ADDRESS} from "../properties/connectingProperties";

export default class UsersAPI {

    static async get(limit, offset) {
        const response = await axios.get(REST_ADDRESS, {
            params: {
                limit: limit,
                offset: offset
            }
        });
        return response
    }
}