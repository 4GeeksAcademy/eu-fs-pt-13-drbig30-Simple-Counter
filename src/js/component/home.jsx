import React from "react";
import Simplecounter from "./simplecounter.";
import Digit from "./digit";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="bigCounter">
			<h1>I´m in Home</h1>
			<Simplecounter/>
			<div className="Four"></div>
			<div className="Three"></div>
			<div className="Two"></div>
			<div className="One"><Digit digit={}></Digit></div>
			<div className="timer">
                    <i class="fas fa-clock"></i>
                </div>

		</div>
	);
};

export default Home;
