import React from 'react';
import styles from './style.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {contactActions} from "../../redux/modules/contact";
import ArrowIcon from "../Icons/ArrowIcon";
import useContactForm from "../../hooks/useContactForm";
import {ToastContainer, toast, Bounce} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useIsMobile from "../../hooks/useIsMobile";
import usePreventScroll from "../../hooks/usePreventScroll";

const Index = ({ }) => {
	const dispatch = useDispatch();
	const {values, setValues, handleChange} = useContactForm();
	const isMobile = useIsMobile();
	const openDetail = useSelector(({contact}) => contact.openContactForm);
	usePreventScroll(openDetail);
	const handleCloseDetail = () => {
		dispatch(contactActions.setOpenContactForm(false))
	}

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const req = await sendEmail(values.email, values.subject, values.message);
			if (req.status === 200) {
				toast.success('🦄Thank you for your message.', {
					position: "bottom-center",
					autoClose: 3000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: "dark",
					transition: Bounce,
				});
				setValues({ email: '', subject: '', message: '' })

			}
		} catch (e) {
			toast.error('🦄Oops something went wrong. Please try again.', {
				position: "bottom-center",
				autoClose: 3000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "dark",
				transition: Bounce,
			});
		}
	}
	const sendEmail = async (email, subject, message) => {
		return await fetch('/api/contact', {
			method: 'POST',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify({
				email,
				subject,
				message,
			})
		})
	}
	return (
	<section className={`${styles.portalWrap} ${isMobile ? styles.isMobile : ''}`}>
		<div className={styles.fakeBg} />
		<div className={styles.formWrap}>
			<div className={styles.detailInfo}>
				<button className={styles.goBack} onClick={handleCloseDetail}>
					<ArrowIcon width={30} height={30} fill='#fff' />
				</button>
				<form onSubmit={handleSubmit}>
					<label htmlFor='email'>Email</label>
					<input
						required
						id='email'
						value={values.email}
						onChange={handleChange}
						type='email'
					/>

					<label htmlFor='subject'>Subject</label>
					<input
						required
						id='subject'
						value={values.subject}
						onChange={handleChange}
						type='text'
					/>
					<label htmlFor='message'>Message</label>
					<textarea
						required
						value={values.message}
						onChange={handleChange}
						id='message'
						rows={8}
					/>
					<button type='submit' value='Submit'>Send</button>
				</form>
			</div>
		</div>
		<ToastContainer />
	</section>
	)
};

export default Index;