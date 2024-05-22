import { FaCircleCheck } from 'react-icons/fa6';
import { FaCircleXmark } from 'react-icons/fa6';
import PropTypes from 'prop-types';

function Services({ servicesData }) {
	return (
		<div className="page relative top-[4rem] scroll-mt-[4rem] md:top-[6rem] md:scroll-mt-[6rem] w-full flex justify-center">
			<div className="w-full max-w-[1400px] px-4 flex flex-col">
				<h1 className="text-left mt-8 text-4xl font-semibold">Services</h1>
				<div className="w-full flex flex-col items-center mt-10 mb-8">
					<h2 className="text-3xl mb-2">Packages</h2>
					<p className="text-neutral-500 text-center max-w-[1000px]">
						&#x2022; Package prices are based on homes up to 2000 sqft. Prices
						increase $100 every 1000 sqft, which adds up to 15 more HDR
						interior/exterior photos. &#x2022;
					</p>
					<div className="w-full flex gap-4 py-8">
						<div className="w-full flex gap-6 justify-center flex-wrap">
							{servicesData &&
								servicesData?.mainBundles?.map((bundle, i) => {
									let order = ''

									if(bundle?.bundleName === 'Plus') {
										order = 'order-1'
									} else if(bundle?.bundleName === 'Pro') {
										order = 'order-2'
									} else if(bundle?.bundleName === 'Base') {
										order = 'order-3'
									}

									return (
										<div
											key={`bundle${i}`}
											className={`shadow-lg rounded-3xl overflow-hidden ${order}`}
										>
											<div className="w-full h-[12rem]">
												<img
													src={bundle?.backgroundImage}
													className="w-full h-full object-cover"
													alt=""
												/>
											</div>
											<div className="p-2">
												<h1 className="inline-block mb-4 text-3xl font-semibold relative after:w-[100%]  after:h-[4px] after:absolute after:bg-teal-300 after:bottom-[-5px] after:left-0">
													{bundle?.bundleName}{' '}
													{bundle?.popular ? (
														<span className="text-neutral-500 text-sm">
															(Most Popular)
														</span>
													) : (
														''
													)}
												</h1>
												<div className="flex items-center gap-2">
													{bundle?.services?.photos ? (
														<FaCircleCheck className="text-teal-500" />
													) : (
														<FaCircleXmark className="text-neutral-400" />
													)}
													<p
														className={`${
															bundle?.services?.photos ? '' : 'text-neutral-500'
														}`}
													>
														Interior/Exterior HDR Photos (Up to 25)
													</p>
												</div>
												<div className="flex items-center gap-2">
													{bundle?.services?.aerialPhotos ? (
														<FaCircleCheck className="text-teal-500" />
													) : (
														<FaCircleXmark className="text-neutral-400" />
													)}
													<p
														className={`${
															bundle?.services?.aerialPhotos
																? ''
																: 'text-neutral-500'
														}`}
													>
														Aerial Photos (5-10)
													</p>
												</div>
												<div className="flex items-center gap-2">
													{bundle?.services?.floorPlan ? (
														<FaCircleCheck className="text-teal-500" />
													) : (
														<FaCircleXmark className="text-neutral-400" />
													)}
													<p
														className={`${
															bundle?.services?.floorPlan
																? ''
																: 'text-neutral-500'
														}`}
													>
														Floor Plan
													</p>
												</div>
												<div className="flex items-center gap-2">
													{bundle?.services?.socialVideo ? (
														<FaCircleCheck className="text-teal-500" />
													) : (
														<FaCircleXmark className="text-neutral-400" />
													)}
													<p
														className={`${
															bundle?.services?.socialVideo
																? ''
																: 'text-neutral-500'
														}`}
													>
														Vertical Social Media Video (30s - 60s)
													</p>
												</div>
												<div className="flex items-center gap-2">
													{bundle?.services?.socialAerialVideo ? (
														<FaCircleCheck className="text-teal-500" />
													) : (
														<FaCircleXmark className="text-neutral-400" />
													)}
													<p
														className={`${
															bundle?.services?.socialAerialVideo
																? ''
																: 'text-neutral-500'
														}`}
													>
														Add Aerial Footage To Social Media Video
													</p>
												</div>
												<h2 className="text-right font-semibold text-2xl mt-4 mr-4">
													{bundle?.price}
												</h2>
											</div>
										</div>
									);
								})}
						</div>
					</div>
				</div>

				<div className="flex flex-col items-center gap-4">
					<h2 className="text-3xl">Individual Services</h2>
					<div className="flex gap-4 flex-wrap justify-center mb-16">
						{servicesData &&
							servicesData?.individualServices?.map((service, i) => {
								return (
									<div
										key={`individual${i}`}
										className="shadow-xl rounded-[15px] max-w-[275px] min-h-[100px] overflow-hidden flex flex-col"
									>
										<div className="bg-[#3b3b3b] py-1 px-2">
											<h1 className="font-semibold text-center text-white">
												{service.service}
											</h1>
										</div>
										<div className="p-2 flex flex-col h-full justify-between">
											<p>{service.description}</p>
											<p className="text-right text-xl font-semibold">
												{service.price}
											</p>
										</div>
									</div>
								);
							})}
					</div>
				</div>
			</div>
		</div>
	);
}
Services.propTypes = {
	servicesData: PropTypes.object
}

export default Services;
