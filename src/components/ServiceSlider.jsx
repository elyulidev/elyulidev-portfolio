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

// data service
const serviceData = [
	{
		icon: <RxCrop />,
		title: "Frontend",
		description:
			"I turn designs into interactive experiences, each line of code is a step towards the desired usability and aesthetics.",
	},
	{
		icon: <RxPencil2 />,
		title: "Backend",
		description:
			"My focus is on system efficiency, security and scalability, collaborating closely with frontend developers.",
	},
	{
		icon: <RxDesktop />,
		title: "FullStack",
		description:
			"I transform abstract designs into interactive experiences and I manage logic and data.",
	},
	{
		icon: <RxRocket />,
		title: "SEO",
		description:
			"My focus lies in optimizing the visibility and positioning of web pages in search engines.",
	},
];

const ServiceSlider = () => {
	return (
		<Swiper
			breakpoints={{
				320: { slidesPerView: 1, spaceBetween: 15 },
				768: { slidesPerView: 2, spaceBetween: 15 },
				960: { slidesPerView: 3, spaceBetween: 15 },
			}}
			freeMode={true}
			pagination={{ clickable: true }}
			modules={[FreeMode, Pagination]}
			className='h-[240px] sm:h-[340px]'
		>
			{serviceData.map((item, index) => (
				<SwiperSlide key={index}>
					<div className='bg-[rgba(65,47,123,0.15)] h-[12em] md:h-[15em] lg:h-[17em] rounded-lg px-2 py-8 flex md:flex-col md:justify-between gap-x-6 sm:gap-x-0 cursor-pointer group hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300 '>
						{/* icon */}
						<div className='text-4xl text-accent mb-4'>{item.icon}</div>
						{/* title & desc */}
						<div className='mb-8 sm:mb-1'>
							<div className='px-2 mb-2 text-lg sm:text-sm md:text-xl'>
								{item.title}
							</div>
							<p className='px-2 leading-normal sm:text-sm md:text-base'>
								{item.description}
							</p>
						</div>
						{/* arrow */}
						<div className='min-w-8 text-3xl'>
							<RxArrowTopRight className='group-hover:rotate-45 group-hover:text-accent transition-all duration-300' />
						</div>
					</div>
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export default ServiceSlider;
