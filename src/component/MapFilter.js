import React from 'react'; //import React Component

function DropdownMenu(props) { //expect a title and items prop
    // title: title
    // items: {id: 'id', label: 'label' etc.}
    const toggleDropdown = (event) => {
        props.onFilterChange(props.filterKey, event.target.value);
    };

    const menu = (
        <div className="col d-flex">
            <select id={props.title} className="form-select" value={props.selectedOption} onChange={toggleDropdown}>
                <option value="">{props.title}</option>
                {props.items.map((item) => (
                    <option key={item.id} value={item.value}>{item.label}</option>
                ))}
            </select>

        </div>
    )
    return menu;
}

function About({text}) {
    const aboutBubble = (
        <div className="about-container col-auto">
            <div className="qm">
                <i className="fa fa-question-circle"></i>
            </div>
            <div className="hovertext">
                {text}
            </div>
        </div>
    )
    return aboutBubble;
}

export function MapFilter({ onFilterChange }) {
    const areas = [
        { id: 'eastCampus', label: 'East Campus' },
        { id: 'redSquare', label: 'Red Square' },
        { id: 'the', label: 'The Hub' },
        { id: 'theFountain', label: 'The Fountain' },
        { id: 'theQuad', label: 'The Quad' }
    ]
    const sizes = [
        { id: 'one', label: '1' },
        { id: 'two', label: '2' },
        { id: 'three', label: '3' },
        { id: 'four', label: '4' },
        { id: 'five', label: '5' },
        { id: 'sixPlus', label: '6+' }
    ]
    const noises = [
        { id: 'silent', label: 'Silent' },
        { id: 'whisper', label: 'Whisper' },
        { id: 'tableTalk', label: 'Table Talk' },
        { id: 'normal', label: 'Normal' },
        { id: 'presenter', label: 'Presenter' },
        { id: 'outside', label: 'Outside' },
    ]

    const ratings = [
        { id: 'oneSt', label: '1' },
        { id: 'twoSt', label: '2' },
        { id: 'threeSt', label: '3' },
        { id: 'fourSt', label: '4' },
        { id: 'fiveSt', label: '5' },
    ]

    return (
        <>
            <div className="row align-items-center mb-1 mt-1 m-1">
                <DropdownMenu
                    title="Rating"
                    items={ratings}
                    onFilterChange={onFilterChange}
                    filterKey="rating"
                />
                <About
                    text="This is just an overall rating of your study spot from a scale of 1-5 where 1 where this spot is not very good and 5 means it is the best spot you ever been too. it is important to note that is this the overall rating of your study spot not overall rating of the building."/>
                <DropdownMenu
                    title="Area"
                    items={areas}
                    onFilterChange={onFilterChange}
                    filterKey="area"
                />
                <About
                    text="This is just the general area that your spot is located,
                    this can be a little confusing but this differs from the building name but in some cases it can be the same,
                    throughout the campus, different buildings that are relatively close to eachother
                    can generally be grouped into the same general area
                    an good example is that Suzzalo, Odegaard and Kane Hall can all be grouped in the general area of Red Square"/>
                <DropdownMenu
                    title="Party Size"
                    items={sizes}
                    onFilterChange={onFilterChange}
                    filterKey="partySize"
                />
                <About
                    text="This is just a recommended max party size or the max number of people that could be seated at this study spot,
                    by selecting for example 3 that means that this spot can be seat up to a party size of 3,
                    this means that this spot allows up to a party size of 3 but a party size of 2 and 1 is also allowed."/>
                <DropdownMenu
                    title="Noise Selector"
                    items={noises}
                    onFilterChange={onFilterChange}
                    filterKey="noiseSelector"
                />
                <About
                    text="This is just an overall noise level of your spot, different spots and area of the building have
                    different noise level so it is important to note that this is noise level for the spot itself
                    and not the building itself."/>
            </div>
        </>
    );
}