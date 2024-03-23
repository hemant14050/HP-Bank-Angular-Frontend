export interface ITransaction {
    "transactionId": 1,
    "accountNo": number,
    "transactionType": string,
    "amount": number,
    "closingAmt": number,
    "createdAt": Date
}

export interface ITransactionFormModel {
    "accountNo"?: number,
    "transactionType": string,
    "amount"?: number
} 