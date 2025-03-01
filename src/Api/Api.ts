
import axios from "axios";


export const baseURL = "https://dummy-api-jtg6bessta-ey.a.run.app"


export const Api = axios.create({

    baseURL: baseURL,
    headers: {
    'Content-Type': 'application/json',

    }
});
 