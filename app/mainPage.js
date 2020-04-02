import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import Root from './root';
//import NavBar from './components/NavBar';
//import { isLoggedIn } from './actions/loginOrRegisterActions';

class MainPage extends Component {
  /*componentDidMount(){
    this.props.isLoggedIn();
  }*/

  render() {
    //const navbar = this.props.login ? <NavBar/> : null;

    return (
      <View style={{ flex: 1 }} >
        <Root />
      </View>
    );
  }
}

const mapStateToProps = state => {
  //const { login } = state.Register;  
  return {
  };
};


export default connect(mapStateToProps, { })(MainPage);
