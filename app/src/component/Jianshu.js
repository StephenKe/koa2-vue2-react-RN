import React from 'react';
import http from '../redux/fecthData';

http.dispatch({ type: '/api/color' });
const color = http.getState();

const Jianshu = () => (
  <div>
    <h2>Jianshu</h2>
    <h2>Im come from server: {color}</h2>
  </div>
)

export default Jianshu;
