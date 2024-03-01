import { BsArrowRight } from "react-icons/bs";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// data
const workSlides = {
	slides: [
		{
			images: [
				{
					title: "bioqApp",
					path: "https://bioquimica-app.vercel.app/",
					img: "bg-bioqApp",
				},
				{
					title: "title",
					path: "/thumb2.jpg",
					img: "bg-thumb2",
				},
				{
					title: "title",
					path: "/thumb3.jpg",
					img: "bg-thumb3",
				},
				{
					title: "title",
					path: "/thumb4.jpg",
					img: "bg-thumb4",
				},
			],
		},
		{
			images: [
				{
					title: "title",
					path: "/thumb4.jpg",
					img: "bg-thumb4",
				},
				{
					title: "title",
					path: "/thumb1.jpg",
					img: "bg-bioqApp",
				},
				{
					title: "title",
					path: "/thumb2.jpg",
					img: "bg-thumb2",
				},
				{
					title: "title",
					path: "/thumb3.jpg",
					img: "bg-thumb3",
				},
			],
		},
	],
};

const WorkSlider = () => {
	return (
		<Swiper
			spaceBetween={10}
			freeMode={true}
			pagination={{ clickable: true }}
			modules={[Pagination]}
			className='h-[240px] sm:h-[480px]'
		>
			{workSlides.slides.map((slide, index) => (
				<SwiperSlide key={index}>
					<div className='grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer'>
						{slide.images.map((image, index) => (
							<a
								key={index}
								href={image.path}
								target='_blank'
								rel='noopener noreferrer'
							>
								<div className='relative rounded-lg overflow-hidden flex items-center justify-center group'>
									<div
										className={`${image.img} bg-cover bg-no-repeat flex items-center justify-center relative overflow-hidden group w-full h-[200px]`}
									>
										{" "}
										{/* <Image src={image.path} alt='' width={500} height={200} /> */}
										{/* overlay gradient */}
										<div className='absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700'></div>
										{/* title */}
										<div className='absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300'>
											<div className='flex items-center gap-x-2 text-[13px] tracking-[0.2em]'>
												{/* title part 1*/}
												<div className='delay-100'>LIVE</div>
												{/* title part 2*/}
												<div className='translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150'>
													PROJECT
												</div>
												{/* title part 3*/}
												<div className=''>
													<BsArrowRight />
												</div>
											</div>
										</div>
									</div>
								</div>
							</a>
						))}
					</div>
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export default WorkSlider;
