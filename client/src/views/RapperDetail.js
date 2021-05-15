import React, { useState, useEffect } from "react";
import DeleteButton from "../components/DeleteButton";
import { Link, navigate } from "@reach/router";
import axios from "axios";

const RapperDetail = (props) => {
	const { id } = props;
	const [rapper, setRapper] = useState({});
	useEffect(() => {
		axios
			.get("http://localhost:8000/api/rappers/" + id)
			.then((res) => {
				setRapper(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);
	return (
		<div>
			<h1>{rapper.emcee}</h1>
			<p>Song: {rapper.song}</p>
			<p>Barz: {rapper.lyrics}</p>
			<p>
				<Link to={"/" + rapper._id + "/edit"}>Edit</Link>
			</p>
		</div>
	);
};

export default RapperDetail;
