//Hero images
import hero1 from './assets/images/dummy-header.jpg';

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
			source: hero1,
		},
		{
			id: 2,
			source: hero1,
		},
		{
			id: 3,
			source: hero1,
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
		},
	],
};
