import type { Order } from './Order';

export interface User {
	fname?: string;
	lname?: string;
	email?: string;
	phone?: number;
	orders: Order[];
}
