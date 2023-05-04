import React from 'react';
import { Helmet } from 'react-helmet';
import { Toaster } from 'react-hot-toast';

// custom components
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children, title, description, keywords, author }) => {
	return (
		<div>
			<Helmet>
				<meta name="description" content={description} />
				<meta name="keywords" content={keywords} />
				<meta name="author" content={author} />
				<title>{title}</title>
			</Helmet>
			<Header />
			<main>
				<Toaster />
				{children}
			</main>
			<Footer />
		</div>
	);
};

Layout.defaultProps = {
	title: 'CWM - shop now',
	description:
		'Our ecommerce site is your one-stop shop for all your online shopping needs. With a wide range of products and categories, we offer everything from clothing and accessories to home decor and electronics. Our easy-to-use website allows you to browse our extensive collection, compare prices, and make purchases with just a few clicks. With fast and reliable shipping, you can have your purchases delivered right to your doorstep. We also offer exceptional customer service, with a knowledgeable team available to assist you with any questions or concerns you may have. Shop with us today and experience the convenience of online shopping at its finest!',
	keywords:
		'online store, online business, ecom, ecommerce website, shopping cart, e business, what is ecommerce, ecomerce, comercio electronico, e commerce definition, ecommerce platforms, e commerce business, e commerce meaning, ecommerce website design, wordpress ecommerce, e commerce sites, ecommunity, e commerce adalah, ecommerce website development, ecommerce website templates, best ecommerce platform, magento ecommerce, free shopping cart, ecommerce solutions, ecommerce template,online shop',
	author: 'Soumitra Datta'
};

export default Layout;
