import React from "react";
import "./App.css";

const Home = ({ segundos }) => {
	const numeroFormateado = String(segundos).padStart(6, "0");

	return (
		<div className="counter-container">
			<div className="digit clock-icon">
				<i className="fas fa-clock"></i>
			</div>
			{numeroFormateado.split("").map((num, i) => (
				<div key={i} className="digit">
					{num}
				</div>
			))}
		</div>
	);
};

export default Home;

