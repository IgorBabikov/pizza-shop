import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import { RootState } from '../store';


interface FormSliceState {
 showForm: boolean;
 messageForm: boolean;
}

const initialState: FormSliceState = {
 showForm: false,
 messageForm: false
}

const formSlice = createSlice({
   name: 'form',
   initialState,

   reducers: {
      setDataForm(state, action: PayloadAction<boolean>) {
         state.showForm = action.payload
      },
      setMessageForm(state, action: PayloadAction<boolean>) {
         state.messageForm = action.payload
      }
   }
})


export const selectFormData = (state: RootState) => state.formSlice


export const {setDataForm, setMessageForm} = formSlice.actions

export default formSlice.reducer