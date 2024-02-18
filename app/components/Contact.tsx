'use client';

import { FaLocationDot } from 'react-icons/fa6';
import '../styles/Contact.scss';
import React, { useState } from 'react';

interface Client {
	name: string;
	phone: string;
	message: string;
}

export default function Contact() {
	const [client, setClient] = useState<Client>({
		name: '',
		phone: '',
		message: '',
	});

	const [success, setSuccess] = useState<boolean>(false);

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
			<div className='form-section'>
				<p>Request for a car wash</p>
				<form action=''>
					<input type='text' placeholder='Name' />
					<input type='text' placeholder='Phone number' />
					<textarea cols={30} rows={10} placeholder='Message'></textarea>
					<button type='submit'>Submit</button>
				</form>
			</div>
		</section>
	);
}
