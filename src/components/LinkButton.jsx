import React from "react";

function LinkButton({ text, className = "" }) {
	return (
		<button className={`block relative group cursor-pointer ${className}`}>
			<span className='text-lg'>{text}</span>
			<span className='absolute h-1 w-full bg-blue-500 -bottom-2 scale-x-0 left-0 right-0 group-hover:scale-x-100 transition-all duration-150 rounded-full'></span>
		</button>
	);
}

export default LinkButton;
