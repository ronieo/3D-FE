import { configureStore } from '@reduxjs/toolkit'
import drawerReducer from './drawerSlice'
import clickedOrderHistoryReducer from './clickedOrderHistorySlice'
import userReducer from './userSlice'
import { store } from './store'

export const orderHistoryStore = configureStore({
  reducer: {
    // drawer: drawer/Reducer,
    clickedOrderHistory: clickedOrderHistoryReducer,
    user: userReducer,
  },
})

export type OrderHistoryState = ReturnType<typeof orderHistoryStore.getState>
