import axios from 'axios'

export default class CardService {
    static async getAll(link : string) {
        try{
            const responce = await axios.get(link)
            return responce.data
        } catch(e){
            console.log(e)
            console.log("Ошибка")
        }
    }
}