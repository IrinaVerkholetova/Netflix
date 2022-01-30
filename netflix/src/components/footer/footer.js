import React from 'react';
import './footer.css';
import { Netflix } from '../logo/logo';

export const Footer = () => {
  return (
    <div className="footerContainer">
      <Netflix />
    </div>
  );
};

export class Footer2 extends React.Component {
  render() {
    return (
      <div className="footerContainer">
        <Netflix />
      </div>
    );
  }
}
