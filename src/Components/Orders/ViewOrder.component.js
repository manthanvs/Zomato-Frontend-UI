import React, { Component } from "react";
import axios from "axios";
import DisplayOrder from "./DisplayOrders.component";

class ViewOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: "",
      num: 0
    };
  }
  renderBody = (ordersData) => {
    if (ordersData.length > 0) {
      return ordersData.map((data) => {
        return (
          <tr key={data.id}>
            <td>{data.id}</td>
            <td>{data.hotel_name}</td>
            <td>{data.name}</td>
            <td>{data.phone}</td>
            <td>{data.email}</td>
            <td>Rs.{data.cost}</td>
            <td>{data.date}</td>
            <td>{data.status}</td>
            <td>{data.bank_name}</td>
          </tr>
        );
      });
    }
  };
  render() {
    return (
      <div className="container mt-5">
        <center className="mb-4">
          <h4>My Orders</h4>
        </center>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>OrderId</th>
              <th>Restaurant name</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Cost</th>
              <th>Date</th>
              <th>Status</th>
              <th>BankName</th>
            </tr>
          </thead>
          <tbody>{this.renderBody(this.state.orders)}</tbody>
        </table>
        <DisplayOrder orderData={this.state.orders} />
      </div>
    );
  }

// const orderApi = "https://restdataapi.onrender.com/vieworder";

  componentDidMount() {
    axios({
      method : "GET",
      url:"http://3000/viewOrder/getViewOrders",
      headers : {"Content-Type":"application/json"}
    }).then((response) => {
      this.setState({orders:response.data});
    });

    // axios.get(orderApi).then((res) => {
    //   this.setState({ orders: res.data });
    // });
  }
}
export default ViewOrder;
