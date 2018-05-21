import React from 'react';
import { history } from 'STORE';

const Test = (props) => {
  console.log('history----------', history, props.history);
  return (
    <div className='container'><span>hello, blank!</span><a onClick={() => {
      console.log('i am doing');
      props.history.push('/');
    }}>首页</a></div>
  );
};

export default Test;