import React from "react";
import Carousel from "../components/Carousel"


function Home() {
    return (
        <>
            <div className="container" id="welcome">
                <div className="page-header">

                    <h1> Welcome to my page! </h1>

                </div>
            </div>

            <div className="container" id="aboutme">
                <div className="row">
                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-4">
                                <img src="assets/headshot.jpg" alt="selfpic" className="img-thumbnail" />
                            </div>
                            <div className="col-md-8">
                                <div className="card mt-2">
                                    <div className="text-center">
                                        <h3>About Me</h3>
                                    </div>
                                    <div className="card-body">
                                        <p>
                                            Sarah Seagraves is a music educator, performer, and full stack web developer.
                                            She enjoys practicing and learning new things to make clean and creative applications.
                                    Link to resume <a href="assets/Resume 2021.pdf">here! </a>

                                        </p>


                                    </div>
                                    <Carousel/>



                                </div>



                            </div>


                        </div>

                        <div className="row">
                            <div className="col-md-4">
                                <div className="card mt-2">
                                    <div className="card-body text-center">
                                        <h4 className="card-title">Find me here:</h4>
                                        <p className="card-text">

                                            <hr />

                                            <a href="https://github.com/seagraving" target="_blank">
                                                <img className="rounded mx-auto d-block" src="assets/githubicon.png" height="51" />
                                            </a>

                                            <a href="https://www.linkedin.com/in/sarahseagraves/" target="_blank">
                                                <img className="rounded mx-auto d-block" src="assets/linkedinicon.png" height="51" />
                                            </a>

                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>





        </>
    )

}

export default Home;