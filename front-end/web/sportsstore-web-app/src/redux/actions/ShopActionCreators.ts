import { DataType } from "../domain"
import { RestDataSource } from "../dataSource"

export enum ShopActionType {
    DATA_LOAD = "data_load",
}
const dataSource = new RestDataSource()

export const loadData = (dataType: DataType) => ({
    type: ShopActionType.DATA_LOAD,
    payload: dataSource.GetData(dataType)
        .then(response => ({ dataType, data: response.data }))
})