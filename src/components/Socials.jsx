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
				<Link
					href={``}
					className='hover:text-accent transition-all duration-300'
				>
					<RiLinkedinBoxFill />
				</Link>
			</li>
			<li className=''>
				<Link
					href={``}
					className='hover:text-accent transition-all duration-300'
				>
					<RiTwitterXLine />
				</Link>
			</li>
			<li className=''>
				<Link
					href={``}
					className='hover:text-accent transition-all duration-300'
				>
					<RiInstagramLine />
				</Link>
			</li>
		</ul>
	);
};

export default Socials;
