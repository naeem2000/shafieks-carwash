'use client';

import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { reviews } from '../data';
import Slider from 'react-slick';
import '../styles/Reviews.scss';
import React, { useEffect, useState } from 'react';

interface Settings {
	dots: boolean;
	infinite: boolean;
	arrows: boolean;
	speed: number;
	autoplaySpeed: number;
	autoplay: boolean;
	slidesToShow: number;
	slidesToScroll: number;
}

export default function Reviews() {
	const [screenSize, setScreenSize] = useState<number>(window?.outerWidth);

	const settings: Settings = {
		dots: true,
		infinite: true,
		arrows: false,
		speed: 1000,
		autoplaySpeed: 3000,
		autoplay: true,
		slidesToShow: screenSize,
		slidesToScroll: 1,
	};

	useEffect(() => {
		const resize = () => {
			const screen = (settings.slidesToShow =
				window?.outerWidth > 1024 ? 3 : 1);
			setScreenSize(screen);
			return screen;
		};
		resize();
	});
	return (
		<section className='reviews max-width'>
			<h3 className='bar'>Reviews</h3>
			<h2>What my customers say</h2>
			<div className='review-slider'>
				<Slider {...settings}>
					{reviews.review.map((review) => {
						return (
							<div className='reviewers'>
								<div key={review.id} className='review'>
									<p>{review.text}</p>
								</div>
							</div>
						);
					})}
				</Slider>
			</div>
		</section>
	);
}
