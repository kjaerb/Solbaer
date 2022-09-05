import type { Order } from './Order';

export interface User {
	createdAt: any;
	fname?: string;
	lname?: string;
	email?: string;
	phone?: number;
	orders: Order[];
}
