import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';
import { Link } from 'react-router';

export default class DrawerUndockedExample extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle(){
      this.setState({open: !this.state.open});
  }
  handleClose(){
      this.setState({open:false});
  }

  render() {
    let styles = {
        draw : {
            textAlign:'center',
            // zIndex:'22',
        },
        menuItem:{
            color:'#fff',
            cursor:'pointer',
            marginTop:'5px',
        },
        link:{
            display:'block',
            textDecoration:'none',
        },
        containerStyles:{
            background:'rgba(255,255,255,0.85) 0%',
            zIndex:'211112',
        }
    }
    return (
      <div style={styles.draw}  >
        <Drawer
        className="aaa"
          docked={false}
          width={200}
          containerStyle={styles.containerStyles}
          style={styles.draw}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
          <AppBar title="周璇"  onTouchTap={this.handleClose.bind(this)} />
          <MenuItem style={styles.menuItem} onTouchTap={this.handleClose.bind(this)}><Link to="/" style={styles.link}>Home</Link></MenuItem>
          <MenuItem style={styles.menuItem} onTouchTap={this.handleClose.bind(this)}><Link to="githubInfo" style={styles.link}>Github Info</Link></MenuItem>
          <MenuItem style={styles.menuItem} onTouchTap={this.handleClose.bind(this)}><Link to="blog" style={styles.link}>Blog</Link></MenuItem>
          <MenuItem style={styles.menuItem} onTouchTap={this.handleClose.bind(this)}><Link to="about" style={styles.link}>About</Link></MenuItem>
        </Drawer>
      </div>
    );
  }
}
