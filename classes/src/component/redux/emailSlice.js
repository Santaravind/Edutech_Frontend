import { createSlice } from '@reduxjs/toolkit';

const emailSlice=createSlice({
    name:'email',
    initialState:{
        email:null,
        isEmail:false
    },
    reducers:{
        addEmail:(state,action)=>{
          state.email=action.payload;
          state.isEmail=true;

        }
    }
})

export const { addEmail} = emailSlice.actions;
export default emailSlice.reducer;