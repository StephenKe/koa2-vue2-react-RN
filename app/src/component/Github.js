import React from 'react';
import http from '../redux/fecthData';

http.dispatch({ type: '/api/email' });
const email = http.getState();

const Github = () => (
  <div>
    <h2>Github</h2>
    <h2>Im come from server: {email}</h2>
  </div>
)

export default Github;
