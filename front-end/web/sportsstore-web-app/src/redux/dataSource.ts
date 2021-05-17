import Axios, { Method } from "axios"
import { DataType } from "./domain"
import { RestUrls } from "./urls"

export class RestDataSource {
    SendRequest = (method: Method, url: string) => Axios.request({method, url})
    GetData = (dataType: DataType) => this.SendRequest("GET", RestUrls[dataType])
}