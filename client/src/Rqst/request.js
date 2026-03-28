import axios from 'axios'

const Base_Url = "https://api.blog.test-project.xyz/api/"

export const publicRequest = axios.create({ baseURL: Base_Url })

const persistData = localStorage.getItem('persist:BlogNow1')
const BcData = persistData ? JSON.parse(persistData).BcData : null
const Token = BcData ? JSON.parse(BcData)?.Data?.[0]?.accesstoken : null

console.log("Token----", Token)

export const userRequest = axios.create({
    baseURL: Base_Url,
    headers: { token: `Bearer ${Token}` }
})
