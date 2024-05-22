import WhiteERMLogo from '../assets/images/logos/erm-logo-white.png';
import { FaInstagram, FaPhone, FaEnvelope } from "react-icons/fa6";

function Footer() {
	return (
		<div className="bg-[#3b3b3b] w-full pb-8 pt-4 px-2 relative bottom-[-5rem] flex justify-center">
			<div className="w-full max-w-[1400px] flex flex-col items-start md:flex-row md:justify-between md:items-center px-2 md:px-4">
				<div className='flex flex-col'>
					<img src={WhiteERMLogo} className="w-[120px]" alt="" />
                    <a className='text-md text-white flex items-center gap-2' href="tel:434-607-1136"><FaPhone /> (434)607-1136</a>
					<a className='text-md text-white flex items-center gap-2' href="mailto:contact@eppesrealtymedia.com"><FaEnvelope/> contact@eppesrealtymedia.com</a>
				</div>
				<div><a className='text-white flex mt-2 items-center gap-2 text-md' href="https://www.instagram.com/eppesrealtymedia/?igsh=cm9ybXEzMTM0bzl1&utm_source=qr" target='_blank' rel='noreferrer'><FaInstagram />@eppesrealtymedia</a></div>
			</div>
		</div>
	);
}

export default Footer;
