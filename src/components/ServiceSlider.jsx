"use client";

// icons
import {
	RxCrop,
	RxPencil2,
	RxDesktop,
	RxReader,
	RxRocket,
	RxArrowTopRight,
} from "react-icons/rx";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// init Swiper:
/* const swiper = new Swiper(".swiper", {
	// configure Swiper to use modules
	modules: [FreeMode, Pagination],
}); */

// data
const serviceData = [
	{
		icon: <RxCrop />,
		title: "Branding",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
	},
	{
		icon: <RxPencil2 />,
		title: "Design",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
	},
	{
		icon: <RxDesktop />,
		title: "Development",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
	},
	{
		icon: <RxReader />,
		title: "Copywriting",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
	},
	{
		icon: <RxRocket />,
		title: "SEO",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
	},
];

const ServiceSlider = () => {
	return (
		<Swiper
			breakpoints={{
				320: { slidesPerView: 1, spaceBetween: 15 },
				640: { slidesPerView: 3, spaceBetween: 15 },
			}}
			freeMode={true}
			pagination={{ clickable: true }}
			modules={[FreeMode, Pagination]}
			className='h-[240px] sm:h-[340px]'
		>
			{serviceData.map((item, index) => (
				<SwiperSlide key={index}>
					<div className='bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-2 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 cursor-pointer group hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300'>
						{/* icon */}
						<div className='text-4xl text-accent mb-4 sm:text-xs md:text-4xl'>
							{item.icon}
						</div>
						{/* title & desc */}
						<div className='mb-8 sm:mb-1'>
							<div className='mb-2 text-lg sm:text-sm md:text-xl'>
								{item.title}
							</div>
							<p className='max-w-[350px] leading-normal sm:text-sm md:text-base'>
								{item.description}
							</p>
						</div>
						{/* arrow */}
						<div className='text-3xl sm:text-sm md:text-3xl'>
							<RxArrowTopRight className='group-hover:rotate-45 group-hover:text-accent transition-all duration-300' />
						</div>
					</div>
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export default ServiceSlider;
