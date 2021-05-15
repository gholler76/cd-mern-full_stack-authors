import React, { useEffect, useState } from "react";
import { Link } from "@reach/router";
import axios from "axios";
import DeleteButton from "../components/DeleteButton";

const Main = (props) => {
	const [rappers, setRappers] = useState([]);
	useEffect(() => {
		axios
			.get("http://localhost:8000/api/rappers")
			.then((res) => {
				setRappers(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	const removeFromDom = (id) => {
		setRappers(rappers.filter((rapper) => rapper._id != id));
	};

	return (
		<div>
			<h1>Rappers</h1>
			<button>
				<Link to="/create">Add some new Barz</Link>
			</button>
			<table>
				<thead>
					<tr>
						<th>Rappers</th>
						<th>Song</th>
						<th>Lyrics</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{rappers.map((rapper, index) => {
						return (
							<tr key={index}>
								<td>
									<h3>{rapper.emcee}</h3>
								</td>
								<td>
									<h4>{rapper.song}</h4>
								</td>
								<td>
									<pre>{rapper.lyrics}</pre>
								</td>
								<td>
									<Link to={"/" + rapper._id + "/edit"}>
										Edit
									</Link>
									<DeleteButton
										id={rapper._id}
										deleteSuccess={() =>
											removeFromDom(rapper._id)
										}
									/>
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};

export default Main;
