import React, { FunctionComponent } from 'react';
import './whatGPT3.css';
import { Feature } from '../../components';

interface OwnProps {}

const WhatGPT3: FunctionComponent<OwnProps> = (props: OwnProps) => {

    return (
        <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
            <div className="gpt3__whatgpt3-feature">
                <Feature
                    title="What is GPT-3"
                    text="We so opinion friends me message as delight. Whole front fo of plate heard oh ought. His defective nor conviced residence won. Connection has put impossible own apartments boisterous. At jointure ladyship as insisted so humanity he. Friendly bachelor entrance to on by"
                />
            </div>
            <div className="gpt3__whatgpt3-heading">
                <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
                <p>Explore The Library</p>
            </div>
            <div className="gpt3__whatgpt3-container">
                <Feature
                    title="Chatbots"
                    text="We so opinion friends me message as delight. Whole front do of place heard oh ought"
                />
                <Feature
                    title="Knowledgebase"
                    text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartaments"
                />
                <Feature
                    title="Education"
                    text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartaments"
                />
            </div>
        </div>
    );
}

export default WhatGPT3;