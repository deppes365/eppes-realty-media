function Indicator({ count, elementNum, handleIndicator }) {
	return (
		<div
			className={`w-[10px] md:w-[12px] lg:w-[15px] h-[10px] md:h-[12px] lg:h-[15px] rounded-[50%] transition duration-200 cursor-pointer shadow-lg ${
				count === elementNum ? 'bg-teal-500' : 'bg-white/70 hover:bg-white/100'
			}`}
			onClick={() => handleIndicator(elementNum)}
		></div>
	);
}

export default Indicator;
