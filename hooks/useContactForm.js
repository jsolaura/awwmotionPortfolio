import {useState} from "react";

const useContactForm = () => {
	const [values, setValues] = useState({
		email: '',
		subject: '',
		message: '',
	});

	const handleChange = (e) => {
		setValues(prevState => {
			return {
				...prevState,
				[e.target.id]: e.target.value,
			};
		});
	};

	return {values, setValues, handleChange};
}
export default useContactForm;