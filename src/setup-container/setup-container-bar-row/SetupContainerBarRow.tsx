import { useState, WheelEvent } from 'react';

import "./setup-container-bar-row.scss"

interface Props {
    inputLabel : string,
}

export const SetupContainerBarRow = ({ inputLabel }: Props) => {
    const [valueBarSetup, setValueBarSetup] = useState(50)

    const onScrollChangeValue = (event: WheelEvent<HTMLDivElement>) => {
        const scroll = -(event.deltaY / 100)
        if ((valueBarSetup === 100 && scroll === 1) || (valueBarSetup === 0 && scroll === -1)) return;
        setValueBarSetup(valueBarSetup + scroll)
    }
    return (
        <div className="setup-container-bar-row setup-container-row">
            <div className='setup-container-item'>
                <p>{ inputLabel }</p>
            </div>

            <div className='setup-container-item'>
                <div className="setup-bar" onWheel={onScrollChangeValue}>
                    <div 
                        style={{left: valueBarSetup+"%"}} 
                        className="setup-bar-selector"
                    />
                </div>
            </div>

            <div className='setup-container-item'>
                {/* <p>{ inputLabel }</p> */}
            </div>

        </div>
    )
}