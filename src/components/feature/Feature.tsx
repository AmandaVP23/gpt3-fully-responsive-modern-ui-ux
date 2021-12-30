import React, { FunctionComponent } from 'react';
import './feature.css';

interface OwnProps {
    title: string;
    text: string;
}

const Feature: FunctionComponent<OwnProps> = (props: OwnProps) => {

    return (
        <div className="gpt3__features-container__feature">
            <div className="gpt3__features-container__feature-title">
                <div />
                <h1>{props.title}</h1>
            </div>
            <div className="gpt3__features-container__feature-text">
                <p>{props.text}</p>
            </div>
        </div>
    );
}

export default Feature;