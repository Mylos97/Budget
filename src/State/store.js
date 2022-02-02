import { configureStore } from '@reduxjs/toolkit'
import expensesSlice from './Expenses/expensesSlice'

export default configureStore({
  reducer: {
      expenses: expensesSlice,
      
    }
})