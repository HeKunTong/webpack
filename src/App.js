import React from 'react';
import { Input } from 'antd';
import './index.css';

const App = () => (
  <div className='container'>
    <span>这是一个测试！</span>
    <Input style={{width: '200px'}} defaultValue={12}/>
  </div>
);

export default App;