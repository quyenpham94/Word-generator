import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3000";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class WordGeneratorApi {
    // the token for interactive with the API will be stored here.
    static token;

    static async request(endpoint, data = {}, method = "get") {
        console.debug("API Call:", endpoint, data, method);

        const url = `${BASE_URL}/${endpoint}`;
        const headers = { Authorization: `Bearer ${WordGeneratorApi.token}` };
        const params = method === "get" ? data: {};

        try {
            return (await axios({ url, method, data, params, headers })).data;
        } catch (err) {
            console.error("API Error:", err.response);
            let message = err.response.data.error.message;
            throw Array.isArray(message) ? message : [message];
        }
    }
    
    // Individual API routes

    /** Get the current user. */

    static async getCurrentUser(username) {
        let res = await this.request(`users/${username}`);
        return res.user;
    }

    /** Get Categories (filered by name id not undefined) */
    
    static async getCategories(name) {
        let res = await this.request("categories", { name });
        return res.categories;
    }

    /** Get details on a category by handle. */

    static async getCategory(handle) {
        let res = await this.request(`categories/${handle}`);
        return res.category;
    }

    /** Get words (filtered by word name if not undefined) */
    
    static async getWords(name) {
        let res = await this.request("words", { name });
        return res.words;
    }

    /** User has viewed a word */ 
    
    static async view(username, id) {
        await this.request(`users/${username}/words/${id}`, {}, "post");
    }

    /** Get token for login from username, password */ 

    static async login(data) {
        let res = await this.request(`auth/token`, data, "post");
        return res.token;
    }

    /** Signup for site. */ 

    static async signup(data) {
        let res = await this.request(`auth/register`, data, "post");
        return res.token;
    }

    /** Save user profile  */ 
    
    static async saveProfile(username, data) {
        let res = await this.request(`users/${username}`, data, "patch");
        return res.user;
    }
}

export default WordGeneratorApi;