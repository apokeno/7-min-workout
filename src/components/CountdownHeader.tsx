import {Step} from "../types/definitions";

const CountdownCircle = ({step}: { step: Step }) =>
    <div style={{fontSize: 18, fontWeight: 160, maxWidth: 400, lineHeight: 1.2}}>
        <div style={{padding: '10px'}}>
            <div style={{fontSize: 36}}>{step.name}</div>
            <div>Дальше {step.nextName}</div>
        </div>
    </div>;

export default CountdownCircle;