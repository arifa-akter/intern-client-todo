import { createSlice } from '@reduxjs/toolkit';
/*
name create a object like name:category  which is create a story like category{
    
}
*/  

export const category = createSlice({
    name:'category',
    initialState:{
        categories:[],
        category:{},
        message:'',

   },
   reducers:{
    addCategoryStart: (state) => state,
    addCategorySuccess: (state, action) => {
      state.message = action.payload;
    },
   }
//    reducers:{
//     updateCategoryStart: (state) => state,
//     updateCategorySuccess: (state, action) => {
//       state.message = action.payload;
//     },
//    }

}) 
export const{addCategoryStart ,
     addCategorySuccess,
    //  updateCategoryStart,
    //  updateCategorySuccess
    
    } = category.action

export default category.reducer

