import React from 'react';

export default function Blog() {
    return (
        <main>
            <h1>BLOG</h1>

            <nav className="filter navbar navbar-expand-lg">
                <div className="container-fluid">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="dd nav-item dropdown">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
                            <a className="ddm nav-link dropdown-toggle" href="" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Noise Level
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="../html/filter_custom.html">Silent</a></li>
                                <li><a className="dropdown-item" href="../html/filter_custom.html">Whisper</a></li>
                                <li><a className="dropdown-item" href="../html/filter_custom.html">Table Talk</a></li>
                                <li><a className="dropdown-item" href="../html/filter_custom.html">Normal</a></li>
                                <li><a className="dropdown-item" href="../html/filter_custom.html">Presenter</a></li>
                                <li><a className="dropdown-item" href="../html/filter_custom.html">Outside</a></li>
                            </ul>
                        </li>
                        <li className="dd nav-item dropdown">
                            <a className="ddm nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Party Size
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="../html/filter_custom.html">1</a></li>
                                <li><a className="dropdown-item" href="../html/filter_custom.html">2</a></li>
                                <li><a className="dropdown-item" href="../html/filter_custom.html">3</a></li>
                                <li><a className="dropdown-item" href="../html/filter_custom.html">4</a></li>
                                <li><a className="dropdown-item" href="../html/filter_custom.html">5</a></li>
                                <li><a className="dropdown-item" href="../html/filter_custom.html">6+</a></li>
                            </ul>
                        </li>
                        <li className="dd nav-item dropdown">
                            <a className="ddm nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Location
                            </a>
                            <ul className="dropdown-menu">
                                <li style={{textAlign: 'center'}}>Area</li>
                                <li><hr className="dropdown-divider"/></li>
                                <li><a className="dropdown-item" href="../html/filter_custom.html">North</a></li>
                                <li><a className="dropdown-item" href="../html/filter_custom.html">South</a></li>
                                <li><a className="dropdown-item" href="../html/filter_custom.html">East</a></li>
                                <li><a className="dropdown-item" href="../html/filter_custom.html">West</a></li>
                                <li><hr className="dropdown-divider"/></li>
                                <li style={{textAlign: 'center'}}>Building</li>
                                <li><hr className="dropdown-divider"/></li>
                                <li><a className="dropdown-item" href="../html/filter_custom.html">Bill and Melinda Gates Center</a></li>
                                <li><a className="dropdown-item" href="../html/filter_custom.html">Odegaard Library</a></li>
                                <li><a className="dropdown-item" href="../html/filter_custom.html">Suzzallo and Allen Libraries</a></li>
                                <li><a className="dropdown-item" href="../html/filter_custom.html">Nanoengineering & Sciences</a></li>
                            </ul>
                        </li>

                        <form className="d-flex" role="search">
                            <input className="ss form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                                <button className="ss btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </ul>
                </div>
            </nav>

            <div className="card-box container">
                <div className="row">
                    {/* <!-- Card 1 --> */}
                    <div className="col col-md-6 col-xl-4 d-flex">
                        <div className="card mb-4">
                            <div className="card-body">
                                <div className="row">
                                    <div className="ci col col-sm-auto col-xl-12">
                                        <img className="pb-3" src="../img/cs_building.jpg" alt="cs_building"/>
                                    </div>
                                    <div className="col-sm">
                                        <h2 className="card-title">Bill and Melinda Gates Center</h2>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star"></span>
                                        <span className="fa fa-star"></span>
                                        <div className="row">
                                            <div className="b">
                                                <a className="btn btn-dark" href="../html/Map.html">Map</a>
                                                <a className="btn btn-dark" href="../html/forum_popup.html">Learn More</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Card 2 --> */}
                    <div className="col col-md-6 col-xl-4 d-flex">
                        <div className="card mb-4">
                            <div className="card-body">
                                <div className="row">
                                    <div className="ci col col-sm-auto col-xl-12">
                                        <img className="pb-3" src="../img/ode.jpg" alt="ode"/>
                                    </div>
                                    <div className="col-sm">
                                        <h2 className="card-title">Odegaard Library</h2>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star"></span>
                                        <span className="fa fa-star"></span>
                                        <span className="fa fa-star"></span>
                                        <div className="row">
                                            <div className="b">
                                                <a className="btn btn-dark" href="../html/Map.html">Map</a>
                                                <a className="btn btn-dark" href="../html/forum_popup.html">Learn More</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Card 3 --> */}
                    <div className="col col-md-6 col-xl-4 d-flex">
                        <div className="card mb-4">
                            <div className="card-body">
                                <div className="row">
                                    <div className="ci col col-sm-auto col-xl-12">
                                        <img className="pb-3" src="../img/suzzallo.jpg" alt="suzzallo"/>
                                    </div>
                                    <div className="col-sm">
                                        <h2 className="card-title">Suzzallo and Allen Libraries</h2>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star"></span>
                                        <div className="row">
                                            <div className="b">
                                                <a className="btn btn-dark" href="../html/Map.html">Map</a>
                                                <a className="btn btn-dark" href="../html/forum_popup.html">Learn More</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Card 4 --> */}
                    <div className="col col-md-6 col-xl-4 d-flex">
                        <div className="card mb-4">
                            <div className="card-body">
                                <div className="row">
                                    <div className="ci col col-sm-auto col-xl-12">
                                        <img className="pb-3" src="../img/nano.jpg" alt="nano"/>
                                    </div>
                                    <div className="col-sm">
                                        <h2 className="card-title">Nanoengineering & Sciences</h2>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star"></span>
                                        <span clasNames="fa fa-star"></span>
                                        <div className="row">
                                            <div className="b">
                                                <a className="btn btn-dark" href="../html/Map.html">Map</a>
                                                <a className="btn btn-dark" href="../html/forum_popup.html">Learn More</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Card 5 --> */}
                    <div className="col col-md-6 col-xl-4 d-flex">
                        <div className="card mb-4">
                            <div className="card-body">
                                <div className="row">
                                    <div className="ci col col-sm-auto col-xl-12">
                                        <img className="pb-3" src="../img/plus.png" alt="plus"/>
                                    </div>
                                    <div className="col-sm">
                                        <h2 className="card-title">Add Custom Spot</h2>
                                        <p className="card-text">Have a secret study spot that you want people to know about? add it here!!!!</p>
                                        <a className="btn btn-dark" href="../html/add_custom.html">Add</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}