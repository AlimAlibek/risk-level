import React from "react";
import './RiskCard.scss';

import Card from "../Card";
import Indicator from "../Indicator";
import Label from "../Label";
import RiskNumber from "../RiskNumber";

import getRiskLevel from '../../utils/getRiskLevel';

interface RiskCardProps {
    risk: number
}
const RiskCard: React.FC<RiskCardProps> = ({risk}) => {
    const {level, type} = getRiskLevel(risk);

    return <Card title="Уровень риска" >

        <div className="risk-card">

            <div className="risk-card__number">
                <RiskNumber> {risk} </RiskNumber>
            </div>

            <div className="risk-card__indicator">
                <Indicator filled={risk} type={type} />
            </div>

            <div className="risk-card__laber">
                <Label label={level} type={type} />
            </div>

        </div>

    </Card>
}

export default RiskCard;