import { initState, SportsStoreState } from "../state"
import { ShopActionType } from "../actions/ShopActionCreators"
import { DataType } from "../domain"

export interface ShopAction {
    type: ShopActionType,
    payload: {
        dataType: DataType
        data: any
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