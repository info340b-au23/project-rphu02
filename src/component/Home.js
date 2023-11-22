import React from 'react';

const Home = () => {
    return (

        <><header>
            <h1>U Study Spots</h1>
        </header><main>
                <h2>Most Popular Spots</h2>
                <div className="container">
                    <div className="row">
                        <div className="col col-md-6 col-xl-4 d-flex">
                            <div className="card mb-4">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="ci col col-sm-auto col-xl-12">
                                            <img src="img/suzzallo.jpg" alt="the suzzallo library" className="pb-3" />
                                        </div>
                                        <div className="col-sm">
                                            <h2 className="card-title">Suzallo and Allen Libraries</h2>
                                            <p className="card-text">Famous for the Hogwarts-esque Reading Room, the Suzallo and Allen Library provide many UW
                                                students a quiet and calming enviornment to get some extra studying in.
                                            </p>
                                            <a href="/" className="btn btn-dark">Learn More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col col-md-6 col-xl-4 d-flex">
                            <div className="card mb-4">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="ci col col-sm-auto col-xl-12">
                                            <img src="img/cs_building.jpg" alt="the computer science bulding" className="pb-3" />
                                        </div>
                                        <div className="col-sm">
                                            <h2 className="card-title">Bill and Melinda Gates Center</h2>
                                            <p className="card-text">Home to UW's beloved computer science program, the Bill and Melinda
                                                Gates Center welcomes all students to its modern facility.
                                            </p>
                                            <a href="/" className="btn btn-dark">Learn More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col col-md-6 col-xl-4 d-flex">
                            <div className="card mb-4">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="ci col col-sm-auto col-xl-12">
                                            <img src="img/nano.jpg" alt="the nanoengineering building" className="pb-3" />
                                        </div>
                                        <div className="col-sm">
                                            <h2 className="card-title">Nanoengineering & Sciences</h2>
                                            <p className="card-text">Located near the center of campus, this building is a
                                                well-frequented study area for many STEM students.
                                            </p>
                                            <a href="/" className="btn btn-dark">Learn More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main></>
    )

}

export default Home;