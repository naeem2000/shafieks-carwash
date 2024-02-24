//Hero images
import hero1 from './assets/images/taxi.jpg';
import hero2 from './assets/images/car2.jpg';
import hero3 from './assets/images/police.jpg';
import hero4 from './assets/images/couches2.jpg';
import hero5 from './assets/images/callout.jpg';
import hero6 from './assets/images/boerewors.jpg';
import hero7 from './assets/images/couches.jpg';
import hero8 from './assets/images/boerewors2.jpg';
import hero9 from './assets/images/car.jpg';
import hero10 from './assets/images/callout2.jpg';

//Icons
import { FaLocationDot } from 'react-icons/fa6';
import { IoPerson } from 'react-icons/io5';
import { FaCar } from 'react-icons/fa';

//What we do grid
import Interior from './assets/images/interior-wash.png';
import Window from './assets/images/window-wipe.png';
import Wet from './assets/images/wet-cleaning.png';
import Seats from './assets/images/seats-wash.png';
import Vacuum from './assets/images/vacuum.png';
import Wash from './assets/images/wash.png';

//Nav links
export const navLinks = {
	links: [
		{
			id: 0,
			name: 'Home',
			link: '#Home',
		},
		{
			id: 1,
			name: 'About',
			link: '#about',
		},
		{
			id: 2,
			name: 'Service',
			link: '#service',
		},
		{
			id: 3,
			name: 'Testimonials',
			link: '#testimonials',
		},
		{
			id: 4,
			name: 'Contact',
			link: '#contact',
		},
	],
};

//Hero images
export const headerImages = {
	images: [
		{
			id: 0,
			source: hero1,
		},
		{
			id: 1,
			source: hero2,
		},
		{
			id: 2,
			source: hero3,
		},
		{
			id: 3,
			source: hero4,
		},
		{
			id: 4,
			source: hero5,
		},
		{
			id: 5,
			source: hero6,
		},
		{
			id: 6,
			source: hero7,
		},
		{
			id: 7,
			source: hero8,
		},
		{
			id: 8,
			source: hero9,
		},
		{
			id: 9,
			source: hero10,
		},
	],
};

//What we do grid
export const whatWeDo = {
	wedo: [
		{
			id: 0,
			image: Wash,
			alt: 'Exterior Washing',
			heading: 'Exterior Washing',
			text: 'Enhance the curb appeal of your property with my efficient exterior washing services.',
		},
		{
			id: 1,
			image: Interior,
			alt: 'Interior Washing',
			heading: 'Interior Washing',
			text: 'From wiping surfaces to deep cleaning carpets that enhances the hygiene and aesthetic appeal of your car.',
		},
		{
			id: 2,
			image: Vacuum,
			alt: 'Vacuum Cleaning',
			heading: 'Vacuum Cleaning',
			text: 'Vacuum cleaning is an efficient way to maintain a clean and healthy interior.',
		},
		{
			id: 3,
			image: Seats,
			alt: 'Seats Washing',
			heading: 'Seats Washing',
			text: 'Revitalize and Refresh: Professional Car Seat Washing Services for a Spotless Interior.',
		},
		{
			id: 4,
			image: Window,
			alt: 'Window Wiping',
			heading: 'Window Wiping',
			text: 'Efficient Solutions for Clean Car Windows to maintain shine.',
		},
		{
			id: 5,
			image: Wet,
			alt: 'Wet Cleaning',
			heading: 'Wet Cleaning',
			text: `Experience a thorough and effective cleaning process to restore your car's exterior to its pristine condition.`,
		},
	],
};

//Counter
export const Counts = {
	counts: [
		{
			id: 0,
			icon: FaLocationDot,
			text: 'Service Point',
			number: 1,
		},
		{
			id: 1,
			icon: IoPerson,
			text: 'Happy Clients',
			number: '630',
		},
		{
			id: 2,
			icon: FaCar,
			text: 'Projects Completed',
			number: 641,
		},
	],
};

//Reviews

export const reviews = {
	review: [
		{
			id: 0,
			text: 'Greetings, our couches and carpet is looking even more beautiful now that its dry. Shukran so much Uncle Shafiek. JazakAllah.',
		},
		{
			id: 1,
			text: 'Hi, Wow mom is very happy the couches and carpet.',
		},
		{
			id: 2,
			text: 'Best service and vehicle care In town.',
		},
		{
			id: 3,
			text: 'Excellent service. My car was full of dog hair and he managed to get rid of all of it. Car is so clean. The polishing job just added that extra touch. Very happy with the service. Thank you again',
		},
		{
			id: 4,
			text: 'Very good service, my car is tip top and sparkling.',
		},
		{
			id: 5,
			text: `Hi would highly recommend Shafiek's car was to anyone. Great service and someone you can trust with your vehicle. Our cars has never been this clean. Thanks for the great service Shafiek.`,
		},
		{
			id: 6,
			text: 'They did an excellent job in cleaning my vehicles. They were professional and thorough. Highly recommend.',
		},
	],
};
