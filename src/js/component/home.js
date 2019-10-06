import React from "react";

//include images into your bundle
export class TrafficLight extends React.Component {
	constructor() {
		super();
		this.state = {
			clickedlight: null
		};
	}

	render() {
		let redlight =
			this.state.clickedlight === "red" ? "red selected" : "red";
		let yellowlight =
			this.state.clickedlight === "yellow" ? "yellow selected" : "yellow";
		let greenlight =
			this.state.clickedlight === "green" ? "green selected" : "green";

		return (
			<div className="trafficLight mx-auto">
				<div
					className={"red light " + redlight}
					onClick={() => this.setState({ clickedlight: "red" })}
				/>
				<div
					className={"yellow light " + yellowlight}
					onClick={() => this.setState({ clickedlight: "yellow" })}
				/>
				<div
					className={"green light " + greenlight}
					onClick={() => this.setState({ clickedlight: "green" })}
				/>
			</div>
		);
	}
}
