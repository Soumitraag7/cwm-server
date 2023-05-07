import React, { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

// import component
import Layout from '../../components/Layout/Layout';
import '../../styles/AuthStyles.css';

const Register = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [phone, setPhone] = useState('');
	const [address, setAddress] = useState('');

	const navigate = useNavigate();

	// form submit function
	const urlWithProxy = '/api/v1';

	const handleSubmit = async e => {
		e.preventDefault();
		try {
			const res = await axios.post(
				// `${process.env.REACT_APP_API}/auth/register`,
				`${urlWithProxy}/auth/register`,
				{ name, email, password, phone, address }
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
		<Layout title={'Register Page'}>
			<div className="form-container" style={{ minHeight: '90vh' }}>
				<h4 className="title">REGISTER FORM</h4>
				<form onSubmit={handleSubmit}>
					<div className="mb-3">
						{/* <label htmlFor="exampleInputName" className="form-label">
							Name
						</label> */}
						<input
							type="text"
							value={name}
							onChange={e => setName(e.target.value)}
							className="form-control"
							id="exampleInputName"
							placeholder="Enter your Name"
							required
						/>
					</div>
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
					<div className="mb-3">
						<input
							type="text"
							value={phone}
							onChange={e => setPhone(e.target.value)}
							className="form-control"
							id="exampleInputPhone"
							placeholder="Enter your Phone No."
							required
						/>
					</div>
					<div className="mb-3">
						<input
							type="text"
							value={address}
							onChange={e => setAddress(e.target.value)}
							className="form-control"
							id="exampleInputAddress"
							placeholder="Enter your Address"
							required
						/>
					</div>
					{/* <div className="mb-3 form-check">
						<input
							type="checkbox"
							className="form-check-input"
							id="exampleCheck1"
						/>
						<label className="form-check-label" htmlFor="exampleCheck1">
							Check me out
						</label>
					</div> */}
					<button type="submit" className="btn btn-primary">
						Sign Up
					</button>
				</form>
			</div>
		</Layout>
	);
};

export default Register;
