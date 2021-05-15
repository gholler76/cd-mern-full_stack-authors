import React from "react";
import axios from "axios";

const DeleteButton = (props) => {
	const { id, deleteSuccess } = props;
	const onClickHandler = (e) => {
		axios
			.delete("http://localhost:8000/api/rappers/" + id)
			.then((res) => {
				deleteSuccess();
				console.log(res);
			})
			.catch((err) => {
				console.log(err);
			});
	};
	return <button onClick={onClickHandler}>Delete</button>;
};

export default DeleteButton;
