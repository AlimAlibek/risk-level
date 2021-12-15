import React from 'react';
import './Indicator.scss';

interface IndicatorProps {
    filled: number,
    type: 'green' | 'yellow' | 'red';
    length?: number,
    segmentSize?: number
}

const Indicator: React.FC<IndicatorProps> = (props) => {
    const {filled, type, length = 5, segmentSize = 7} = props;
    const arr = Array(length).fill(true);

    return <div className="indicator">
        <div className="indicator__container">
            {arr.map((i, index) => (
                <div 
                    key={index}
                    className={`
                        indicator__segment
                        ${filled > index ? "indicator__segment_"+type : ""}
                    `}
                    style={{
                        "width": segmentSize, "height": segmentSize, 'marginRight': segmentSize/4
                    }}
                ></div>
            ))}
        </div>

    </div>
}
export default Indicator;