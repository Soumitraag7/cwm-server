import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import axios from 'axios';

// custom import
import { useAuth } from '../../context/auth';
import Spinner from '../Spinner';

export default function AdminRoute() {
	const [ok, setOk] = useState(false);
	const [auth, setAuth] = useAuth();

	const urlWithProxy = '/api/v1';

	useEffect(() => {
		const authCheck = async () => {
			const res = await axios.get(`${urlWithProxy}/auth/admin-auth`);

			if (res.data.ok) {
				setOk(true);
			} else {
				setOk(false);
			}
		};

		if (auth?.token) authCheck();
	}, [auth.token]);

	return ok ? <Outlet /> : <Spinner path="" />;
}
