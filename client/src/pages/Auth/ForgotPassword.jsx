import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import axios from 'axios';

// import component
import '../../styles/AuthStyles.css';
import Layout from '../../components/Layout/Layout';

const ForgotPassword = () => {
	const [email, setEmail] = useState('');
	const [answer, setAnswer] = useState('');
	const [newPassword, setNewPassword] = useState('');

	const navigate = useNavigate();

	// form submit function
	const urlWithProxy = '/api/v1';

	const handleSubmit = async e => {
		e.preventDefault();
		try {
			const res = await axios.post(
				// `${process.env.REACT_APP_API}/auth/register`,
				`${urlWithProxy}/auth/forgot-password`,
				{ email, answer, newPassword }
			);

			if (res && res.data.success) {
				toast.success(res.data && res.data.message);

				navigate('/login');
			} else {
				toast.error(res.data.message);
			}
		} catch (error) {
			console.log(error);
			toast.error('Something went wrong');
		}
	};

	return (
		<Layout title={'Forgot Password'}>
			<div className="form-container" style={{ minHeight: '90vh' }}>
				<form onSubmit={handleSubmit}>
					<h4 className="title">RESET PASSWORD</h4>
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
							type="text"
							value={answer}
							onChange={e => setAnswer(e.target.value)}
							className="form-control"
							id="exampleInputAnswer"
							placeholder="Enter your Passphrase"
							required
						/>
					</div>
					<div className="mb-3">
						<input
							type="password"
							value={newPassword}
							onChange={e => setNewPassword(e.target.value)}
							className="form-control"
							id="exampleInputNewPassword"
							placeholder="Enter your New Password"
							required
						/>
					</div>

					<button type="submit" className="btn btn-primary">
						Reset Password
					</button>
				</form>
			</div>
		</Layout>
	);
};

export default ForgotPassword;
