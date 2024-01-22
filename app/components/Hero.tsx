'use client';

import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { headerImages } from '../data';
import Slider from 'react-slick';
import Image from 'next/image';
import '../styles/hero.scss';
import React from 'react';

export default function Home() {
	const settings = {
		dots: true,
		infinite: true,
		arrows: true,
		speed: 1000,
		autoplaySpeed: 10,
		autoplay: true,
		slidesToShow: 1,
		slidesToScroll: 1,
	};

	return (
		<section id='hero' className='hero'>
			<div className='hero-body'>
				<div className='hero-text'>
					<h1>awe</h1>
				</div>
				<Slider {...settings}>
					{headerImages.images.map((image) => {
						return (
							<div className='image' key={image.id}>
								<Image
									className='img'
									width={400}
									height={400}
									src={image.source}
									alt='header'
								/>
							</div>
						);
					})}
				</Slider>
			</div>
		</section>
	);
}
