import React, { useState, useEffect } from 'react';

import { Input, Button } from 'antd';
import Nav from './Nav'
import { connect } from 'react-redux';

function Tools(props) {

  const [setting, setSetting] = useState('')

  var setup = async () => {
    props.setsetting(setting)
    setSetting('')
    console.log('todo')
  }


  return (
    <div style={{ textAlign:'center' }} >
      <Nav />
      <p>set: {props.setting}</p>
      <div className="Login-page" >
        <div className="Sign">

          <Input onChange={(e) => setSetting(e.target.value)} value={setting} className="Login-input" placeholder="somethingtosetforprinter?????" />
          <Button onClick={() => setup()} style={{ width: '80px' }} type="primary">Set</Button>
        </div>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return { setting: state.setting }
}

function mapDispatchToProps(dispatch) {
  return {
    setsetting: function (myset) {
      dispatch({
        type: 'setsetting',
        myset: myset
      })
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tools)
