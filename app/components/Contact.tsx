'use client';

import { FaLocationDot } from 'react-icons/fa6';
import '../styles/Contact.scss';
import React from 'react';

export default function Contact() {
	return (
		<section className='contact max-width'>
			<div className='contact-body'>
				<h3 className='bar'>Washing Location</h3>
				<h2>Car Washing & Care Location</h2>
				<div className='locate'>
					<FaLocationDot size={30} color='#E81C2E' />
					<div className='locate-details'>
						<h4>Shafiek's Car Wash</h4>
						<a
							href='https://maps.app.goo.gl/KGwyhDDhwv5d2eUG9'
							target='_blank'
							rel='noopener noreferrer'
						>
							18 Saint Louis Road, Grassy Park
						</a>
						<p>
							<strong>Call:</strong> <a href='tel:+27610078108'>061 007 8108</a>
						</p>
					</div>
				</div>
			</div>
			<form action=''>
				<p>Request for a car wash</p>
				<div className='form-group'>
					<input type='text' placeholder='Name' />
					<input type='email' placeholder='Email' />
					<textarea cols='30' rows='7' placeholder='Description'></textarea>
				</div>
			</form>
		</section>
	);
}
