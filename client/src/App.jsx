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

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<HomePage />} />

				{/* Protected User Routes */}
				<Route path="/dashbord" element={<PrivateRoute />}>
					<Route path="user" element={<Dashbord />} />
				</Route>

				{/* Protected admin Routes */}
				<Route path="/dashbord" element={<AdminRoute />}>
					<Route path="admin" element={<Dashbord />} />
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
