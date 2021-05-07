import { ActionType } from "./Types"
import { ShopState } from "./ShopState"
import { ShopAction } from "./ShopAction"
import { data as placeholderData } from "./placeholderData"

export const shopReducer = (state: ShopState = placeholderData, action: ShopAction): ShopState => {
    switch (action.type) {
        case ActionType.DATA_LOAD:
            return {
                ...state,
                [action.payload.dataType]: action.payload.data,
            }
    }
}