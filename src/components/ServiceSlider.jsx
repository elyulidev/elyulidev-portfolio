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
			"Being a frontend software developer means being the visual architect of web applications. Turning designs into interactive experiences, each line of code is a step towards the desired usability and aesthetics.",
	},
	{
		icon: <RxPencil2 />,
		title: "Backend",
		description:
			"As a backend software developer, I dive into the essential infrastructure of applications, managing the logic and data that make them work. My focus is on system efficiency, security and scalability.",
	},
	{
		icon: <RxDesktop />,
		title: "FullStack",
		description:
			"As a fullstack developer, on the front-end, I transform abstract designs into interactive experiences. Simultaneously, in the backend, I manage logic and data, ensuring the efficiency and security of the system.",
	},
	{
		icon: <RxRocket />,
		title: "SEO",
		description:
			"Como profesional especializado en SEO, mi enfoque radica en optimizar la visibilidad y el posicionamiento de las páginas web en los motores de búsqueda. Implemento estrategias que aumentan el ranking en resultados de búsqueda clave. ",
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
					<div className='bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-2 py-8 flex md:flex-col gap-x-6 sm:gap-x-0 cursor-pointer group hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300'>
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
