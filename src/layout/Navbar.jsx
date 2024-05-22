import { useState } from 'react';
import Logo from '../assets/images/erm-logo.png';
import { NavLink } from 'react-router-dom';
import { FaInstagram, FaPhone, FaEnvelope } from 'react-icons/fa6';

function Navbar() {
	const [menuActive, setMenuActive] = useState(false);

	const toggleMenu = () => {
		if (!menuActive) {
			document.body.style.overflowY = 'hidden';
			setMenuActive(p => !p);
		} else if (menuActive) {
			document.body.style.overflowY = 'scroll';
			setMenuActive(p => !p);
		}
	};

	return (
		<div className="navbar h-[4rem] md:h-[6rem] w-full flex flex-col justify-center items-center shadow-md">
			<div className="w-full px-8 hidden md:flex justify-end text-sm gap-4 bg-neutral-100">
				<a
					className="flex gap-1 items-center hover:text-teal-700 transition duration-200"
					href="tel:434-607-1136"
				>
					<FaPhone />
					1(434)607-1136
				</a>
				<a
					className="flex gap-1 items-center hover:text-teal-700 transition duration-200"
					href="mailto:contact@eppesrealtymedia.com"
				>
					<FaEnvelope />
					Email Us
				</a>
				<a
					className="flex gap-1 items-center hover:text-teal-700 transition duration-200"
					href="https://www.instagram.com/eppesrealtymedia/?igsh=cm9ybXEzMTM0bzl1&utm_source=qr"
					target="_blank"
					rel="noreferrer"
				>
					<FaInstagram />
					eppesrealtymedia
				</a>
			</div>
			<div className="w-full flex justify-between items-center">
				<img src={Logo} alt="" className="w-[150px] relative z-[11] md:ml-4" />
				<ul
					className={`menu fixed md:static z-[10] top-[0]  flex flex-col md:flex-row justify-center md:mr-4 gap-12 bg-white md:bg-transparent w-full md:w-auto h-[100dvh] md:h-auto  items-center [&>li]:text-3xl md:[&>li]:text-lg ${
						menuActive
							? 'translate-x-0 md:translate-x-0'
							: 'translate-x-[100%] md:translate-x-0'
					} transition duration-300`}
					onClick={() => {
						if (
							menuActive &&
							document.querySelector('.menu').classList.contains('fixed')
						) {
							return toggleMenu();
						}
					}}
				>
					<li>
						<NavLink
							to="/"
							className={({ isActive }) =>
								isActive
									? 'relative text-teal-500 after:absolute after:bottom-[-5px] after:left-[50%] after:translate-x-[-50%] after:w-full after:h-[3px] after:bg-teal-500 transition duration-200'
									: 'relative hover:text-teal-500 transition duration-200'
							}
						>
							Home
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/services"
							className={({ isActive }) =>
								isActive
									? 'relative text-teal-500 after:absolute after:bottom-[-5px] after:left-[50%] after:translate-x-[-50%] after:w-full after:h-[3px] after:bg-teal-500 transition duration-200'
									: 'relative hover:text-teal-500 transition duration-200'
							}
						>
							Services
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/portfolio"
							className={({ isActive }) =>
								isActive
									? 'relative text-teal-500 after:absolute after:bottom-[-5px] after:left-[50%] after:translate-x-[-50%] after:w-full after:h-[3px] after:bg-teal-500 transition duration-200'
									: 'relative hover:text-teal-500 transition duration-200'
							}
						>
							Portfolio
						</NavLink>
					</li>
					{/* <li>
						<NavLink
							to="/about"
							className={({ isActive }) =>
								isActive
									? 'relative text-teal-500 after:absolute after:bottom-[-5px] after:left-[50%] after:translate-x-[-50%] after:w-full after:h-[3px] after:bg-teal-500 transition duration-200'
									: 'relative hover:text-teal-500 transition duration-200'
							}
						>
							About
						</NavLink>
					</li> */}
					<li className="bg-teal-500 text-white px-4 py-1 rounded-[30px]">
						<NavLink to="/contact">Contact</NavLink>
					</li>
					<li className="md:hidden flex flex-col mt-6 w-full justify-center px-8">
						<div className="h-[1px] w-full bg-neutral-400 mb-12"></div>
						<div className="flex flex-col items-center">
							<a
								className="flex items-center gap-1 text-sm"
								href="https://www.instagram.com/eppesrealtymedia/?igsh=cm9ybXEzMTM0bzl1&utm_source=qr"
								target="_blank"
								rel="noreferrer"
							>
								<FaInstagram />
								@eppesrealtymedia
							</a>
							<a
								className="flex items-center gap-1 text-sm"
								href="tel:434-607-1136"
							>
								<FaPhone />
								1(434)607-1136
							</a>
							<a
								className="flex items-center gap-1 text-sm"
								href="mailto:contact@eppesrealtymedia.com"
							>
								<FaEnvelope />
								contact@eppesrealtymedia.com
							</a>
						</div>
					</li>
				</ul>
				<div
					className={`hamburger ${
						menuActive ? 'active' : ''
					} w-[2.25rem] h-[2.25rem] flex flex-col relative z-[11] cursor-pointer md:hidden mr-4`}
					onClick={toggleMenu}
				>
					<div className="topLine"></div>
					<div className="middleLine"></div>
					<div className="bottomLine"></div>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
