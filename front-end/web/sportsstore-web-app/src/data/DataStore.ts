import { createStore } from "redux"
import { shopReducer } from "./ShopReducer"

export const sportsStoreDataStore = createStore(shopReducer)