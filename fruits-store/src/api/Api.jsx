import axios from 'axios'
import { getToken } from '../service/auth'


//const API = 'http://localhost:3000'
const API = 'https://fresh-fruits-server.onrender.com'


const axiosInstance = axios.create({
    baseURL: API,
})

axiosInstance.interceptors.request.use(
    (config) => {
        const token = getToken()
        if (token) {
            config.headers.Authorization = `${token}`
        }
        return config;
    },
    (error) => {
        return Promise.reject(error)
    }
)
// ProductEndPonts

const addBasicFruits = (basicfruits) => axiosInstance.post(`${API}/basicfruits/add`,basicfruits)
const addDryFruits = (dryfruits) => axiosInstance.post(`${API}/dryfruits/add`,dryfruits)
const addExoticFruits = (exoticfruits) => axiosInstance.post(`${API}/exoticfruits/add`,exoticfruits)
const addOrganicFruits = (organicfruits) => axiosInstance.post(`${API}/organicfruits/add`,organicfruits)
const addSeasonalFruits = (seasonalfruits) => axiosInstance.post(`${API}/seasonalfruits/add`,seasonalfruits)
const addFruitBaskets = (fruitbaskets) => axiosInstance.post(`${API}/fruitbaskets/add`,fruitbaskets)
const addUsers = (users) => axiosInstance.post(`${API}/users/add`,users)


const deleteBasicFruits = (id) => axiosInstance.delete(`${API}/basicfruits/delete/${id}`)
const deleteDryFruits = (id) => axiosInstance.delete(`${API}/dryfruits/delete/${id}`)
const deleteExoticFruits = (id) => axiosInstance.delete(`${API}/exoticfruits/delete/${id}`)
const deleteOrganicFruits = (id) => axiosInstance.delete(`${API}/organicfruits/delete/${id}`)
const deleteSeasonalFruits = (id) => axiosInstance.delete(`${API}/Seasonalfruits/delete/${id}`)
const deleteFruitBaskets = (id) => axiosInstance.delete(`${API}/fruitbaskets/delete/${id}`)
const deleteUsers = (id) => axiosInstance.delete(`${API}/users/delete/${id}`)

const editBasicFruits = (basicfruits,id)=>axiosInstance.put(`${API}/basicfruits/edit/${id}`,basicfruits)
const editDryFruits = (dryfruits,id)=>axiosInstance.put(`${API}/dryfruits/edit/${id}`,dryfruits)
const editExoticFruits = (exoticfruits,id)=>axiosInstance.put(`${API}/exoticfruits/edit/${id}`,exoticfruits)
const editOrganicFruits = (organicfruits,id)=>axiosInstance.put(`${API}/organicfruits/edit/${id}`,organicfruits)
const editSeasonalFruits = (seasonalfruits,id)=>axiosInstance.put(`${API}/seasonalfruits/edit/${id}`,seasonalfruits)
const editFruitBaskets = (fruitbaskets,id)=>axiosInstance.put(`${API}/fruitbaskets/edit/${id}`,fruitbaskets)
const editUsers = (users,id)=>axiosInstance.put(`${API}/users/edit/${id}`,users)
const resetPassword = (password,id)=>axiosInstance.put(`${API}/users/resetpassword/${id}`,password)


const getBasicFruits = () => axios.get(`${API}/basicfruits/all`)
const getDryFruits = () => axios.get(`${API}/dryfruits/all`)
const getExoticFruits = () => axios.get(`${API}/exoticfruits/all`)
const getOrganicFruits = () => axios.get(`${API}/organicfruits/all`)
const getSeasonalFruits = () => axios.get(`${API}/seasonalfruits/all`)
const getFruitBaskets = () => axios.get(`${API}/fruitbaskets/all`)
const getNewlyAdded = () => axios.get(`${API}/newlyadded/all`)
const editOrders = (orders,id)=>axiosInstance.put(`${API}/orders/edit/${id}`,orders)
const getOrders = () => axiosInstance.get(`${API}/orders/all`)
const deleteOrders = (id) => axiosInstance.delete(`${API}/orders/delete/${id}`)
const getUsers = () => axiosInstance.get(`${API}/users/all`)
const Login = (credentials) => axios.post(`${API}/auth/login`, credentials)
const Register = (credentials) => axios.post(`${API}/auth/register`, credentials)


const getBasicFruitsCount = () => axiosInstance.get(`${API}/basicfruits/count`)
const getDryFruitsCount = () => axiosInstance.get(`${API}/dryfruits/count`)
const getExoticFruitsCount = () => axiosInstance.get(`${API}/exoticfruits/count`)
const getOrganicFruitsCount = () => axiosInstance.get(`${API}/organicfruits/count`)
const getSeasonalFruitsCount = () => axiosInstance.get(`${API}/seasonalfruits/count`)
const getFruitBasketsCount = () => axiosInstance.get(`${API}/fruitbaskets/count`)
const getOrdersCount = () => axiosInstance.get(`${API}/orders/count`)
const getUsersCount = () => axiosInstance.get(`${API}/users/count`)



export{
    getBasicFruits,
    getDryFruits,
    getExoticFruits,
    getOrganicFruits,
    getSeasonalFruits,
    getFruitBaskets,
    getOrders ,
    
    deleteOrders,
    editOrders,
    addBasicFruits,
    addDryFruits,
    addExoticFruits,
    addOrganicFruits,
    addSeasonalFruits,
    addFruitBaskets,
    



    deleteBasicFruits,
    deleteDryFruits,
    deleteExoticFruits,
    deleteOrganicFruits,
    deleteSeasonalFruits,
    deleteFruitBaskets,
    




    editBasicFruits,
    editDryFruits,
    editExoticFruits,
    editOrganicFruits,
    editSeasonalFruits,
    editFruitBaskets,
    resetPassword,
    getNewlyAdded,
    getUsers,
    addUsers,
    deleteUsers,
    editUsers,
    Login,
    Register,
    getOrdersCount, 
    getBasicFruitsCount,
    getDryFruitsCount,getExoticFruitsCount,getOrganicFruitsCount,getSeasonalFruitsCount,getFruitBasketsCount,getUsersCount

    
}