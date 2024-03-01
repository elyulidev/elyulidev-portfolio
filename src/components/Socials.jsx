import Link from "next/link";
import {
	RiInstagramLine,
	RiLinkedinBoxFill,
	RiTwitterXLine,
} from "react-icons/ri";

const Socials = () => {
	return (
		<ul className='flex items-center gap-x-5 text-lg'>
			<li className=''>
				<a
					href={`https://www.linkedin.com/in/julio-cesar-fernandez-companioni-961174213/`}
					target='_blank'
					rel='noopener noreferrer'
					className='hover:text-accent transition-all duration-300'
				>
					<RiLinkedinBoxFill />
				</a>
			</li>
			<li className=''>
				<a
					href={`https://twitter.com/elyuli_dev`}
					target='_blank'
					rel='noopener noreferrer'
					className='hover:text-accent transition-all duration-300'
				>
					<RiTwitterXLine />
				</a>
			</li>
			{/* <li className=''>
				<a
					href={``}
					target='_blank'
					rel='noopener noreferrer'
					className='hover:text-accent transition-all duration-300'
				>
					<RiInstagramLine />
				</a>
			</li> */}
		</ul>
	);
};

export default Socials;
