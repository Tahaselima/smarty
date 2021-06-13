import Fetch from './core/index'

class SmartyServices {
    static Fetcher (){
        return new Fetch(window?.SmartyConfig.API_URL)
    }
    static getProduct(payload){
        const url = `/apps/products?merchantCode=${payload.merchantCode}&codes[]=${payload.codes}`
        return this.Fetcher().get(url)
    }
}

export default SmartyServices