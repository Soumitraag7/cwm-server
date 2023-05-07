import { Routes, Route } from 'react-router-dom';

// custom components
import HomePage from './pages/HomePage';
import About from './pages/About';
import Contact from './pages/Contact';
import Policy from './pages/Policy';
import Pagenotfound from './pages/Pagenotfound';
import Categories from './pages/Categories';
import Dashbord from './pages/user/Dashbord';
import Register from './pages/Auth/Register';
import Login from './pages/Auth/Login';

import PrivateRoute from './components/Routes/Private';
import AdminRoute from './components/Routes/AdminRoute';
import ForgotPassword from './pages/Auth/ForgotPassword';
import AdminDashbord from './pages/Admin/AdminDashbord';
import CreateCategory from './pages/Admin/CreateCategory';
import CreateProduct from './pages/Admin/CreateProduct';
import Users from './pages/Admin/Users';
import Orders from './pages/user/Orders';
import Profile from './pages/user/Profile';

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<HomePage />} />

				{/* Protected User Routes */}
				<Route path="/dashbord" element={<PrivateRoute />}>
					<Route path="user" element={<Dashbord />} />
					<Route path="user/orders" element={<Orders />} />
					<Route path="user/profile" element={<Profile />} />
				</Route>

				{/* Protected admin Routes */}
				<Route path="/dashbord" element={<AdminRoute />}>
					<Route path="admin" element={<AdminDashbord />} />
					<Route path="admin/create-category" element={<CreateCategory />} />
					<Route path="admin/create-product" element={<CreateProduct />} />
					<Route path="admin/users" element={<Users />} />
				</Route>

				<Route path="/register" element={<Register />} />
				<Route path="/login" element={<Login />} />
				<Route path="/forgot-password" element={<ForgotPassword />} />
				<Route path="/about" element={<About />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/policy" element={<Policy />} />
				<Route path="/categories" element={<Categories />} />

				{/* page not found */}
				<Route path="/*" element={<Pagenotfound />} />
			</Routes>
		</>
	);
}

export default App;
