'use client';

import CountUp from 'react-countup';
import { Counts } from '../data';
import '../styles/Counter.scss';
import React from 'react';

export default function Counter() {
	return (
		<section className='counter'>
			<div className='counting max-width'>
				{Counts.counts.map((item) => {
					return (
						<div className='counters' key={item.id}>
							<div className='counter-body'>
								<item.icon size={50} color='#E81C2E' />
								<h1>
									<CountUp enableScrollSpy duration={2} end={item.number} />
								</h1>
							</div>
							<p>{item.text}</p>
						</div>
					);
				})}
			</div>
		</section>
	);
}
