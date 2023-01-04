import "./setup-container.scss"
import { SetupContainerTop } from "./setup-container-top/SetupContainerTop";
import { SetupContainerBars } from './setup-container-bars/SetupContainerBars';

export const SetupContainer = () => (
    <div className="setup-container">
        <SetupContainerTop/>
        <SetupContainerBars/>
    </div>
)
