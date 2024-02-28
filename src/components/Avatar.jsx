import Image from "next/image";
import Julio from "../../public/avatar.webp";

const Avatar = () => {
	return (
		<div className='hidden xl:flex xl:max-w-none'>
			<Image
				src={Julio}
				alt=''
				/* width={737}
				height={678} */
				style={{ aspectRatio: "211/158" }}
				className='translate-z-0 w-full h-full'
			/>
		</div>
	);
};

export default Avatar;
