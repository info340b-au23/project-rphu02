import React from 'react';

export default function Map() {
    return (
        <main>
            <h1>MAP</h1>
            <div class="container-fluid">
                <div class="row no-gutters">

                    {/* <!--Map--> */}
                    <div class="col-sm-12 col-md-9 order-last order-md-first m-0 p-0">
                        {/* <!-- <div class="card rounded-0 border-0 m-0 p-0"> --> */}
                        <img class="mi img-fluid" src="../img/uw_campus.jpg" alt="map of University Of Washington with study spots" />
                        {/* <!-- </div> --> */}
                    </div>
                    <div class="col-sm-12 col-md-3 order-first order-md-last m-0 p-0">
                        <div class="card rounded-0 border-0 m-0 p-0">
                            <div class="col-sections container-fluid m-0 p-0">
                                <div class="row">
                                    <form class="form-inline">
                                        <div class="form-group">
                                            <input type="text" class="form-control rounded-0" id="search" placeholder="Search" />
                                        </div>
                                    </form>
                                </div>
                                <div class="row d-md-none">

                                    {/* <!-- Noise Level Selector --> */}
                                    <div class="col d-flex d-md-none">
                                        <div class="dropdown">
                                            <button class="btn btn-light dropdown-toggle rounded-0 w-100" type="button"
                                                id="noiseDDMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                                                Noise Level
                                            </button>
                                            <div class="dropdown-menu w-100" aria-labelledby="noiseDDMenuButton">
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" id="silentCheckbox" />
                                                    <label class="form-check-label" for="silentCheckbox">
                                                        Silent
                                                    </label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" id="whisperCheckbox" />
                                                    <label class="form-check-label" for="whisperCheckbox">
                                                        Whisper
                                                    </label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" id="tableTalkCheckbox" />
                                                    <label class="form-check-label" for="tableTalkCheckbox">
                                                        Table Talk
                                                    </label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" id="normalCheckbox" />
                                                    <label class="form-check-label" for="normalCheckbox">
                                                        Normal
                                                    </label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" id="presenterCheckbox" />
                                                    <label class="form-check-label" for="presenterCheckbox">
                                                        Presenter
                                                    </label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" id="outsideCheckbox" />
                                                    <label class="form-check-label" for="outsideCheckbox">
                                                        Outside
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- Party Size Selector --> */}
                                    <div class="col d-flex d-md-block">
                                        <div class="dropdown">
                                            <button class="btn btn-light dropdown-toggle rounded-0 w-100" type="button"
                                                id="partySizeDDMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                                                Party Size
                                            </button>
                                            <div class="dropdown-menu w-100" aria-labelledby="partySizeDDMenuButton">
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" id="oneCheckbox" />
                                                    <label class="form-check-label" for="oneCheckbox">
                                                        1
                                                    </label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" id="twoCheckbox" />
                                                    <label class="form-check-label" for="twoCheckbox">
                                                        2
                                                    </label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" id="threeCheckbox" />
                                                    <label class="form-check-label" for="threeCheckbox">
                                                        3
                                                    </label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" id="fourCheckbox" />
                                                    <label class="form-check-label" for="fourCheckbox">
                                                        4
                                                    </label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" id="fiveCheckbox" />
                                                    <label class="form-check-label" for="fiveCheckbox">
                                                        5
                                                    </label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" id="sixPlusCheckbox" />
                                                    <label class="form-check-label" for="sixPlusCheckbox">
                                                        6+
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- Last selector--> */}

                                    <div class="col d-flex d-md-block">
                                        <div class="dropdown">
                                            <button class="btn btn-light dropdown-toggle rounded-0 w-100" type="button"
                                                id="areaDDMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                                                Area
                                            </button>
                                            <div class="dropdown-menu w-100" aria-labelledby="areaDDMenuButton">
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" id="northCheckbox" />
                                                    <label class="form-check-label" for="northCheckbox">
                                                        North
                                                    </label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" id="southCheckbox" />
                                                    <label class="form-check-label" for="southCheckbox">
                                                        South
                                                    </label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" id="eastCheckbox" />
                                                    <label class="form-check-label" for="eastCheckbox">
                                                        East
                                                    </label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" id="westCheckbox" />
                                                    <label class="form-check-label" for="westCheckbox">
                                                        West
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                {/* <!-- Post medium search selector --> */}
                                <div class="row d-none d-md-block">
                                    {/* <!-- Noise Level Selector --> */}
                                    <div class="col">
                                        <label for="noiseLevelSelector" class="d-flex bg-light md-Select">Noise Level</label>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" id="silentCheckbox" />
                                            <label class="form-check-label md-Selc-Text" for="silentCheckbox">
                                                Silent
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" id="whisperCheckbox" />
                                            <label class="form-check-label md-Selc-Text" for=" whisperCheckbox">
                                                Whisper
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" id="tableTalkCheckbox" />
                                            <label class="form-check-label md-Selc-Text" for="tableTalkCheckbox">
                                                Table Talk
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" id="normalCheckbox" />
                                            <label class="form-check-label md-Selc-Text" for="normalCheckbox">
                                                Normal
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" id="presenterCheckbox" />
                                            <label class="form-check-label md-Selc-Text" for="presenterCheckbox">
                                                Presenter
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" id="outsideCheckbox" />
                                            <label class="form-check-label md-Selc-Text" for="outsideCheckbox">
                                                Outside
                                            </label>
                                        </div>
                                    </div>

                                    {/* <!-- Party Size Selector --> */}
                                    <div class="col d-flex d-md-block">
                                        <label for="partySizeSelector" class="d-flex bg-light md-Select">Party Size</label>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" id="oneCheckbox" />
                                            <label class="form-check-label md-Selc-Text" for="oneCheckbox">
                                                1
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" id="twoCheckbox" />
                                            <label class="form-check-label md-Selc-Text" for="twoCheckbox">
                                                2
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" id="threeCheckbox" />
                                            <label class="form-check-label md-Selc-Text" for="threeCheckbox">
                                                3
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" id="fourCheckbox" />
                                            <label class="form-check-label md-Selc-Text" for="fourCheckbox">
                                                4
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" id="fiveCheckbox" />
                                            <label class="form-check-label md-Selc-Text" for="fiveCheckbox">
                                                5
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" id="sixPlusCheckbox" />
                                            <label class="form-check-label md-Selc-Text" for="sixPlusCheckbox">
                                                6+
                                            </label>
                                        </div>
                                    </div>

                                    {/* <!-- Last selector --> */}

                                    <div class="col d-flex d-md-block">
                                        <label for="areaSizeSelector" class="d-flex bg-light md-Select">Area</label>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" id="northCheckbox" />
                                            <label class="form-check-label md-Selc-Text" for="northCheckbox">
                                                North
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" id="southCheckbox" />
                                            <label class="form-check-label md-Selc-Text" for="southCheckbox">
                                                South
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" id="eastCheckbox" />
                                            <label class="form-check-label md-Selc-Text" for="eastCheckbox">
                                                East
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" id="westCheckbox" />
                                            <label class="form-check-label md-Selc-Text" for="westCheckbox">
                                                West
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main >
    )
}