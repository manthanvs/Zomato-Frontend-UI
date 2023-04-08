import React, { Component } from "react";
import axios from "axios";
// import queryString from 'query-string';

// const url = "https://restdataapi.onrender.com/filters";

// const url = "https://restdataapi.onrender.com/filters/mealid";
// const url = "https://restdataapi.onrender.com/filters/mealid?cuisineid={}";
// const url = "https://restdataapi.onrender.com/filters/mealid?hcost={}&lcost={}";




class Filter extends Component {

  constructor() {
    super();
    this.state = {
        restaurantData: [],
        locationValues: []
    }
}

componentDidMount() {
    // let qs = queryString.parse(this.props.location.search);
    // console.log(qs);
    
    // eslint-disable-next-line
    // const restaurantId = qs.restaurant;
    axios(
        {
            method: 'GET',
            url: 'https://zomatowebmicroservices.onrender.com/citylist/locations',
            headers: { 'Content-Type': 'application/json' }
        }
    ).then(response => this.setState({ locationValues: response.data })).catch()
    axios(
        {
            method: 'GET',
            url: 'https://zomatowebmicroservices.onrender.com/restaurants/getRestaurants',
            headers: { 'Content-Type': 'application/json' }
        }
    ).then(response => this.setState({ restaurantData: response.data })).catch()
}
// nichhe lagne wale compoenents like location and restaurant data hyahaan hai 



  cuisineFilter = (event) => {
    let mealId = this.props.mealid;
    let cuisineId = event.target.value;
    let cuisineUrl = "";
    if (cuisineId === "") {
      cuisineUrl = `https://zomatowebmicroservices.onrender.com/filters/getbyonlymeal/${mealId}`;
    } else {
      cuisineUrl = `https://zomatowebmicroservices.onrender.com/filters/getbymeal/${mealId}?cuisineid=${cuisineId}`;
    }
    axios({
			method: "GET",
			url: `${cuisineUrl}`,
			headers: { "Content-Type": "application/json" },
		})
			.then((response) => this.props.restPerCuisine( response.data ))
			.catch();
  };


  costFilter = (event) => {
    let mealId = this.props.mealid;
    let cost = event.target.value.split("-");

    let lcost = cost[0];
    let hcost = cost[1];

    axios({
      methhod:"GET",
      url:`https://zomatowebmicroservices.onrender.com/filters/getbymeal/${mealId}?hcost=${hcost}&lcost=${lcost}`,
      headers: {"Content-Type":"application/json"},
    })
    .then((response)=>this.props.restPerCuisine(response.data))
    .catch();
  };





 handleLocationChange = (stateid) =>{
  console.log(stateid.target.value);
  var result = this.state.restaurantData.filter((item)=>{
    return item.state_id === Number(stateid.target.value) ;
  })
  console.log(result)
  this.props.restPerCuisine(result);
 }


  render() {
    const { restaurantData, locationValues } = this.state;
    console.log(restaurantData);
    return (
      <div className="filters mb-5 " id="filter-show">
        <h5 className="h5f-filter">
          Filters
          <a href="/" className="filter-close">
            <span>&times;</span>
          </a>
        </h5>

        <h5 className="h5f-loc">Select Location</h5>
        <select name="" className="selectloc"  onChange={this.handleLocationChange}>
          <option value="" className="sel-loc">
            Select Location
          </option>
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


        <h5 className="h5f-head">Cuisine</h5>
        <div onChange={this.cuisineFilter}>
          <input type="radio" name="cuisine" value="" />
          <span>All</span>
          <br />
          <input type="radio" name="cuisine" value="1" />
          <span>Nort Indian </span>
          <br />
          <input type="radio" name="cuisine" value="2" />
          <span>South Indian</span>
          <br />
          <input type="radio" name="cuisine" value="4" />
          <span>Fast Food </span>
          <br />
          <input type="radio" name="cuisine" value="3" />
          <span>Chinese </span>
          <br />
          <input type="radio" name="cuisine" value="5" />
          <span>Street Food </span>
          <br />
        </div>
        
        <h5 className="h5f-head">Cost For Two</h5>
        <div onChange={this.costFilter}>
          <input type="radio" name="cost" value="" />
          <span>All</span> <br />
          <input type="radio" name="cost" value="1-300" />
          <span>Less than 300</span> <br />
          <input type="radio" name="cost" value="301-600" />
          <span>301 to 600</span> <br />
          <input type="radio" name="cost" value="601-1000" />
          <span>601 to 1000</span> <br />
          <input type="radio" name="cost" value="1001-5000" />
          <span>1001 to 5000</span> <br />

          <h5 className="h5f-head">Sort</h5>
            <input type="radio" name="nms" value="1" id="" />
            <span>Price low to high</span> <br />
            <input type="radio" name="nms" value="-1" id="" />
            <span>Price high to low</span> <br />    
        </div>
      </div>
    );
  }
}
export default Filter;
