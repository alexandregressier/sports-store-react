import { ActionType, DataType } from "./Types"
import { data as placeholderData } from "./placeholderData"
import { ShopAction } from "./ShopAction"

export const loadData = (dataType: DataType): ShopAction => ({
    type: ActionType.DATA_LOAD,
    payload: {
        dataType,
        data: placeholderData[dataType],
    }
})