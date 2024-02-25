import '../styles/Extras.scss';
import React from 'react';

export default function Extras() {
	return (
		<section className='extras max-width' id='extras'>
			<h3 className='bar'>Extras</h3>
			<h2>Mobile Car Wash & Boerewors</h2>
			<div className='grid'>
				<div className='grid-1'>
					<h2>Boerewors</h2>
					<div>
						<p>We offer more than just a wash for your vehicle.</p>
					</div>
					<div>
						<p>
							Our boerewors are made from high-quality, locally sourced meats,
							ensuring a delicious and satisfying meal every time.
						</p>
					</div>
					<div>
						<p>
							Special combo deal available! Combine your car wash with a
							boerewors meal for a discounted price.
						</p>
					</div>
				</div>
				<div className='grid-2'>
					<h2>Callouts</h2>
					<div>
						<p>Providing top-tier car wash services right at your doorstep</p>
					</div>
					<div>
						<p>
							Say goodbye to the hassle of driving to a car wash and waiting in
							line; we bring our exceptional services directly to you
						</p>
					</div>
					<div>
						<p>
							I will come to you, whether you're at home, work, or anywhere
							else. Just book a slot and leave the rest to me.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
