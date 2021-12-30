import React, { FunctionComponent } from 'react';
import './brand.css';
import googleLogo from '../../assets/google.png';
import slackLogo from '../../assets/slack.png';
import atlassianLogo from '../../assets/atlassian.png';
import dropboxLogo from '../../assets/dropbox.png';
import shopifyLogo from '../../assets/shopify.png';

interface OwnProps {}

const Brand: FunctionComponent<OwnProps> = (props: OwnProps) => {

    return (
        <div className="gtp3__brand section__padding">
            <div>
                <img src={googleLogo} alt="google" />
            </div>
            <div>
                <img src={slackLogo} alt="slack" />
            </div>
            <div>
                <img src={atlassianLogo} alt="atlassian" />
            </div>
            <div>
                <img src={dropboxLogo} alt="dropbox" />
            </div>
            <div>
                <img src={shopifyLogo} alt="shopify" />
            </div>
        </div>
    );
}

export default Brand;