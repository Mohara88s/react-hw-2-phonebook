import React from 'react';

const Contact = ({ name, number }) => {
  return (
    <li>
      <p>
        {name} {number}
      </p>
    </li>
  );
};

export default Contact;
