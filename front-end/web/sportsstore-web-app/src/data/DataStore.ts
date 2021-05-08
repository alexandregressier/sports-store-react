import { createStore } from "redux"
import { shopReducer } from "./ShopReducer"
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"

export const sportsStoreDataStore = createStore(shopReducer)

export type RootState = ReturnType<typeof sportsStoreDataStore.getState>
export type AppDispatch = typeof sportsStoreDataStore.dispatch

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector