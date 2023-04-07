import StarRatingComponent from "./StarCompo/StarComponent.component.js";

const FoodCards = ({ favfoodData }) => {
  if (favfoodData) {
    return favfoodData.map((data) => {
      return (
        <div className="card-item p-3" key={data._id}>
          <div className="img-div">
            <img src={data.item_img} alt="" />
          </div>
          <div className="content-div">
            <h5 className="my-2">{data.item_name}</h5>
            <p style={{ color: "rgb(90, 85, 85)" }}>{data.item_description}</p>
            <div className="price-detail">
              <p className="fw-bold rating">
                <StarRatingComponent />
                {data.item_rating}
              </p>
              <p className="fw-bold">₹{data.item_price}</p>
            </div>
            <hr className="m-0" />
            <p className="coupen my-2">{data.item_discount}</p>
          </div>
        </div>
      );
    });
  }
};
export default FoodCards;
