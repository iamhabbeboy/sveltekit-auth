import { v4 as uuidv4 } from 'uuid';
import { user } from '.';
import { derived, get } from 'svelte/store';

/**
 * @type {any[]}
 */
let sessions = [];

export const getUserByEmail = async (/** @type {string} */ email) => {
	const users = get(user);
	if(!users || !Array.isArray(users)) {
		return Promise.resolve(null);
	}
	const existingUser = users.find((user) => user.email === email);
	if (!existingUser) return Promise.resolve(null);
	return Promise.resolve(existingUser);
};

export const getUserById = async (/** @type {string} */ id) => {
	const users = get(user);
	if(!users || !Array.isArray(users)) {
	  return Promise.resolve(null);
	}
	const existingUser = users.find((user) => user.id === id);
	if (!users) return Promise.resolve(null);
	return Promise.resolve(existingUser);
};

export const createSession = (email) => {
	const session = {
		id: uuidv4(),
		email,
	};
	sessions.push(session);
	user.set(sessions);
	return Promise.resolve(session);
};

export const removeSession = (id) => {
	const session = sessions.find((session) => session.id === id);
	if (!session) return Promise.reject(new Error('Session not found'));
	sessions = sessions.filter((session) => session.id !== id);
	return Promise.resolve(session);
};