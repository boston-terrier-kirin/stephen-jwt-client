import axios from 'axios';
import { AUTH_USER, AUTH_ERROR } from './types';

export const signup = (formProps, callback) => async (dispatch) => {
	try {
		const res = await axios.post('http://localhost:3090/signup', formProps);

		dispatch({ type: AUTH_USER, payload: res.data.token });
		localStorage.setItem('token', res.data.token);
		callback();
	} catch (error) {
		console.log('💥', error);
		dispatch({ type: AUTH_ERROR, payload: 'Email in use' });
	}
};

export const signin = (formProps, callback) => async (dispatch) => {
	try {
		const res = await axios.post('http://localhost:3090/signin', formProps);

		dispatch({ type: AUTH_USER, payload: res.data.token });
		localStorage.setItem('token', res.data.token);
		callback();
	} catch (error) {
		console.log('💥', error);
		dispatch({ type: AUTH_ERROR, payload: 'Invalid login credentials' });
	}
};

export const signout = () => {
	localStorage.removeItem('token');

	return {
		type: AUTH_USER,
		payload: '',
	};
};
