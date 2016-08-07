import React, { Component } from 'react';
import axios from 'axios';
import marked from 'marked';
import Header from './Header';


class Post extends Component {
  constructor(){
    super();
    this.state={
      rawContent: ''
    }
  }

  componentDidMount(){
    // use math random to avoid browser cache
    let address = `https://raw.githubusercontent.com/zhouxuanpo/Big-Demo/master/posts/${this.props.params.title}.md?v=${Math.random()}`
    axios.get(address).then((res) => {
      console.log(res);
      console.log(address);
      this.setState({
        rawContent: res.data
      });
    });
  }

  render(){
    let content = marked(this.state.rawContent!='' ? this.state.rawContent : '请稍等......' );
    return(
      <div>
        <Header />
        { this.props.params.title }
        <div className="post-content">
          <span dangerouslySetInnerHTML={{__html: content}} />
        </div>
      </div>
    )
  }
}

export default Post;