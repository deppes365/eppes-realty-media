import WhiteERMLogo from '../assets/images/logos/erm-logo-white.png';
import { FaInstagram } from "react-icons/fa6";

function Footer() {
	return (
		<div className="bg-[#3b3b3b] w-full pb-8 pt-4 relative bottom-[-5rem] flex justify-center">
			<div className="w-full max-w-[1400px] flex items-center px-2 md:px-4">
				<div>
					<img src={WhiteERMLogo} className="w-[120px]" alt="" />
                    <a className='text-sm text-white' href="tel:434-607-1136">Phone: (434)607-1136</a>
                    <a className='text-white text-xl flex mt-2' href="https://www.instagram.com/eppesrealtymedia/?igsh=cm9ybXEzMTM0bzl1&utm_source=qr" target='_blank' rel='noreferrer'><FaInstagram /></a>
				</div>
			</div>
		</div>
	);
}

export default Footer;
