'use client';

import 'slick-carousel/slick/slick-theme.css';
import React, { useEffect } from 'react';
import 'slick-carousel/slick/slick.css';
import { headerImages } from '../data';
import Slider from 'react-slick';
import Image from 'next/image';
import '../styles/hero.scss';

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

export default function Home() {
	const settings: Settings = {
		dots: true,
		infinite: true,
		arrows: true,
		speed: 1000,
		autoplaySpeed: 10,
		autoplay: true,
		slidesToShow: 1,
		slidesToScroll: 1,
	};

	function getScroll(): void {
		window.addEventListener('scroll', function () {
			console.log('awe');
		});
		return;
	}

	useEffect(() => {
		getScroll();
		return;
	}, []);

	return (
		<section id='hero' className='hero'>
			<div className='hero-body'>
				<div className='hero-text'>
					<h2>WASHING & DETAILING</h2>
					<h1>Keep Your Car Newer</h1>
					<p>
						Using none harmful cleaning products to your cars paint / detailing
						to ensure utmost cleaning with extending the lifespan of your
						current coat.
					</p>
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
