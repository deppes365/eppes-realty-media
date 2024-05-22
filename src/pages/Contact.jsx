import { useState, useRef } from 'react';
import PropTypes from 'prop-types';

import emailjs from '@emailjs/browser';
import BarLoader from 'react-spinners/BarLoader';

function Contact({ contactData }) {
	const [sending, setSending] = useState(false);
	const [messageSent, setMessageSent] = useState(false);
	const [messageFailed, setMessageFailed] = useState(false);
	const [fieldError, setFieldError] = useState({
		error: false,
		field: '',
	});

	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		companyName: '',
		email: '',
		message: '',
		phone: '',
	});

	const form = useRef();

	const handleChange = e => {
		setFormData(prevState => ({
			...prevState,
			[e.target.name]: e.target.value,
		}));
	};

	const handleSendEmail = () => {
		const { firstName, lastName, email, phone, message } = formData;

		if (!firstName.length) {
			setFieldError({
				error: true,
				field: 'firstName',
			});

			return;
		} else if (!lastName.length) {
			setFieldError({
				error: true,
				field: 'lastName',
			});

			return;
		} else if (!email.length || !email.includes('@')) {
			setFieldError({
				error: true,
				field: 'email',
			});

			return;
		} else if (phone.length < 10) {
			setFieldError({
				error: true,
				field: 'phone',
			});

			return;
		} else if (!message.length) {
			setFieldError({
				error: true,
				field: 'message',
			});

			return;
		}

		emailjs
			.sendForm(
				`${import.meta.env.VITE_EMAILJS_SERVICE_ID}`,
				`${import.meta.env.VITE_EMAILJS_TEMPLATE_ID}`,
				form.current,
				{
					publicKey: `${import.meta.env.VITE_EMAILJS_PUBLIC_KEY}`,
				}
			)
			.then(
				() => {
					setMessageSent(true);
				},
				() => {
					setMessageFailed(true);
				}
			);

		setSending(false);
	};

	const handleFocus = () => {
		fieldError.error &&
			setFieldError({
				error: false,
				field: '',
			});
	};

	return (
		<div className="page w-full flex flex-col items-center">
			<div className="w-full max-w-[1400px] px-4 flex">
				<h1 className="text-left mt-8 mb-2 text-4xl font-semibold">
					Contact Us
				</h1>
			</div>
			<div className="w-full h-auto flex flex-col md:flex-row">
				<div className="flex-2 hidden md:flex">
					<img
						className="w-full h-full object-cover"
						src={contactData?.backgroundImage}
						alt=""
					/>
				</div>
				<div className="min-w-[275px] md:min-w-[450px] flex-1 flex flex-col items-center justify-center gap-2 px-8 py-4 bg-[#3b3b3b] relative">
					{sending && (
						<div className="absolute w-full h-full z-5 bg-neutral-600/70 flex justify-center items-center">
							<div className="flex flex-col items-center gap-2">
								<h2 className="text-white text-2xl">Sending</h2>
								<BarLoader color="#15b8a6" height={8} width={200} />
							</div>
						</div>
					)}

					{messageSent && (
						<div className="absolute w-full h-full flex flex-col justify-center items-center bg-[#3b3b3b]">
							<h1 className="text-white text-2xl font-semibold border-b-4 border-teal-400 mb-6">
								Message Sent!
							</h1>
							<p className="text-white text-center text-xl">
								Thank you for reaching out to us at Eppes Realty Media! We will
								respond to you as soon as possible!
							</p>
						</div>
					)}

					{messageFailed && (
						<div className="absolute w-full h-full flex flex-col justify-center items-center bg-[#3b3b3b]">
							<h1 className="text-white text-2xl font-semibold border-b-4 border-red-500 mb-6">
								Message Failed!
							</h1>
							<p className="text-white text-center text-xl">
								Please refresh your browser and try again. <br />
								or contact us at:
							</p>
							<div className="text-center text-white text-lg">
								<p>
									Phone: <a href="tel:434-607-1136">(434)607-1136</a>
								</p>
								<p>
									Email:{' '}
									<a href="mailto:darren.eppes@gmail.com">
										darren.eppes@gmail.com
									</a>
								</p>
							</div>
						</div>
					)}
					<form
						ref={form}
						className="w-full max-w-[400px] flex flex-col gap-6 [&>input]:bg-transparent [&>input]:text-white [&>div>input]:text-white [&>div>input]:bg-transparent"
					>
						<h1 className="text-white text-2xl font-semibold border-b-4 border-teal-400 mb-6">
							Let&#39;s Connect!
						</h1>
						<div className="flex gap-2 justify-between">
							<input
								className={`w-[45%] border-b-4 focus-within:border-teal-400 focus-within:outline-none ${
									fieldError.field === 'firstName'
										? 'border-red-500'
										: 'border-white'
								}`}
								type="text"
								name="firstName"
								placeholder="First Name"
								value={formData.firstName}
								onChange={handleChange}
								onFocus={handleFocus}
							/>
							<input
								className={`w-[45%] border-b-4 focus-within:border-teal-400 focus-within:outline-none ${
									fieldError.field === 'lastName'
										? 'border-red-500'
										: 'border-white'
								}`}
								type="text"
								name="lastName"
								placeholder="Last Name"
								value={formData.lastName}
								onChange={handleChange}
								onFocus={handleFocus}
							/>
						</div>
						<input
							className="w-full border-b-4 border-white focus-within:border-teal-400 focus-within:outline-none"
							type="text"
							placeholder="Company Name"
							name="companyName"
							id="companyName"
							value={formData.companyName}
							onChange={handleChange}
							onFocus={handleFocus}
						/>
						<input
							className={`w-full border-b-4 focus-within:border-teal-400 focus-within:outline-none ${
								fieldError.field === 'email' ? 'border-red-500' : 'border-white'
							}`}
							type="email"
							name="email"
							id="email"
							placeholder="Email"
							value={formData.email}
							onChange={handleChange}
							onFocus={handleFocus}
						/>
						<input
							className={`w-full border-b-4 focus-within:border-teal-400 focus-within:outline-none ${
								fieldError.field === 'phone' ? 'border-red-500' : 'border-white'
							}`}
							type="tel"
							name="phone"
							id="phone"
							placeholder="Phone"
							value={formData.phone}
							onChange={handleChange}
							onFocus={handleFocus}
						/>
						<textarea
							className={`bg-transparent text-white w-full border-4 border-white p-2 focus-within:border-teal-400 focus-within:outline-none ${
								fieldError.field === 'message'
									? 'border-red-500'
									: 'border-white'
							}`}
							name="message"
							id="message"
							cols="30"
							rows="10"
							placeholder="Your message..."
							value={formData.message}
							onChange={handleChange}
							onFocus={handleFocus}
						></textarea>
						<div className={`${fieldError.error ? 'block' : 'hidden'}`}>
							<p className="bg-red-500 text-white rounded-xl text-center">
								Please complete required fields.
							</p>
						</div>
						<button
							className="text-white bg-teal-400 py-2 px-4"
							onClick={e => {
								e.preventDefault();
								setSending(true);
								handleSendEmail();
							}}
						>
							{sending ? 'Sending...' : 'Send'}
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}

Contact.propTypes = {
	contactData: PropTypes.object,
};

export default Contact;
