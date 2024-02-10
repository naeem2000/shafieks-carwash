import AboutImage from '../assets/images/about.jpg';
import { FaRegCircleCheck } from 'react-icons/fa6';
import Image from 'next/image';
import '../styles/about.scss';
import React from 'react';

export default function About() {
	return (
		<section className='about max-width'>
			<div className='about-left'>
				<Image src={AboutImage} alt='about' layout='contain' />
			</div>
			<div className='about-right'>
				<div className='about-text'>
					<p>About Us</p>
					<h2>Car Washing And Detailing</h2>
					<p>
						Lorem ipsum dolor sit amet elit. In vitae turpis. Donec in hendre
						dui, vel blandit massa. Ut vestibu suscipi cursus. Cras quis porta
						nulla, ut placerat risus. Aliquam nec magna eget velit luctus dictum
					</p>
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
