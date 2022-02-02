import { createSlice } from '@reduxjs/toolkit'

export const expensesSlice = createSlice({
  name: 'expenses',
  initialState: {
    allExpenses: [{category:'netto', amount:12, date:'02-02-2022'}, 
    {category:'Mad', amount:712, date:'02-02-2022'},
    {category:'Fest', amount:212, date:'02-02-2022'},
    {category:'Tøj', amount:152, date:'02-02-2022'},
    {category:'netto', amount:123, date:'02-02-2022'},
    {category:'netto', amount:72, date:'02-02-2022'}]
  },
  reducers: {
    increment: state => {
      state.value += 1
    },
    decrement: state => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = expensesSlice.actions

export default expensesSlice.reducer