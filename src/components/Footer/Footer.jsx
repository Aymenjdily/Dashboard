import React from 'react';

const Footer = (props) => (
  <div className="mt-24">
    <p className="dark:text-gray-200 text-gray-700 text-center m-20">
      {props.Copyright}
    </p>
  </div>
);

export default Footer;
