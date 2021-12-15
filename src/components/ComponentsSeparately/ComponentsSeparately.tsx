import React from "react";
import "./ComponentsSeparately.scss";

import Card from "../Card";
import Indicator from "../Indicator";
import Label from "../Label";
import RiskNumber from "../RiskNumber";
import RiskCard from "../RiskCard/RiskCard";

// Этот компонент демонстрирует элементы составляющие карточку 
// уровня риска по отдельности
const ComponentsSeparately: React.FC = () => {
    return <div className="components">
        <h3>Компоненты</h3>
        <ul>
            <li> <Indicator filled={3} type="yellow"/>  </li>
            <li> <RiskNumber>5</RiskNumber></li>
            <li> <Label type="green" label="Уровень"/> </li>
            <br></br>
            <li><Card title="Уровень риска" border > Контент </Card> </li>
        </ul>
    </div>
}

export default ComponentsSeparately;