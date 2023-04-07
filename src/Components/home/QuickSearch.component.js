import React from "react";
import "../../Styles/quicksearch.css";
import MealItemCards from "./MealItems.component.js";
import FoodCards from "./FoodCards.component.js";
import SectionHeadings from "./SectionHeadings.component";

// Class Component
class QuickSearch extends React.Component {
  
	render() {
	const { meals , favfood } = this.props;
    return (
      <div className="container-fluid">
        <div className="card-container d-flex justify-content-center">
          <SectionHeadings title={"Discover Restaurants by Meal"} />
          <MealItemCards mealData={meals} />
          <SectionHeadings title={"Order Your Favourite Food Here"} />
          <FoodCards favfoodData={favfood} />
        </div>
      </div>
    );
  }
}
export default QuickSearch;












































// class QuickSearch extends React.Component {
// 	navigateToFilter = () => {
// 		this.props.history.push(`/filter`);
// 	};

// 	render() {
// 		const { quicksearch } = this.props;
// 		if(quicksearch){
// 			return (
// 				<div className="container">
// 					<div className="quicksearch">Quick Searches</div>
// 					<div className="subheading">
// 						Discover Restaurants by type of meal
// 					</div>
// 					<div className="row">
// 						{quicksearch &&
// 							quicksearch.map((item) => {
// 								return (
// 									<div
// 										className="col-sm-12 col-md-6 col-lg-4"
// 										onClick={this.navigateToFilter}
// 					key={item.mealtype} >
// 										<div className="one">
// 											<div className="innerboxpic">
// 												<img
// 													className="Breakfast"
// 													src={item.meal_image}
// 													alt=""
// 												/>
// 											</div>
// 											<div className="secondbox">
// 												<div className="breakfastheading">
// 													{item.mealtype}
// 												</div>
// 												<div className="breakfastdescription">
// 													{item.content}
// 												</div>
// 											</div>
// 										</div>
// 									</div>
// 								);
// 							})}
// 					</div>
// 				</div>
// 			);
// 		}
// 		else {
// 			return (
// 				<div>
// 				  <img
// 					src="https://www.epidomastegasis.gr/gov/Content/images/loaders/loader4.gif"
// 					alt="loading"
// 					className="loader"
// 				  />
// 				</div>
// 			);
// 		}
// 	}
// }

// export default withRouter(QuickSearch);
