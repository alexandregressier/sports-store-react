import { initState as placeholderData } from "../state"
import { ShopAction } from "../reducers/ShopReducer"

export enum ShopActionType {
    DATA_LOAD = "data_load",
}
export enum DataType {
    PRODUCTS = "products",
    CATEGORIES = "categories",
}
export const loadData = (dataType: DataType): ShopAction => ({
    type: ShopActionType.DATA_LOAD,
    payload: {
        dataType,
        data: placeholderData[dataType]
    }
})