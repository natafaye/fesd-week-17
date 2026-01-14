export type Employee = {
    id: number
    name: string
    title: string
}

export type Paycheck = {
    id: number
    employeeId: number
    amount: number
    date: string
}