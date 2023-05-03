import { writable } from 'svelte/store';

export const user = writable([{
		id: '123',
		email: 'test@example.com',
		password: 'secret'
	}
]);
