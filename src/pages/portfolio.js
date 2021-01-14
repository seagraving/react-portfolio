import React from "react";
import Card from "../components/card";
import db from "../db/db.json";

function Portfolio() {
    return (
        <>


            <div className="container" id="portfolio">
                <div className="card">
                    <div className="text-center">
                        <h2> Portfolio</h2>
                    </div>



                    <div className="card-body" id="first-row">
                        <div className="row">
                            { db.map(card => {
                                return (

                                    <Card link={card.link} image={card.image} imageAlt={card.imageAlt} title={card.title} description={card.description}  />
                                 
                                )
                            }) }

                            {/* <div className="col-sm-4">
                                <a href="https://israelvarela.github.io/ZOOLY/">
                                    <img className="rounded mx-auto d-block" src="assets/zoolypic.png" alt="zooly"
                                        height="150px" width="150px" />
                                </a>
                                <h4 className="text-center"> Zooly </h4>
                                <p className="text-center"> My first project! This application utilizes a couple of APIs to make learning about animals fun and educational! </p>
                            </div>

                            <div className="col-sm-4">
                                <a href="https://meally-food-delivery-tracker.herokuapp.com/login">
                                    <img className="rounded mx-auto d-block" src="assets/meally.png" alt="meal.ly"
                                        height="150px" width="150px" />
                                </a>
                                <h4 className="text-center"> Meal.ly </h4>
                                <p className="text-center"> An application that works with restaurants to make delivering food more efficient and organized. </p>
                            </div>

                            <div className="col-sm-4">
                                <a href="https://github.com/seagraving/burger-application">
                                    <img className="rounded mx-auto d-block" src="assets/burgerpic.jpg" alt="burger"
                                        height="150px" width="150px" />
                                </a>
                                <h4 className="text-center"> Express Burger Application </h4>
                                <p className="text-center"> Add and create your own custom burgers on this simple application using Node/Express Handlebars! </p>
                            </div>
                 
                            <div className="col-sm-4">
                                <a href="https://github.com/seagraving/notetaker-application">
                                    <img className="rounded mx-auto d-block" src="assets/wallnotes.jpg" alt="notes"
                                        height="150px" width="150px" />
                                </a>
                                <h4 className="text-center"> Notetaker Application </h4>
                                <p className="text-center"> Where you can add and create new notes to help sort through your priorities. </p>
                            </div>

                            <div className="col-sm-4">
                                <a href="https://github.com/seagraving/budget-tracker">
                                    <img className="rounded mx-auto d-block" src="assets/dollar.jpg" alt="budget"
                                        height="150px" width="150px" />
                                </a>
                                <h4 className="text-center"> Budget Tracker </h4>
                                <p className="text-center"> Need to manage some money? Here's an app for you! </p>
                            </div>

                            <div className="col-sm-4">
                                <a href="https://github.com/seagraving">
                                    <img className="rounded mx-auto d-block" src="assets/coding.jpg" alt="Super thick code"
                                        height="150px" width="150px" />
                                </a>
                                <h4 className="text-center"> GitHub </h4>
                                <p className="text-center"> Check out more of my repositories! </p>
                            </div>
                        */}
                 
                        </div>
                    </div>


                 
            
                </div>



            </div>
        </>
    )
}

export default Portfolio;