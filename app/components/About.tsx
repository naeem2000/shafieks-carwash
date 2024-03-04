'use client';

import AboutImage from '../assets/images/about.jpg';
import { FaRegCircleCheck } from 'react-icons/fa6';
import Image from 'next/image';
import '../styles/about.scss';
import React from 'react';

export default function About() {
	return (
		<section className='about max-width' id='about'>
			<div className='about-left'>
				<Image src={AboutImage} alt='about' />
			</div>
			<div className='about-right'>
				<div className='about-text'>
					<div className='text-head'>
						<h3 className='bar'>About Us</h3>
						<h2>Car Washing And Detailing</h2>
						<p>
							Maintaining the cleanliness and appearance of your vehicle is not
							only essential for its aesthetic appeal but also plays a crucial
							role in preserving its overall condition. Car washing and
							detailing go beyond a simple rinse and scrub; they involve a
							meticulous process to ensure every nook and cranny is thoroughly
							cleaned and restored.
						</p>
					</div>
					<div className='list'>
						<p>
							<FaRegCircleCheck color='#E81C2E' />
							&nbsp; Seats washing
						</p>
						<p>
							<FaRegCircleCheck color='#E81C2E' />
							&nbsp; Vacuum cleaning
						</p>
						<p>
							<FaRegCircleCheck color='#E81C2E' />
							&nbsp; Interior wet cleaning
						</p>
						<p>
							<FaRegCircleCheck color='#E81C2E' />
							&nbsp; Window wiping
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
