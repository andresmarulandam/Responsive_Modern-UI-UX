import React from 'react';
import { google, slack, dropbox, atlassian, shopify } from './imports';
import './brand.css';

export default function Brand() {
  return (
    <div className="gpt3__brand section__padding">
      <div>
        <img src={google} />
      </div>
      <div>
        <img src={slack} />
      </div>
      <div>
        <img src={atlassian} />
      </div>
      <div>
        <img src={dropbox} />
      </div>
      <div>
        <img src={shopify} />
      </div>
    </div>
  );
}
