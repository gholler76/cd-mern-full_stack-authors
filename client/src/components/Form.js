import React, { useState } from "react";

const Form = (props) => {
	const { onSubmitHandler, initialEmcee, initialSong, initialLyrics } = props;
	const [emcee, setEmcee] = useState(initialEmcee);
	const [song, setSong] = useState(initialSong);
	const [lyrics, setLyrics] = useState(initialLyrics);
	return (
		<form
			onSubmit={(e) => {
				onSubmitHandler(e, { emcee, song, lyrics });
			}}
		>
			<p>
				<label>MC Name</label>
				<input
					type="text"
					name="emcee"
					value={emcee}
					onChange={(e) => {
						setEmcee(e.target.value);
					}}
				/>
			</p>
			<p>
				<label>Song:</label>
				<input
					type="text"
					name="song"
					value={song}
					onChange={(e) => {
						setSong(e.target.value);
					}}
				/>
			</p>
			<p>
				<label>Lyrics:</label>
				<textarea
					rows="4"
					columns="20"
					name="lyrics"
					value={lyrics}
					onChange={(e) => {
						setLyrics(e.target.value);
					}}
				/>
			</p>
			<input type="submit" />
		</form>
	);
};

export default Form;
