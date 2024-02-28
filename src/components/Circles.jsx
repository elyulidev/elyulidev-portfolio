import Image from "next/image";
import CirclesImg from "../../public/circles.png";

const Circles = () => {
	return (
		<div className='w-[200px] xl:w-[300px] absolute -right-16 -bottom-2 z-10 mix-blend-color-dodge animate-pulse duration-75'>
			<Image
				src={CirclesImg}
				alt=''
				/* width={260}
				height={200} */
				style={{ aspectRatio: "150/91" }}
				//className='w-full h-full'
			/>
		</div>
	);
};

export default Circles;
