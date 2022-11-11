import axios from './index'

export const categoryAdd =(addCategory)=>axios.post('/category' ,addCategory)