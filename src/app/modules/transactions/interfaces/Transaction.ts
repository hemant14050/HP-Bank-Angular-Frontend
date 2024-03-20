export interface Transaction {
    "transactionId": 1,
    "accountNo": number,
    "transactionType": string,
    "amount": number,
    "closingAmt": number,
    "createdAt": Date
}

export interface TransactionFormModel {
    "accountNo"?: number,
    "transactionType": string,
    "amount"?: number
} 