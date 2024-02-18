import WhatWeDo from './components/WhatWeDo';
import Counter from './components/Counter';
import Contact from './components/Contact';
import Header from './components/Header';
import About from './components/About';
import Hero from './components/Hero';
import Nav from './components/Nav';
import Reviews from './components/Reviews';

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
			<Contact />
		</>
	);
}
