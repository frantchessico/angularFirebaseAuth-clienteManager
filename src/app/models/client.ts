export interface Client {
    id?: string;
    name: string;
    phone: string;
    email: string;
    balance: number;
    active?: boolean;
}
