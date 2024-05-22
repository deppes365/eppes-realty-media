import { FaCircleChevronLeft, FaCircleChevronRight } from 'react-icons/fa6';
import { NavLink } from 'react-router-dom';
import HomeHero from '../components/HomeHero';
import Indicator from '../components/Indicator';
import { useState, useEffect } from 'react';
import '../Sass/App.scss';
import BarLoader from 'react-spinners/BarLoader';
import PropTypes from 'prop-types';

function Home({ homeData, loading }) {
	const [count, setCount] = useState(0);
	const [controlBtnsClicked, setControlBtnsClicked] = useState(false);

	useEffect(() => {
		if (!controlBtnsClicked) {
			const interval = setInterval(() => {
				if (count >= homeData?.homeSlides.length - 1) {
					setCount(0);
				} else {
					setCount(p => p + 1);
				}
			}, 6000);

			return () => clearInterval(interval);
		} else {
			const timeout = setTimeout(() => {
				setControlBtnsClicked(false);
			}, 7000);

			return () => clearTimeout(timeout);
		}
	}, [count, controlBtnsClicked]);

	const handleNext = () => {
		setControlBtnsClicked(true);

		if (count === homeData?.homeSlides.length - 1) {
			return setCount(0);
		}

		setCount(p => p + 1);
	};

	const handlePrev = () => {
		setControlBtnsClicked(true);

		if (count === 0) {
			return setCount(homeData?.homeSlides.length - 1);
		}

		setCount(p => p - 1);
	};

	const handleIndicator = elementNum => {
		setControlBtnsClicked(true);
		setCount(elementNum);
	};

	return (
		<div className="page w-full flex flex-col items-center">
			<div className="w-full h-[50dvh] md:h-[65dvh] lg:h-[70dvh] relative">
				{loading ? (
					<div className="w-full h-full flex flex-col justify-center items-center bg-neutral-700">
						<h1 className="text-white text-2xl">Loading</h1>
						<BarLoader color="#15b8a6" height={8} width={200} />
					</div>
				) : (
					<div className="px-4 md:px-8 absolute w-full h-full z-[1] bg-gradient-to-l from-neutral-50/0 to-neutral-900/30 flex items-center justify-between gap-16">
						<FaCircleChevronLeft
							className="text-2xl md:text-3xl lg:text-5xl text-neutral-100/60 cursor-pointer transition duration-300 hover:text-neutral-200/100"
							onClick={handlePrev}
						/>
						{homeData?.homeSlides?.map((homeSlide, i) => (
							<HomeHero
								key={i}
								elementNum={i}
								count={count}
								homeSlide={homeSlide}
							/>
						))}

						<FaCircleChevronRight
							className="text-2xl md:text-3xl lg:text-5xl text-neutral-100/60 cursor-pointer transition duration-300 hover:text-neutral-200/100"
							onClick={handleNext}
						/>
						<div className="absolute z-[2] left-[50%] translate-x-[-50%] bottom-[3rem] flex gap-2 md:gap-4 lg:gap-6">
							{homeData?.homeSlides.map((homeSlide, i) => (
								<Indicator
									key={i}
									elementNum={i}
									count={count}
									handleIndicator={handleIndicator}
								/>
							))}
						</div>
					</div>
				)}
			</div>
			<div className="w-full  flex flex-col justify-center items-center gap-4 py-8 px-8 bg-teal-500 text-center">
				<h1 className="text-2xl md:text-3xl font-semibold text-white ">
					Elevating Spaces Through Captivating Visuals
				</h1>
				<div className="w-[300px] h-[3px] bg-white"></div>
				<p className="text-md max-w-[900px] text-white">
					Eppes Realty Media is a real estate media company based in Richmond,
					Virginia. We provide high quality real estate photography, aerial
					photography and videography, and other real estate media. If you want
					to stand out from the rest of the crowd, Eppes Realty Media will help
					you do just that!
				</p>
				{/* <NavLink
					to="/about"
					className="text-white bg-[#3b3b3b] py-1 px-4 rounded-3xl"
				>
					Learn More
				</NavLink> */}
			</div>
			<div className="w-full flex justify-center py-8 md:py-20">
				<div className="w-full flex flex-col items-center">
					<h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
						Residential Photography
					</h1>
					<p className="text-neutral-600 md:text-xl">
						Packages Starting at $195
					</p>
					<div className="flex flex-wrap gap-2 md:gap-0 w-full mt-8">
						{homeData?.previewImages.map((previewImage, i) => {
							return (
								<div key={`previewImg${i}`} className="md:flex-1">
									<img
										src={previewImage}
										alt=""
										className="w-full h-full object-cover"
									/>
								</div>
							);
						})}
					</div>
					<NavLink
						to="/portfolio"
						className="mt-8 bg-teal-500 text-white py-1 px-2 rounded-2xl"
					>
						See More
					</NavLink>
				</div>
			</div>
		</div>
	);
}
Home.propTypes = {
	loading: PropTypes.bool,
	homeData: PropTypes.object
}

export default Home;
