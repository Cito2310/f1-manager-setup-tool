interface Props {
    inputLabel : string,
}

import "./input-setup-bar.scss"
import { useForm } from './useForm';

export const InputSetupBar = ({ inputLabel }: Props) => {
    const {
        setupBarValue,
        onInputChange
    } = useForm({
        setupBarValue: 50
    })

    return (
        <div className="input-setup-bar">
            <p>{ inputLabel }</p>
            <div className="setup-bar">
                <div 
                    style={{left: setupBarValue+"%"}} 
                    className="selector-setup-bar"
                />
            </div>
            <input onChange={onInputChange} name="setupBarValue" value={setupBarValue} type="number" min={0} max={100}/>
        </div>
    )
}