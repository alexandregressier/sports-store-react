import { createStore } from "redux"
import { shopReducer } from "./reducers/ShopReducer"
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
import { cartReducer } from "./reducers/CartReducer"
import { ShopActionType } from "./actions/ShopActionCreators"
import { CartActionType } from "./actions/CartActionCreators"

export interface Action {
    type: any,
    payload: any,
}

const CommonReducer = (...reducers: ((state: any, action: Action) => any)[]) => (state: any, action: Action) => {
    let i = [ShopActionType, CartActionType]
        .map(it => Object.values(it))
        .findIndex(actionTypes => actionTypes.includes(action.type))
    return i !== -1
        ? reducers[i](state, action)
        : state
}
export const sportsStoreDataStore = createStore(CommonReducer(shopReducer, cartReducer))

export type RootState = ReturnType<typeof sportsStoreDataStore.getState>
export type AppDispatch = typeof sportsStoreDataStore.dispatch

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector