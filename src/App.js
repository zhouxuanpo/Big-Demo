import React, { PropTypes } from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { Link } from 'react-router';
import IconButton from 'material-ui/IconButton';
import MenuButton from 'material-ui/svg-icons/navigation/menu';
import NavBar from './NavBar';
// import Header from './components/Header/Header';
// import Footer from './components/Footer/Footer';


class App extends React.Component {
  getChildContext() {
    return {muiTheme: getMuiTheme()};
  }
  handelClick(){
        this.refs.navbar.handleToggle();
    }
  render () {
      let styles={
             icon:{
                   marginTop:'10px',
                   marginLeft:'10px',
                   width: '52px',
                   height: '52px',
             },
             svg: {
                   width: '32px',
                   height: '32px',
             },
             IconDiv:{
                 position:'fixed',
                 left:'0',
                 top:'0',
             }
       }
    //    <Header /><Footer />
    return(
      <div>

          <div style={styles.IconDiv}>
            <IconButton style={styles.icon} iconStyle={styles.svg} tooltip="menu" onClick={this.handelClick.bind(this)}>
                 <MenuButton color='#fff' />
            </IconButton>
            <NavBar ref='navbar' />
          </div>

          {this.props.children}

      </div>
    )
  }
}

App.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};

export default App;
