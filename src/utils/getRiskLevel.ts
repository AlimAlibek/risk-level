import { RiskLevels } from "../types/RiskLevels";
import { RiskTypes } from '../types/RiskTypes';

interface IRiskLevel {
    level: RiskLevels,
    type: RiskTypes,
}

export default function getRiskLevel(threat: number): IRiskLevel {
    let riskLevel: IRiskLevel;
    switch (threat) {
        case 1:
        case 2:
            riskLevel = {
                level: RiskLevels.Low,
                type: RiskTypes.Low
            }
            break;
        case 3:
            riskLevel = {
                level: RiskLevels.Medium,
                type: RiskTypes.Medium,
            }
            break;
        case 4:
        case 5:
            riskLevel = {
                level: RiskLevels.High,
                type: RiskTypes.High
            }
            break;
            
        default : 
            riskLevel = {
                level: RiskLevels.Low,
                type: RiskTypes.Low
            }
            break;
    }
    return riskLevel;
}