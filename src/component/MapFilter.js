import React, { useState } from 'react'; //import React Component

function DropdownMenuSmall(props) { //expect a title and items prop
    // title: title
    // items: {id: 'id', label: 'label' etc.}
    const [selectedOption, setSelectedOption] = useState(props.title);
    // const toggleDropdown = (event) => {
    //     setSelectedOption(event.target.value);
    // }

    // const menu = (
    //     <div className="col d-flex d-md-none">
    //         <select id={props.title} className="form-select" value={selectedOption} onChange={toggleDropdown}>
    //             <option value="">{props.title}</option>
    //             {props.items.map((item) => (
    //                 <option key={item.id} value={item.label}>{item.label}</option>
    //             ))}
    //         </select>
    //     </div>
    // )
    const [isOpen,setIsOpen] = useState(false);

    let collapse ='';
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    if (isOpen) {
        collapse = 'collapse show';
    } else {
        collapse = 'collapse'
    }

    const menu = (
        <div className="col d-flex d-md-none">
            <div className="form-check">
                <label className="form-check-label" onClick={toggleDropdown}>
                    <button className="btn btn-lightrounded-0 w-100 bg-white" type="button">
                        {props.title}
                    </button>
                </label>
                <div className={collapse}>
                    {isOpen && (
                        props.items.map((item) => (
                            <div key={item.id} className="form-check">
                                <input className="form-check-input" type="checkbox" id={item.id + 'Checkbox'} />
                                <label className="form-check-label" htmlFor={item.id + 'Checkbox'}>
                                    {item.label}
                                </label>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div >
    );
    return menu;
}

function DropdownMenuBig(props) {  //expect a title and items prop
    // title: title
    // items: {id: 'id', label: 'label' etc.}
    const menu = (
        <div className="col d-flex d-md-block">
            <label htmlFor={props.title + 'Selector'} className="d-flex bg-light md-Select">
                {props.title}
            </label>
            {props.items.map((item) => (
                <div key={item.id} className="form-check">
                    <input className="form-check-input" type="checkbox" id={item.id + 'Checkbox'} />
                    <label className="form-check-label md-Selc-Text" htmlFor={item.id + 'Checkbox'}>
                        {item.label}
                    </label>
                </div>
            ))}
        </div>
    )
    return menu;
}

export function MapFilter() {
    const areas = [
        { id: 'north', label: 'North' },
        { id: 'south', label: 'South' },
        { id: 'west', label: 'West' },
        { id: 'east', label: 'East' }
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

    return (
        <>
            {/* Smaller filters */}
            <div className="row d-md-none">
                <DropdownMenuSmall
                    title="Area"
                    items={areas}
                />
                <DropdownMenuSmall
                    title="Party Size"
                    items={sizes}
                />
                <DropdownMenuSmall
                    title="Noise Selector"
                    items={noises}
                />
            </div>
            {/*Medium and larger filters*/}
            <div className="row d-none d-md-block">
                <DropdownMenuBig
                    title="Area"
                    items={areas}
                />
                <DropdownMenuBig
                    title="Party Size"
                    items={sizes}
                />
                <DropdownMenuBig
                    title="Noise Selector"
                    items={noises}
                />
            </div>
        </>
    )
}
