import React from 'react'
import List from './List'



class Blog extends React.Component {
  render () {
      let styles={
          root:{
              width:'100vw',
              height:'100vh',
            //   background:'url("http://photo.enterdesk.com/2011-6-11/enterdesk.com-444FA91133B78903906517FD46FAC91C.jpg") no-repeat  fixed center center/cover'
          }
      }
    return(
        <div style={styles.root}>
          <List />
        </div>
    )
  }
}

export default Blog;