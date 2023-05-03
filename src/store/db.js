import { v4 as uuidv4 } from 'uuid';
import { create, find } from '.';

/**
 * @type {any[]}
 */
let sessions = [];

export const getUserByEmail = async (/** @type {string} */ email) => {
	const existingUser = find({
		email: email
	});
	if (!existingUser) return Promise.resolve(null);
	return Promise.resolve(existingUser);
};

export const getUserById = async (/** @type {string} */ id) => {
	const existingUser = find({ id: id });
	if (!existingUser) return Promise.resolve(null);
	return Promise.resolve(existingUser);
};

export const createSession = (/** @type {string} */ email) => {
	const session = {
		id: uuidv4(),
		email
	};
	const response = create(session);
	return Promise.resolve(response);
};

export const removeSession = (id) => {
	const session = sessions.find((session) => session.id === id);
	if (!session) return Promise.reject(new Error('Session not found'));
	sessions = sessions.filter((session) => session.id !== id);
	return Promise.resolve(session);
};
