'use client';
import { Squash as Hamburger, Squash } from 'hamburger-react';
import { navLinks } from '../data';
import '../styles/Nav.scss';
import React from 'react';

export default function Nav() {
	return (
		<nav>
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
					<Squash size={25} color='#FFF' />
				</div>
			</div>
		</nav>
	);
}
