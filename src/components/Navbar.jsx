import logo from "../assets/logo.svg";
import LinkButton from "./LinkButton";

const Navbar = () => {
	return (
		<nav className='flex p-6 lg:p-8 items-center justify-between'>
			<a href='#' className='w-42 lg:w-52'>
				<img src={logo} alt='' />
			</a>
			<ul
				id='menu-bar'
				className='hidden lg:flex flex-1 mx-12 gap-8 text-lg'>
				<LinkButton text='Features' />
				<LinkButton text='Pricing' />
				<LinkButton text="What's New" />
			</ul>
			<div id='auth-container' className='flex gap-8 items-center'>
				<LinkButton text='Log in' className='hidden lg:block text-lg' />
				<button className='cursor-pointer font-bold text-xl bg-blue-400 px-6 py-3 rounded-lg font-display hover:bg-blue-300 hover:-translate-y-1 transition-all'>
					Sign up
				</button>
			</div>
		</nav>
	);
};

export default Navbar;
