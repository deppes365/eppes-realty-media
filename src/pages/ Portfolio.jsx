import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';


function Portfolio({ portfolioData }) {
	const [filter, setFilter] = useState('all');
	const [filteredImages, setFilteredImages] = useState(null);

	useEffect(() => {
		portfolioData && setFilteredImages(portfolioData);
	}, [portfolioData]);

	const handleFilter = e => {
		e.preventDefault();

		setFilter(e.target.dataset.filter);

		const filterInput = e.target.dataset.filter;
		const images = portfolioData;

		if (filterInput === 'all') {
			return setFilteredImages(portfolioData);
		}

		const newImages = images.filter(image => {
			return image.type === filterInput;
		});

		setFilteredImages(newImages);
	};

	return (
		<div className="page relative top-[4rem] scroll-mt-[4rem] md:top-[6rem] md:scroll-mt-[6rem] w-full flex justify-center pb-16">
			<div className="w-full max-w-[1400px] flex flex-col px-4">
				<h1 className="text-left mt-8 mb-10 text-4xl font-semibold ">
					Portfolio
				</h1>
				<h2 className="text-center mb-12">
					<span className="text-center text-3xl font-semibold border-b-4 border-teal-400">
						Photography
					</span>
				</h2>
				<div className="flex justify-center items-center gap-2 mb-8">
					<button
						data-filter="all"
						className={`${
							filter === 'all' ? 'bg-teal-500 text-white' : ''
						} shadow-md px-1 rounded-[5px] text-xl`}
						onClick={handleFilter}
					>
						All
					</button>
					<button
						data-filter="ground"
						className={`${
							filter === 'ground' ? 'bg-teal-500 text-white' : ''
						} shadow-md px-1 rounded-[5px] text-xl`}
						onClick={handleFilter}
					>
						Interior/Exterior
					</button>
					<button
						data-filter="aerial"
						className={`${
							filter === 'aerial' ? 'bg-teal-500 text-white' : ''
						} shadow-md px-1 rounded-[5px] text-xl`}
						onClick={handleFilter}
					>
						Aerial
					</button>
				</div>
				

				<div className="w-full max-w-[1400px] flex flex-wrap justify-center gap-4">
					{filteredImages &&
						filteredImages?.map((image, i) => {
							return (
								<img
									key={`${image?.type}${i}`}
									src={image?.source}
									className="flex-1 grow-0 min-w-[375px] shadow-md"
								/>
							);
						})}
				</div>
			</div>
		</div>
	);
}
Portfolio.propTypes = {
	portfolioData: PropTypes.array
}

export default Portfolio;
