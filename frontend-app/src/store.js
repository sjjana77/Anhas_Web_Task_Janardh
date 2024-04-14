import { configureStore } from "@reduxjs/toolkit";
import expenseslice from "./slices/expenseslice";
import editModeSlice from "./slices//expense_edit_slice";


export const store = configureStore({
    devTools: true,
    reducer: {
        expenses : expenseslice,
        editMode : editModeSlice,
        // editMode: editModeReducer,
    }
})