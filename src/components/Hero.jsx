import HeaderTestimonial from "./HeaderTestimonial";

const Hero = () => {
	return (
		<div className='mx-6 py-5 text-center md:mx-12 lg:w-6xl lg:pt-20 pt-15 lg:mx-auto'>
			<div
				id='testimonial-container'
				className='flex justify-evenly flex-wrap gap-6'>
				<HeaderTestimonial text='The best I’ve found.' starsCount={5} />
				<HeaderTestimonial
					text='Way easier than Calendly.'
					starsCount={3}
				/>
				<HeaderTestimonial text='Okay, I’m hooked!' starsCount={4} />
			</div>
			<h1 className='text-8xl lg:text-9xl font-body font-bold mt-6 tracking-tight leading-30 lg:leading-32 lg:mt-10'>
				The modern way to{" "}
				<span className='text-emerald-400'>find a time to meet</span>
			</h1>
			<p className='mt-6 text-gray-300 font-display text-lg lg:text-3xl lg:max-w-4xl lg:mx-auto leading-snug'>
				You’ll love it for the flexible controls to keep your calendar
				sane. They’ll love it for the ultra-convenient booking
				experience.
			</p>
			<button className='mt-8 cursor-pointer font-medium text-xl lg:text-3xl bg-blue-400 px-8 py-4 lg:px-10 rounded-lg font-display hover:bg-blue-300 hover:-translate-y-1 transition-all'>
				Try SavvyCal risk-free
			</button>
			<p className='text-gray-300 font-body mt-4 text-lg'>
				Join over 2,000 happy customers
			</p>
		</div>
	);
};

export default Hero;
