import axios from "axios"


export const BASE_URL = 'https://finnall.pythonanywhere.com/api/v1/'

export const instance = axios.create((BASE_URL))



