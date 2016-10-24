import React from 'react'
import List from './List'
import Header from './Header';


class Blog extends React.Component {
  render () {
      let styles={
          root:{
              width:'100vw',
          }
      }
    return(
        <div style={styles.root}>
          <Header />
          <List />
        </div>
    )
  }
}

export default Blog;
