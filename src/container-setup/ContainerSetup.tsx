import "./container-setup.scss"
import { InputSetupBar } from "./InputSetupBar"

export const ContainerSetup = () => (
    <div className="container-setup">
        <InputSetupBar inputLabel="Sobreviraje"/>
        <InputSetupBar inputLabel="Estabilidad de frenado"/>
        <InputSetupBar inputLabel="Paso por curvas"/>
        <InputSetupBar inputLabel="Traccion"/>
        <InputSetupBar inputLabel="Rectas"/>
    </div>
)
