import Image from "next/image";
import TopLeft from "../../public/top-left-img.png";

const TopLeftImg = () => {
	return (
		<div className='absolute left-0 top-0 z-10 mix-blend-color-dodge w-[200px] xl:w-[400px] opacity-50 pointer-events-none'>
			<Image
				src={TopLeft}
				alt=''
				/* width={400}
				height={400} */
				priority={true}
				style={{ aspectRatio: "137/135" }}
			/>
		</div>
	);
};

export default TopLeftImg;
