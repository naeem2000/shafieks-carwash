'use client';

import ScrollToTop from 'react-scroll-to-top';
import WhatWeDo from './components/WhatWeDo';
import Counter from './components/Counter';
import Contact from './components/Contact';
import Reviews from './components/Reviews';
import Header from './components/Header';
import Extras from './components/Extras';
import Footer from './components/Footer';
import About from './components/About';
import Hero from './components/Hero';
import Nav from './components/Nav';

export default function Home() {
	return (
		<>
			<Header />
			<Nav />
			<Hero />
			<About />
			<WhatWeDo />
			<Counter />
			<Reviews />
			<Extras />
			<Contact />
			<Footer />
			<ScrollToTop smooth />
		</>
	);
}
