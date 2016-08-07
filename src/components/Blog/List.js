import React from 'react';
import BlogCard from './BlogCard';
import map from 'lodash/fp/map'




let blogs = [
    {index:'1',title:'Hello World',date:'2016年7月8日'},
    {index:'2',title:'React',date:'2016年7月1日'},
    {index:'3',title:'Bootstrap',date:'2016年6月25日'},
    {index:'4',title:'HTML5',date:'2016年6月16日'},
    {index:'5',title:'CSS3',date:'2016年6月2日'},
    {index:'6',title:'QQ',date:'2016年6月2日'},
    {index:'7',title:'weChat',date:'2016年6月2日'},
    {index:'8',title:'Good Job',date:'2016年6月2日'}
]


class List extends React.Component {
    render () {
        console.log(this.props.search)
        let styles = {
            list:{
                width:'80%',
                margin:'0 auto',
                marginTop:'20px',
                overflow:'hidden',
                minWidth:'600px',
            }
        }
        let newBlogCards = [];
        if(this.props.search == ""){
            map((b) => {newBlogCards.push(<BlogCard title={b.title} index={b.index} date={b.date} key={Math.random()} />)},blogs);
        }else{
            let query = new RegExp(this.props.search , 'i');
            for ( let i = 0 ; i < blogs.length ; i++ ){
                if ( query.test(blogs[i].title)){
                    newBlogCards.push(<BlogCard title={blogs[i].title} index={blogs[i].index} date={blogs[i].date} key={Math.random()} />)
                }

            }
        }




        return(
            <div style={styles.list}>
                {newBlogCards}
            </div>
        )
    }

}

export default List;
