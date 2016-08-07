import React, { PropTypes } from 'react'

class Home extends React.Component {
  render () {
      let styles={
          root:{
              width:'100vw',
              height:'100vh',
              background:'url("http://pic.qiantucdn.com/58pic/18/25/11/44F58PICJXC_1024.jpg") no-repeat  fixed center center/cover'
          },
          h1:{
              width:'100%',
              color:'#fff',
              opacity:'0.5',
              textAlign:'center',
              position:'absolute',
              top:'50%',
              marginTop:'-136px',
            //   left:'50%',
            //   marginLeft:'-184px',
              fontSize:'72px',
              padding:'100px 0',
              background:'#000',
            // border:'1px solid #fff'
          }

      }
    return(
      <div style={styles.root}>
        <h1 style={styles.h1}>WELCOME</h1>
      </div>
    )
  }
}

export default Home;
