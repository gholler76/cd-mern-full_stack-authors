import React, { useState, useEffect } from "react";
import DeleteButton from "../components/DeleteButton";
import Form from "../components/Form";
import axios from "axios";
import { navigate } from "@reach/router";

const EditRapper = (props) => {
	const { id } = props;
	const [rapper, setRapper] = useState({});
	const [loaded, setLoaded] = useState(false);
	useEffect(() => {
		axios
			.get("http://localhost:8000/api/rappers/" + id)
			.then((res) => {
				setRapper(res.data);
				setLoaded(true);
			})
			.catch((err) => console.log(err));
	}, []);
	const [errors, setErrors] = useState([]);
	const onSubmitHandler = (e, data) => {
		e.preventDefault();
		axios
			.put("http://localhost:8000/api/rappers/" + id, data)
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
			<h1>Edit {rapper.emcee} </h1>
			{errors.map((error, index) => {
				return <p key={index}>{error}</p>;
			})}
			{loaded && (
				<Form
					onSubmitHandler={onSubmitHandler}
					initialEmcee={rapper.emcee}
					initialSong={rapper.song}
					initialLyrics={rapper.lyrics}
				/>
			)}
		</div>
	);
};

export default EditRapper;
