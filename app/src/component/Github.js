import React from 'react';
import ajax from '../utils/ajax';

let email = ajax('/api/email');

const Github = () => (
  <div>
    <h2>Github</h2>
    <h2>Im come from server: {email}</h2>
  </div>
)

export default Github;
