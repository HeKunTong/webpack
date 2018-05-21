import React from 'react';
import { connect } from 'react-redux';
import map from 'lodash/map';
import action from 'ACTION/app/users';
import { Button } from 'antd';

const change = (props) => {
  const { users, fetch }  = props;
  let list = [{id: 1, name: 'blank', age: 26}];
  if (users[0].name === list[0].name) {
    list = [{id: 1, name: 'duck', age: 24}];
  }
  fetch(list);
};

const Home = (props) => {
  const { users } = props;
  return (
    <div className='container'>
      {
        map(users, (user, index) => (
          <div key={index}>
            <span style={{marginRight: '10px'}}>{user.name}</span>
            <span>{user.age}</span>
          </div>
        ))
      }
      <div>
        <Button onClick={() => change(props)}>我要换人</Button>
      </div>
    </div>
  );
};

export default connect(({ app }) => {
  return {
    users: app.users
  };
}, action)(Home);