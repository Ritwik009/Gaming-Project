import React from "react";
import SubscribeCard from "react-subscribe-card";

const mailchimpURL = `[Your Mailchimp subscription URL]`;

const outerCardStyle = `
      padding: 0;
      box-shadow: 0px 5px 35px 0px rgba(50, 50, 93, 0.17);
    `;
const subContainerStyle = `
      box-shadow: 0 2px 5px -1px rgba(50,50,93,.25), 0 1px 3px -1px rgba(0,0,0,.3);
      align-items: center;
    `;
const subInputStyle = `
      border-width: 0;
      margin: 0;
    `;
const subButtonStyle = `
      border-radius: 0;
      flex-grow: 1;
      background-color: #fdfdfd;
      color: #000000;
    `;

const Email = () => (
  <div>
    <SubscribeCard
      mailchimpURL={mailchimpURL}
      outerCardStyle={outerCardStyle}
      subContainerStyle={subContainerStyle}
      subInputStyle={subInputStyle}
      subButtonStyle={subButtonStyle}
    />
  </div>
);

export default Email;