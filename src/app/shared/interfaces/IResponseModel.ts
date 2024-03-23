export interface IResponseModel<T> {
    success:boolean,
    message:string,
    data:T
}