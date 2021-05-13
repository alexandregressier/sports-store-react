import { Order, Product } from "../domain"
import { initState, SportsStoreState } from "../state"
import { DataType, ShopActionType } from "../actions/ShopActionCreators"

export interface ShopAction {
    type: ShopActionType,
    payload: {
        dataType: DataType // Domain property
        data: string[] | Product[] | Order[]
    }
}

export const shopReducer = (state: SportsStoreState = initState, action: ShopAction): SportsStoreState => {
    switch (action.type) {
        case ShopActionType.DATA_LOAD:
            return {
                ...state,
                [action.payload.dataType]: action.payload.data,
            }
    }
    return state
}