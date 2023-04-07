import React, { Component } from "react";
import "./PlaceOrder.css";

const menuurl = "https://restdataapi.onrender.com/usermenu";
const placeorder = "https://restdataapi.onrender.com/placeorder";

class PlaceOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: Math.floor(Math.random() * 10000),
      hotel_name: this.props.match.params.restName,
      name: "Ankit",
      email: "ankit@gmail.com",
      cost: 0,
      phone: 9876543212,
      address: "77 K Delhi",
      menuItem: ""
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  placeOrder = () => {
    let obj = this.state;
    obj.menuItem = sessionStorage.getItem("menu");
    fetch(placeorder, {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(obj)
    }).then(this.props.history.push("/viewBooking"));
  };

  renderItem = (data) => {
    if (data) {
      return data.map((item) => {
        return (
          <div className="order-item my-3 " key={item.menu_id}>
            <div className="div-img">
              <img
                className="img-fluid"
                src={item.menu_image}
                alt={item.menu_name}
              />
            </div>
            <div className="div-item-details ">
              <h6>{item.menu_name}</h6>
              <span>{item.menu_type}</span>
            </div>
            <div className="div-item-price ">
              <h6>₹ {item.menu_price}</h6>
            </div>
          </div>
        );
      });
    }
  };

  render() {
    return (
      <div className="container">
        <div className="row mt-5">
          <div className="orderDetails  p-0 col-md-8">
            <div className="orderDetails-heading p-1">
              <h4 className="">Orders for {this.state.hotel_name}</h4>
            </div>
            <div className="orderItems py-2">
              {this.renderItem(this.state.menuItem)}
            </div>
            <div className="total-price">
              <h5>
                <span className="text-secondary">Total Price:</span>{" "}
                <span className="fw-bold ">₹ {this.state.cost}</span>
              </h5>
              <button className="btn btn-success" onClick={this.placeOrder}>
                Order Now
              </button>
            </div>
          </div>
          <div className="col-md-4 c-details">
            <div className="card custom-details">
              <div className="card-header">Customer Details</div>
              <div className="card-body">
                <form action="" method="post">
                  <div className="form-group mb-3 ">
                    <label className="form-label mb-0">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="fname"
                      name="name"
                      value={this.state.name}
                      onChange={this.handleChange}
                      placeholder="Name"
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label className="control-label">Email</label>
                    <input
                      type="email"
                      className="form-control "
                      placeholder="Email"
                      name="email"
                      value={this.state.email}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label className="control-label">Phone</label>
                    <input
                      type="text"
                      className="form-control"
                      id=""
                      placeholder="Phone"
                      name="phone"
                      value={this.state.phone}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label className="control-label ">Address</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Address"
                      name="address"
                      value={this.state.address}
                      onChange={this.handleChange}
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  componentDidMount() {
    let menuId = JSON.parse(sessionStorage.getItem("menu"));
    fetch(menuurl, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify(menuId)
    })
      .then((res) => res.json())
      .then((data) => {
        let totalPrice = 0;
        data.map((item) => {
          totalPrice = totalPrice + parseFloat(item.menu_price);
          return "ok";
        });
        this.setState({ menuItem: data, cost: totalPrice });
      });
  }
}
export default PlaceOrder;
