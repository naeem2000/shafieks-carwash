import { FaPhoneAlt, FaRegClock } from 'react-icons/fa';
import { MdOutlineEmail } from 'react-icons/md';
import '../styles/Header.scss';
import React from 'react';

export default function Header() {
	return (
		<header className='max-width'>
			<div className='header-left'>
				<h1>
					Shafiek's <span>Carwash</span>
				</h1>
			</div>

			<div className='header-right'>
				<div className='icon-container'>
					<div className='icon'>
						<FaRegClock size={20} color='#FFF' />
					</div>
					<div>
						<p>Opening Hours</p>
						<p>Mon - Fri, 8:00 - 9:00</p>
					</div>
				</div>
				<div className='icon-container'>
					<div className='icon'>
						<FaPhoneAlt size={20} color='#FFF' />
					</div>
					<div>
						<p>Call Me</p>
						<p>
							<a href='tel:+27610078108'>+061 007 8108</a>
						</p>
					</div>
				</div>
				<div className='icon-container'>
					<div className='icon'>
						<MdOutlineEmail size={20} color='#FFF' />
					</div>
					<div>
						<p>Email Me</p>
						<p>
							<a href='mailto:shafiekcarr27@gmail.com' target='_blank'>
								shafiekcarr27@gmail.com
							</a>
						</p>
					</div>
				</div>
			</div>
		</header>
	);
}
