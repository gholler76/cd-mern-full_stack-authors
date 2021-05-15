import React, { useState } from "react";
import Form from "../components/Form";
import axios from "axios";
import { navigate } from "@reach/router";

const CreateRapper = (props) => {
	const [errors, setErrors] = useState([]);
	const onSubmitHandler = (e, data) => {
		e.preventDefault();
		axios
			.post("http://localhost:8000/api/rappers", data)
			.then((res) => {
				navigate("/");
			})
			.catch((err) => {
				console.log(err);
				const errorRes = err.response.data.errors;
				const errorArray = [];
				for (const key of Object.keys(errorRes)) {
					errorArray.push(errorRes[key].message);
				}
				setErrors(errorArray);
			});
	};
	return (
		<div>
			<h1>Add a new rapper</h1>
			{errors.map((error, index) => {
				return <p key={index}>{error}</p>;
			})}
			<Form
				onSubmitHandler={onSubmitHandler}
				initialEmcee=""
				initialSong=""
				initialLyrics=""
			/>
		</div>
	);
};

export default CreateRapper;
