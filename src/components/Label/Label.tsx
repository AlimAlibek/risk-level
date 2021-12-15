import React from 'react';
import './Label.scss';

interface LabelProps {
    label: string,
    type: 'green' | 'yellow' | 'red',
    styles?: React.CSSProperties
}

const Label: React.FC<LabelProps> = ({label, type, styles}) => {

    return <div 
        className={`label label_${type}`} 
        style={styles}
    >
        {label}    
    </div>
}

export default Label;