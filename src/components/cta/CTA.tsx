import React, { FunctionComponent } from 'react';
import './cta.css';

interface OwnProps {}

const CTA: FunctionComponent<OwnProps> = (props: OwnProps) => {

    return (
        <div className="gpt3__cta">
            <div className="gpt3__cta-content">
                <p>Request Early Access to Get Started</p>
                <h3>Register today & start exploring the endless possibilities.</h3>
            </div>
            <div className="gpt3__cta-btn">
                <button type="button">Get Started</button>
            </div>
        </div>
    );
}

export default CTA;