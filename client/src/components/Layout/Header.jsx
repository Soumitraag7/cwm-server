import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { GiShoppingBag } from 'react-icons/gi';

// custom import
import { useAuth } from '../../context/auth';
import { toast } from 'react-hot-toast';

const Header = () => {
	const [auth, setAuth] = useAuth();

	const handelLogout = () => {
		setAuth({ ...auth, user: null, token: '' });
		localStorage.removeItem('auth');
		toast.success('Logout Successfully!');
	};

	return (
		<>
			<nav className="navbar navbar-expand-lg bg-body-tertiary">
				<div className="container-fluid">
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarTogglerDemo01"
						aria-controls="navbarTogglerDemo01"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarTogglerDemo01">
						<Link to="/" className="d-flex navbar-brand align-items-center">
							<GiShoppingBag />
							CWM
						</Link>
						<ul className="navbar-nav ms-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<NavLink to="/" className="nav-link ">
									Home
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink to="/categories" className="nav-link ">
									Category
								</NavLink>
							</li>
							{!auth.user ? (
								<>
									<li className="nav-item">
										<NavLink to="/register" className="nav-link">
											Register
										</NavLink>
									</li>
									<li className="nav-item">
										<NavLink to="/login" className="nav-link">
											Login
										</NavLink>
									</li>
								</>
							) : (
								<>
									<li className="nav-item dropdown">
										<NavLink
											className="nav-link dropdown-toggle"
											role="button"
											data-bs-toggle="dropdown"
											aria-expanded="false"
										>
											{auth?.user?.name}
										</NavLink>
										<ul className="dropdown-menu">
											<li>
												<NavLink
													to={`/dashbord/${
														auth?.user?.role === 1 ? 'admin' : 'user'
													}`}
													className="dropdown-item"
												>
													Dashbord
												</NavLink>
											</li>
											<li>
												<NavLink
													onClick={handelLogout}
													to="/login"
													className="dropdown-item"
												>
													Log out
												</NavLink>
											</li>
										</ul>
									</li>
								</>
							)}
							<li className="nav-item">
								<NavLink to="/cart" className="nav-link">
									Cart (0)
								</NavLink>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Header;
