import { useLayoutEffect, useRef, useState, WheelEvent } from 'react';
import { useForm } from './useForm';
import "./input-setup-bar-test.scss"

interface Props {
    inputLabel : string,
}

export const InputSetupBar = ({ inputLabel }: Props) => {
    const [valueBarSetup, setValueBarSetup] = useState(50)

    const onScrollChangeValue = (event: WheelEvent<HTMLDivElement>) => {
        const scroll = -(event.deltaY / 100)
        if ((valueBarSetup === 100 && scroll === 1) || (valueBarSetup === 0 && scroll === -1)) return;
        setValueBarSetup(valueBarSetup + scroll)
    }

    return (
        <div className="input-setup-bar">
            <p>{ inputLabel }</p>
            <div className="setup-bar" onWheel={onScrollChangeValue}>
                <div 
                    style={{left: valueBarSetup+"%"}} 
                    className="selector-setup-bar"
                />
            </div>
        </div>
    )
}