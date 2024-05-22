import { useState } from 'react';
import Logo from '../assets/images/erm-logo.png';
import { NavLink } from 'react-router-dom';
import { FaInstagram } from "react-icons/fa6";

function Navbar() {
	const [menuActive, setMenuActive] = useState(false);

	const toggleMenu = () => {
		if(!menuActive) {
			document.body.style.overflowY = 'hidden';
			setMenuActive(p => !p)
		} else if(menuActive) {
			document.body.style.overflowY = 'scroll';
			setMenuActive(p => !p)
		}
	}

	return (
		<div className="navbar h-[5rem] w-full py-2 flex justify-center items-center">
			<div className="w-full flex justify-between items-center">
				<img src={Logo} alt="" className="w-[150px] relative z-[11] md:ml-4" />
				<ul className={`menu fixed md:static z-[10] top-[0]  flex flex-col md:flex-row justify-center md:mr-4 gap-12 bg-white md:bg-transparent w-full md:w-auto h-[100dvh] md:h-auto  items-center [&>li]:text-3xl md:[&>li]:text-lg ${menuActive ? 'translate-x-0 md:translate-x-0' : 'translate-x-[100%] md:translate-x-0' } transition duration-300`} onClick={() => {
					if(menuActive && document.querySelector('.menu').classList.contains('fixed')) {
						return toggleMenu()
					}
				}}>
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
						<NavLink to='/contact'>Contact</NavLink>
					</li>
					<li className='md:hidden flex mt-6'><a href="https://www.instagram.com/eppesrealtymedia/?igsh=cm9ybXEzMTM0bzl1&utm_source=qr" target='_blank' rel='noreferrer'><FaInstagram /></a></li>
				</ul>
				<div className={`hamburger ${menuActive ? 'active' : ''} w-[2.25rem] h-[2.25rem] flex flex-col relative z-[11] cursor-pointer md:hidden mr-4`} onClick={toggleMenu}>
					<div className='topLine'></div>
					<div className="middleLine"></div>
					<div className="bottomLine"></div>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
