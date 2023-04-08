import React, { Component } from "react";
import axios from "axios";
import "./Listing.css";
import Filter from "./Filter.component";
import ListingDisplay from "./ListingDisplay.component";

class ListingPage extends Component {
  constructor() {
    super();
    this.state = {
      restaurantList: ""
    };
  }

  filterRestData = (data) => {
    this.setState({ restaurantList: data });
  };

  render() {
    return (
      <div>
        <h3 className="title">
          Places near you for {this.props.match.params.mealType}
        </h3>
        <button
          type="button"
          className="btn btn-outline-secondary bg-white filter-btn"
        >
          <a href="#filter-show" className="filter-tag">
            <i className="bi bi-funnel pe-1"></i>
            Filters
          </a>
        </button>
        <section className="filter-content">
          <Filter
            mealid={this.props.location.search.split("=")[1]}
            restPerCuisine={(data) => {
              this.filterRestData(data);
            }}
          />
          <div className="items">
            <ListingDisplay restaurantData={this.state.restaurantList} />
          </div>
        </section>
      </div>
    );
  }
  //api with axios
  componentDidMount() {
    let mealType = this.props.match.params.mealType;
    let mealId = this.props.location.search.split("=")[1];
    sessionStorage.setItem("mealId", mealId);
    sessionStorage.setItem("mealType", mealType);
    
    axios({
			method: "GET",
			url: `https://zomatowebmicroservices.onrender.com/restaurants/getRestaurantByMealType?mealid=${mealId}`,
			headers: { "Content-Type": "application/json" },
		})
			.then((response) => this.setState({ restaurantList: response.data }))
			.catch();
  }
}
export default ListingPage;
