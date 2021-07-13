import React from 'react';
import './signup.css';
const Signup = (props) => {
    return (
        <div className="container register-form">
            <div className="form">
                <div className="note">
                    <p>Register YourSelf</p>
                </div>

                <div className="form-content">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <input type="text" id="name" onChange={props.inp} className="form-control" placeholder="Your Name *"/>
                            </div><br></br>
                            <div className="form-group">
                                <input type="number" id="phone" onChange={props.inp} className="form-control" placeholder="Phone Number *"/>
                            </div>
                        </div><br></br>
                        <div className="col-md-6">
                            <div className="form-group">
                                <input type="password" id="pass" onChange={props.inp} className="form-control" placeholder="Your Password *"/>
                            </div><br></br>
                            <div className="form-group">
                                <input type="number" id="no" onChange={props.inp} className="form-control" placeholder="Your Age"/>
                            </div><br></br>
                        </div>
                    </div>
                    <div className="form-group">
                    <button type="button" onClick={props.add} className="btnSubmit">Submit</button>
                    </div>
                    <div className="card-footer">
				<div className="B">
               <b> Already have an account?<a href="./">log-in</a></b>
				</div>

            	<div className="B">
               <b> Already have an account?<a href=".\Home">jjjjjjjjjjj</a></b>
				</div>
	
			</div>
                </div>
            </div>
        </div>
    );
}

export default Signup;
