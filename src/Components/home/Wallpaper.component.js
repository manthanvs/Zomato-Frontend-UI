import React from "react";
import axios from "axios";
import { withRouter } from 'react-router-dom';

// Class Component
class Wallpaper extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	handleLocationChange = (event) => {
		const state_id = event.target.value;
		axios({
			method: "GET",
			url: `http://localhost:3000/restaurants/getRestaurantBystateid?state_id=${state_id}`,
			headers: { "Content-Type": "application/json" },
		})
			.then((response) => this.setState({ restaurants: response.data }))
			.catch();
	};

	handleSearch = (event) => {
		const { restaurants } = this.state;
		const searchText = event.target.value;

		let filteredList;

		if (searchText === "") {
			filteredList = [];
		} else {
			filteredList = restaurants.filter((item) => {
				return item.restaurant_name
					.toLowerCase()
					.includes(searchText.toLowerCase());
			});
		}
		this.setState({ suggestions: filteredList, searchText: searchText });
	};

	handleRestaurantClick = (restaurant_fetch_id) => {this.props.history.push(`/restaurantdetailspage/details?restaurant=${restaurant_fetch_id.restaurant_id}`);};

	renderSuggestions = () => {
		const { suggestions, searchText } = this.state;
		if (suggestions && suggestions.length === 0 && searchText) {
			return (<ul>
						<li>No Match found</li>
					</ul>);
		}
		return (
			<ul className="unorderedList" style={{ color: "black" }}>
				{suggestions &&
					suggestions.map((item, index) => {
						return (
							<li
								className="orderedList"
								key={index}
								onClick={() =>
									this.handleRestaurantClick(item)
								}>
								<p>
									<img
										src={`${item.restaurant_thumb}`}
										className="resIcon"
										alt=""
									/>
									{`${item.restaurant_name}, ${item.state}`}
								</p>
							</li>
						);
					})}
			</ul>
		);
	};

	render() {
		const { locationValues } = this.props;
		return (
			<div className="banner">
				<div className="cont-fent">
					<div className="content1">
						<h1 className="cont-head">edureka!</h1>
						<p className="cont-head2">
							Find the best restaurant, cafes, and bars
						</p>
						<div className="row select-option">
							<div className=" m-auto col-lg-7 col-md-7 d-flex">
								<select
									id="location"
									className="form-select selected-option"
									aria-label="Default select example"
									onChange={this.handleLocationChange}>
									
									<option value="0">Select</option>
									{locationValues &&
										locationValues.map((item) => {
											return (
												<option
													key={item.state_id}
													value={
														item.state_id
													}>{`${item.state}`}</option>
											);
										})}
								</select>



								<div
								id="getRestaurant"
								className="form-select  selected-option "
								aria-label="Default select example"
							  >
							  <input id="query" type="text" placeholder="Please Select Restaurants" onChange={this.handleSearch} />
								{this.renderSuggestions()}
							  </div>
			  
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default withRouter(Wallpaper);
