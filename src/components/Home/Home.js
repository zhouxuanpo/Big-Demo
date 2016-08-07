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
              fontSize:'72px',
              padding:'100px 0',
              zIndex:'1',
              background:'#000',
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
