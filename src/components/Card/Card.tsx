import React from 'react';
import './Card.scss';

interface CardProps {
    title: string;
    border?: boolean;
    styles?: React.CSSProperties;
}

const Card: React.FC<CardProps> = (props) => {
    const {title, children, styles, border} = props

    return <div 
        className={`card ${border ? 'card_border' : ''}`}
        style={styles}    
    >
        <div className="card__container">

            <div className="card__content">
                {children}
            </div>
            <div className="card__title" >
                {title}
            </div>
        
        </div>
    </div>

}

export default Card;