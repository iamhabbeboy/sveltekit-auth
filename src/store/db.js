import { v4 as uuidv4 } from 'uuid';
const users = [
  {
	id: "123",
    email: "test@example.com",
    password: "secret",
  },
];

/**
 * @type {any[]}
 */
let sessions = [];

export const getUserByEmail = async (/** @type {string} */ email) => {
	const existingUser = users.find((user) => user.email === email);
	if (!existingUser) return Promise.resolve(null);
	return Promise.resolve(existingUser);
};

export const getUserById = async (/** @type {string} */ id) => {
	const existingUser = users.find((user) => user.id === id);
	if (!existingUser) return Promise.resolve(null);
	return Promise.resolve(existingUser);
};

export const registerUser = (/** @type {{ email: any; id?: string; password?: string; }} */ user) => {
	const existingUser = users.find((u) => u.email === user.email);
	if (existingUser) return Promise.reject(new Error('User already exists'));
	users.push(user);
	return Promise.resolve(user);
};

export const createSession = (email) => {
	const session = {
		id: uuidv4(),
		email,
	};
	sessions.push(session);
	return Promise.resolve(session);
};

export const removeSession = (id) => {
	const session = sessions.find((session) => session.id === id);
	if (!session) return Promise.reject(new Error('Session not found'));
	sessions = sessions.filter((session) => session.id !== id);
	return Promise.resolve(session);
};