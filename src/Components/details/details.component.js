import React from "react";
import axios from "axios";
import "./details.css";
import queryString from "query-string";

// Class Component
class Details extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			restaurantData: {},
		};
	}

	componentDidMount() {
		const qs = queryString.parse(this.props.location.search);
		const restaurant_id = qs.restaurant;
		axios({
			method: "GET",
			url: `http://localhost:3000/restaurants/getRestaurantById/${restaurant_id}`,
			headers: { "Content-Type": "application/json" },
		})
			.then((response) =>
				this.setState({ restaurantData: response.data[0] })
			)
			.catch();
	}

	render() {
		const { restaurantData } = this.state;
        console.log(restaurantData);
        return (
			<div className="container">
				<div>
					<img
						src={restaurantData.restaurant_thumb}
						className="detailMainPic"
						alt=""
					/>
				</div>
				<h1 className="DetailHeader">
					{restaurantData.restaurant_name}
				</h1>
				<div className="tabs">
					<div className="tab">
						<input
							id="tab-1"
							type="radio"
							defaultChecked
							name="tab-group-1"
						/>
						<label htmlFor="tab-1">Overview</label>
						<div className="content ">
							<div className="about">About this place</div>
							<div className="Detailhead">Cuisine</div>
							<div className="Detailvalue">
								{restaurantData.cuisines && restaurantData.cuisines.map((item)=>{
									return <div className="Detailvalue"
									key={item.cuisine_id}>
										<p>{item.cuisine_id},{item.cuisine_name}</p>
									</div>
								})}

							</div>
							<div className="Detailhead">Average Cost</div>
							<div className="Detailvalue">{`${restaurantData.cost} for two people (approx)`}</div>
						</div>
					</div>


					<div className="tab">
						<input id="tab-2" type="radio" name="tab-group-1" />
						<label htmlFor="tab-2">Contact</label>
						<div className="content">
							<div className="Detailhead">Phone</div>
							<div className="Detailvalue">
								{restaurantData.contact_number}
							</div>
							<div className="Detailhead">Locality</div>
							<div className="Detailvalue">{`${restaurantData.address}`}</div>
						</div>
						</div>
					</div>
				


					
				</div>
		);
	}
}

export default Details;






