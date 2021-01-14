import React from "react";

function Contact() {
    return (
        <>
            <div className="container">
                <div className="card">
                    <div className="card-body">

                        <div className="container" id="contact">
                            <h2 className="card-title">Let's get in touch!</h2>
                            <div className="form-group">
                                <label for="name">Name:</label>
                                <input type="text" className="form-control" placeholder="Your name here" id="fname" />
                            </div>
                            <div className="form-group">
                                <label for="email">Email:</label>
                                <input type="text" className="form-control" placeholder="Your E-mail address" id="lname" />
                            </div>
                            <div className="form-group">
                                <label for="exampleFormControlTextarea1">Questions/Comments/Concerns/Praise:</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="4"></textarea>
                            </div>

                            <button type="submit" className="btn btn-warning">Submit!</button>


                        </div>
                    </div>
                </div>
            </div>











        </>
    )
}

export default Contact;