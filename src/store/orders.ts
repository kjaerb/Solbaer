import { writable } from 'svelte/store';
import type { Option } from '../types/Option';
interface order {
	name?: Option;
	kg?: number;
}

export let ordersStore = writable([{}]);
