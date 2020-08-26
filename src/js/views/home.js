import React from "react";
import PropsTypes from "prop-types";
import { Link } from "react-router-dom";
import { SignUpModal } from "../component/signUpModal";

//create your first component
<<<<<<< HEAD
export class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = { show: false };
	}
	showModal = () => {
		this.setState({
			show: true
		});
	};
	render() {
		return (
			<div>
				<div className="navbar navbar-expand-lg ">
					<a className="papertrade navbar-brand" href="">
						PAPER TRADE
					</a>
					<a
						className="signup nav-link"
						href="#"
						onClick={() => {
							this.showModal();
						}}>
						Sign Up
					</a>
=======
export function Home(props) {
	// console.log(props);
	return (
		<div>
			<div className="header navbar-expand-lg ">
				<a className="papertrade navbar-brand" href="">
					PAPER TRADE
				</a>
				<a className="signup nav-link" href="#" onClick={() => props.history.push("/signup")}>
					Sign Up
				</a>
			</div>
			<div className="middle">
				<div className="login">
					<form>
						<div className="email form-group">
							<label /*htmlfor="exampleInputEmail1"*/>Email Address or Username</label>
							<input
								className="input"
								type="email"
								id="exampleInputEmail1"
								aria-describedby="emailHelp"
								// placeholder="Email or Username"
							/>
						</div>
						<div className="password form-group">
							<label /*htmlfor="exampleInputPassword1"*/>Password</label>
							<input
								type="password"
								className="input"
								id="exampleInputPassword1"
								// placeholder="Password"
							/>
						</div>
						<button
							type="submit"
							onClick={() => props.history.push("/profile")}
							className="loginbutton btn">
							Log In
						</button>
						{/* <SignUp /> */}
					</form>
>>>>>>> fe75efab39da4345e94e3d55ca114a20295cccac
				</div>
				<SignUpModal show={this.state.show} />
				<div className="middle">
					<div className="login">
						<form>
							<div className="email form-group">
								<label /*htmlfor="exampleInputEmail1"*/>Email Address or Username</label>
								<input
									className="input"
									type="email"
									id="exampleInputEmail1"
									aria-describedby="emailHelp"
									// placeholder="Email or Username"
								/>
							</div>
							<div className="password form-group">
								<label /*htmlfor="exampleInputPassword1"*/>Password</label>
								<input
									type="password"
									className="input"
									id="exampleInputPassword1"
									// placeholder="Password"
								/>
							</div>
							<button
								type="submit"
								onClick={() => props.history.push("/profile")}
								className="loginbutton btn">
								Log In
							</button>
							{/* <SignUp /> */}
						</form>
					</div>
					<div className="vlhome" />
					<div className="about">
						About PAPER TRADE. THIS IS WHERE WE WILL TELL YOU WHAT THIS WEBSITE IS ABOUT, WHAT YOU CAN DO
						AND WHAT YOU WILL BE LEARNING!
					</div>
				</div>
			</div>
		);
	}
}

Home.propTypes = {
	history: PropsTypes.object
};
