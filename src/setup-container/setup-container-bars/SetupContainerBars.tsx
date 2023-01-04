import "./setup-container-bar.scss";
import { SetupContainerBarRow } from '../setup-container-bar-row/SetupContainerBarRow';

export const SetupContainerBars = () => {
    return (
        <div className="setup-container-bars">
            <SetupContainerBarRow inputLabel="Ángulo alerón del."/>
            <SetupContainerBarRow inputLabel="Ángulo alerón tras."/>
            <SetupContainerBarRow inputLabel="Distribuición antivuelco"/>
            <SetupContainerBarRow inputLabel="Ángulo caída neumáticos"/>
            <SetupContainerBarRow inputLabel="Convergencia abierta"/>
        </div>
    )
}