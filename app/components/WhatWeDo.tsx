import { whatWeDo } from '../data';
import '../styles/WhatWeDo.scss';
import Image from 'next/image';
import React from 'react';

export default function WhatWeDo() {
	return (
		<section className='what-we-do max-width' id='whatwedo'>
			<h3 className='bar'>WHAT WE DO?</h3>
			<h2>Premium Washing Services</h2>
			<div className='we-do-grid'>
				{whatWeDo.wedo.map((item) => {
					return (
						<div className='we-do-item' key={item.id}>
							<Image src={item.image} alt={item.alt} />
							<h4>{item.heading}</h4>
							<p>{item.text}</p>
						</div>
					);
				})}
			</div>
		</section>
	);
}
