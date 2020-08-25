import React from "react";
import "../../styles/signUp.scss";
//create your first component
export function SignUp(props) {
	return (
		<div className="text-center mt-5">
			<h1>SIGN UP</h1>
			<form>
				<div className="formContainer">
					<div className="form-row">
						<div className="form-group col-md-6">
							<label htmlFor="inputFirstName">FIRST NAME</label>
							<input type="text" className="form-control" id="inputFirstName" placeholder="First Name" />
						</div>
						<div className="form-group col-md-6">
							<label htmlFor="inputMiddleName">MIDDLE NAME (OPTIONAL)</label>
							<input
								type="text"
								className="form-control"
								id="inputMiddleName"
								placeholder="Middle Name"
							/>
						</div>
						<div className="form-group col-md-6">
							<label htmlFor="inputLastName">LAST NAME</label>
							<input type="text" className="form-control" id="inputLastName" placeholder="Last Name" />
						</div>
					</div>

					<div className="vertical-line" />
					<div className="form-row">
						<div className="form-group ">
							<label htmlFor="inputEmail">EMAIL</label>
							<input
								type="text"
								className="form-control"
								id="inputEmail"
								placeholder="something@email.com"
							/>
						</div>
						<div className="form-group ">
							<label htmlFor="inputPassword4">PASSWORD</label>
							<input type="password" className="form-control" id="inputPassword4" />
						</div>
					</div>
				</div>
				<button type="submit" className="btn btn-primary">
					Save
				</button>
			</form>
		</div>
	);
}
