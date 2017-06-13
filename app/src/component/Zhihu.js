import React from 'react';
import http from '../redux/fecthData';

http.dispatch({ type: '/api/name' });
const name = http.getState();

const Zhihu = () => (
  <div>
    <h2>Zhihu</h2>
    <h2>Im come from server: {name}</h2>
  </div>
)

export default Zhihu;
