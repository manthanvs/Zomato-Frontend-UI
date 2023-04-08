import React from "react";
import axios from "axios";
import Wallpaper from "./Wallpaper.component";
import QuickSearch from "./QuickSearch.component";

// Class Component
class Home extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			location: [],
			mealType: [],
			favfood: [],
		};
	}

	componentDidMount() {
		axios({
			method: "GET",
			url: "https://zomatowebmicroservices.onrender.com/citylist/locations",
			headers: { "Content-Type": "application/json" },
		})
			.then((response) => this.setState({ location: response.data }))
			.catch();

		axios({
			method: "GET",
			url: "https://zomatowebmicroservices.onrender.com/meals/getMeals",
			headers: { "Content-Type": "application/json" },
		})
			.then((response) => this.setState({ mealType: response.data }))
			.catch();

		axios({
			method: "GET",
			url: "https://zomatowebmicroservices.onrender.com/favfood/getFavfood",
			headers: { "Content-Type": "application/json" },
		})
			.then((response) => this.setState({ favfood: response.data }))
			.catch();
	}

	render() {
		const { location, mealType ,favfood } = this.state;
		return (
			<div className="app">
				<Wallpaper locationValues={location} />
				<QuickSearch meals={mealType} favfood={favfood} />
			</div>
		);
	}
}

export default Home;
