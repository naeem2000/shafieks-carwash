'use client';

import { Squash } from 'hamburger-react';
import React, { useEffect, useState } from 'react';
import { navLinks } from '../data';
import '../styles/Nav.scss';

export default function Nav() {
	const [openNav, setOpenNav] = useState<boolean>(false);

	useEffect(() => {
		const hero = document.getElementById('hero');

		if (openNav) {
			hero!.style.marginTop = '265px';
		} else {
			hero!.style.marginTop = '0px';
		}
	});

	return (
		<nav id='nav'>
			<div className='nav-body max-width'>
				<ol>
					{navLinks.links.map((item) => {
						return (
							<li key={item.id}>
								<a href={item.link}>{item.name}</a>
							</li>
						);
					})}
				</ol>
				<button>Make a Booking</button>
			</div>
			<div className='mobile-nav'>
				<p>MENU</p>
				<div>
					<Squash
						toggled={openNav}
						toggle={setOpenNav}
						size={25}
						color='#FFF'
					/>
				</div>
			</div>
			<div id='openNav' className='mobile-menu'>
				<ol>
					{navLinks.links.map((item) => {
						return (
							<li key={item.id}>
								<a href={item.link}>{item.name}</a>
							</li>
						);
					})}
				</ol>
			</div>
		</nav>
	);
}
