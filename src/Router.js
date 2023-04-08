import '../src/Styles/styles.css';

import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Components/header/Header.component';
import Home from './Components/home/home.component';
import Details from './Components/details/details.component';
import Footer from './Components/footer/Footer.component';


import ListingPage from './Components/Listing/ListingPage.component';
import RestaurantPage from "./Components/RestaurantPage/RestPage.component";
import PlaceOrder from "./Components/Orders/PlaceOrder.component";
import ViewOrder from "./Components/Orders/ViewOrder.component";

function Router() {
    return (
        <BrowserRouter>
            <Header />
            <Route exact path="/" component={Home}></Route>
            <Route path="/restaurantdetailspage" component={Details} />

            <Route path="/listing/:mealType" component={ListingPage}></Route>
            <Route path="/restpage/:restid" component={RestaurantPage}></Route>
            <Route path="/placeOrder/:restName" component={PlaceOrder} />
            <Route path="/viewBooking" component={ViewOrder} />


            <Footer/>       
        </BrowserRouter>
    )
}

export default Router;