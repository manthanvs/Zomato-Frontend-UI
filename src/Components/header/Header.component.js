import { Link } from "react-router-dom";
import React from "react";
import "../../Styles/Header.css";

export default class Header extends React.Component {
	render() {
		return (
			<nav
				className="navbar navbar-expand-lg navbar-dark"
				style={{
					backgroundImage:
						"linear-gradient(to top, #CE0505 0%, #CE0505 1%, #EB2929 100%)",
				}}>
				<div className="container">
					<Link
						className="navbrand fw-bold d-flex align-items-center"
						to="/">
						<img
							src="Images/zomato_e_logo.png"
							alt="logo img"
							className="me-2"
						/>
					</Link>
					<button
						className="navbar-toggler navbar-toggler-btn"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						data-toggle="collapse"
						data-target=".navbar-collapse"
						aria-expanded="false"
						aria-label="Toggle navigation">
						<span className="navbar-toggler-icon navbar-toggler-btn-icon"></span>
					</button>
					<div
						className="collapse navbar-collapse"
						id="navbarSupportedContent">
						<ul className="navbar-nav me-auto mb-lg-0">
							<li className="nav-item">
								<Link
									className="nav-link"
									aria-current="page"
									to="/">
									Home
								</Link>
							</li>
							<li className="nav-item">
								<a
									className="nav-link"
									href="#footer"
									tabIndex="-1"
									aria-disabled="true">
									About
								</a>
							</li>
							<li className="nav-item">
								<a
									className="nav-link"
									href="#dashboard"
									tabIndex="-1"
									aria-disabled="true">
									Dashboard
								</a>
							</li>
						</ul>

						<div className="container c-header d-flex justify-content-end">
							<div className="btn-group">
								<a href="/" className="link-light" id="login">
									Login
								</a>

								<button
									type="button"
									className="btn btn-outline-light btn-text"
									id="createac">
									Create An Account
								</button>
							</div>
						</div>
					</div>
				</div>
			</nav>
		);
	}
}
