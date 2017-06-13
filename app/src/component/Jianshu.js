import React from 'react';
import ajax from '../utils/ajax';

let color = ajax('/api/color');

const Jianshu = () => (
  <div>
    <h2>Jianshu</h2>
    <h2>Im come from server: {color}</h2>
  </div>
)

export default Jianshu;
