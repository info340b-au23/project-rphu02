import React from 'react'; //import React Component
import Select from 'react-select';

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
                <DropdownMenu
                    title="Area"
                    items={areas}
                    onFilterChange={onFilterChange}
                    filterKey="area"
                />
                <DropdownMenu
                    title="Party Size"
                    items={sizes}
                    onFilterChange={onFilterChange}
                    filterKey="partySize"
                />
                <DropdownMenu
                    title="Noise Selector"
                    items={noises}
                    onFilterChange={onFilterChange}
                    filterKey="noiseSelector"
                />
            </div>
        </>
    );
}