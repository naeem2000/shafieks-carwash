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
		speed: 100,
		autoplaySpeed: 1000,
		autoplay: true,
		slidesToShow: 1,
		slidesToScroll: 1,
	};

	return (
		<section id='hero' className='hero'>
			<div className='hero-body'>
				<Slider {...settings}>
					{headerImages.images.map((image) => {
						return (
							<div key={image.id}>
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
