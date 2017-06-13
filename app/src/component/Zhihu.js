import React from 'react';
import ajax from '../utils/ajax';

let name = ajax('/api/name');

const Zhihu = () => (
  <div>
    <h2>Zhihu</h2>
    <h2>Im come from server: {name}</h2>
  </div>
)

export default Zhihu;
