import axios from 'axios'

class Fetch{
    constructor(url){
        this.url = url;
        const headers = {
            "Content-Type": "application/json",
            "x-smartgift-app-id": "zOdeE81mInZIiPLrdHRd0IVZ1a2vv42p6tvh8SX3",
            "x-smartgift-app-secret": "ldPn67Cf7e0NboidnQ30KTtrfD1nqPpoSqs69EfH"
        }
        this.instance = axios.create({
            headers,
            baseURL: this.url,
        })
        this.instance.interceptors.response.use(
            (response) => response,
            (error) => Promise.reject(error)
        )
    }

    get(...params){
        return this.instance.get(...params);
    }
    post(...params){
        return this.instance.post(...params);
    }
    put(...params){
        return this.instance.put(...params);
    }
    delete(...params){
        return this.instance.delete(...params);
    }
}

export default Fetch;