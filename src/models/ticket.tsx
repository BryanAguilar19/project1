import { User } from "./User"

export interface Ticket{
    id: number,
    status: boolean,
    description: string
    username?: User
}