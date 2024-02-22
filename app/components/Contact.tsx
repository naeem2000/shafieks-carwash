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
				<iframe
					src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.9214639958554!2d18.487106674901337!3d-34.04588562825141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc43aefee8827d%3A0xd1cc0122e86e772e!2sShafiek&#39;s%20Car%20Wash!5e0!3m2!1sen!2sza!4v1708632621874!5m2!1sen!2sza'
					allowFullScreen
					loading='lazy'
					referrerPolicy='no-referrer-when-downgrade'
				></iframe>
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
