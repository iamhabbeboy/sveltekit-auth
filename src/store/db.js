import { v4 as uuidv4 } from 'uuid';
import { create, find } from '.';

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

export const createSession = (/** @type {string} */ email, /** @type {string} */ password) => {
	const session = {
		id: uuidv4(),
		email,
		password
	};
	const response = create(session);
	if(!response) {
		return Promise.resolve(null);
	}
	return Promise.resolve(response);
};
