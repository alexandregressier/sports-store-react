import { ActionType, DataType } from "./Types"
import { Order, Product } from "./ShopState"

export interface ShopAction {
    type: ActionType,
    payload: {
        dataType: DataType
        data: string[] | Product[] | Order[]
    }
}