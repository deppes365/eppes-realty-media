function HomeHero({ homeSlide, count, elementNum }) {
	const [underlinedTitle, ...rest] = homeSlide?.title.split(' ');

	return (
		<div className={`absolute z-[-2] top-0 left-0 flex justify-center w-full h-full px-14 md:px-[8rem] transition-all duration-500 ${count === elementNum ? 'opacity-100' : 'opacity-0'}`}>
			<div className="w-full max-w-[1400px] h-full flex flex-col justify-center">
            <h2 className="text-white text-2xl md:text-3xl lg:text-5xl font-bold">
				<span className="inline-flex relative after:w-full after:h-[4px] after:absolute after:bg-teal-300 after:bottom-[-8px] left-0">
					{underlinedTitle || ''}
				</span>
				{` ${rest.join(' ')}` || ''}
			</h2>
			<p className="text-white md:text-lg lg:text-xl mt-4 max-w-[275px] md:max-w-[350px] lg:max-w-[500px]">{homeSlide?.description}</p>
			<div>
				<h3 className="text-teal-300 font-semibold mt-4">STARTING AT</h3>
				<p className="text-white text-2xl md:text-3xl lg:text-5xl font-extrabold">
					{homeSlide?.startingPrice}
				</p>
			</div>
			<div className="absolute top-0 left-0 w-full h-full z-[-1] bg-gradient-to-l from-neutral-50/0 to-neutral-900/30"></div>
            </div>
			<img
				src={homeSlide?.backgroundImage}
				alt=""
				className=" absolute top-0 left-0 z-[-2] w-full h-full object-cover"
			/>
		</div>
	);
}

export default HomeHero;
