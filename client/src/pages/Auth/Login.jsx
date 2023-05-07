import React, { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

// import component
import Layout from '../../components/Layout/Layout';
import '../../styles/AuthStyles.css';
import { useAuth } from '../../context/auth';

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [auth, setAuth] = useAuth();

	const navigate = useNavigate();

	// form submit function
	const urlWithProxy = '/api/v1';

	const handleSubmit = async e => {
		e.preventDefault();
		try {
			const res = await axios.post(
				// `${process.env.REACT_APP_API}/auth/register`,
				`${urlWithProxy}/auth/login`,
				{ email, password }
			);

			if (res && res.data.success) {
				toast.success(res.data && res.data.message);
				setAuth({ ...auth, user: res.data.user, token: res.data.token });
				localStorage.setItem('auth', JSON.stringify(res.data));
				navigate('/');
			} else {
				toast.error(res.data.message);
			}
		} catch (error) {
			console.log(error);
			toast.error('Something went wrong');
		}
	};

	return (
		<Layout title={'Login Page'}>
			<div className="form-container" style={{ minHeight: '90vh' }}>
				<h4 className="title">LOGIN FORM</h4>
				<form onSubmit={handleSubmit}>
					<div className="mb-3">
						<input
							type="email"
							value={email}
							onChange={e => setEmail(e.target.value)}
							className="form-control"
							id="exampleInputEmail"
							placeholder="Enter your Email"
							required
						/>
					</div>
					<div className="mb-3">
						<input
							type="password"
							value={password}
							onChange={e => setPassword(e.target.value)}
							className="form-control"
							id="exampleInputPassword"
							placeholder="Enter your Password"
							required
						/>
					</div>
					<button type="submit" className="btn btn-primary">
						Login
					</button>
				</form>
			</div>
		</Layout>
	);
};

export default Login;
