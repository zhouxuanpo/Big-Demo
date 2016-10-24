import React from 'react';


class MyInfo extends React.Component {
    render () {
        let styles = {
            template:{
                width: '70%',
                margin: '0 auto',
                marginTop:'30px',
                marginBottom:'30px',
                padding: '30px 3% 30px 3%',
                boxSizing:'borderBox',
                overflow:'hidden'
            },
            top:{
                width:'100%',
                overflow:'hidden',
                fontSize:'18px',
            },
            topLeft:{
                width:'48%',
                float:'left',
                borderRight:'2px solid #00bcd4'
            },
            topRight:{
                width:'48%',
                height:'350px',
                float:'right',
            },

            ul:{
                listStyle:'none'
            },
            li:{
                height:'24px',
            },
            personal:{
                height:'24px',
                lineHeight:'24px',
                textIndent:'30px',
                background:'url("http://of8ap3b4p.bkt.clouddn.com/personal.svg") no-repeat',
                backgroundSize:'24px',
                marginBottom:'10px'
            },
            phone:{
                height:'24px',
                lineHeight:'24px',
                textIndent:'30px',
                background:'url("http://of8ap3b4p.bkt.clouddn.com/phone.svg") no-repeat',
                backgroundSize:'24px',
                marginBottom:'10px'
            },
            email:{
                height:'24px',
                lineHeight:'24px',
                textIndent:'30px',
                background:'url("http://of8ap3b4p.bkt.clouddn.com/email.svg") no-repeat',
                backgroundSize:'24px',
                marginBottom:'10px'
            },
            address:{
                height:'24px',
                lineHeight:'24px',
                textIndent:'30px',
                background:'url("http://of8ap3b4p.bkt.clouddn.com/address.svg") no-repeat',
                backgroundSize:'24px',
                marginBottom:'10px'
            },
            p:{
                paddingRight:'20px'
            },
            h3:{
                display:'block',
                color:'rgb(0, 188, 212)',
            },
            a:{
                display:'block',
                width:'224px',
                height:'280px',
                background:'url("http://of8ap3b4p.bkt.clouddn.com/job_yellow.jpg") no-repeat',
                backgroundSize:'contain',
                overflow:'hidden',
            }

        }
        return(
          <div style={styles.template}>
            <div>
                <div style={styles.topLeft}>
                    <ul style={styles.ul}>
                        <li style={styles.personal}>周璇</li>
                        <li style={styles.phone}>186-3119-4491</li>
                        <li style={styles.email}>273975988@qq.com</li>
                        <li style={styles.address}>河北石家庄</li>
                    </ul>
                    <h3 style={styles.h3}>自我评价</h3>
                    <p style={styles.p}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;本人性格随和乐观，开朗幽默，工作认真负责，善于在实践中积累学习，不断的完善自我，适应能力强，能够在短时间内融入到团队。本人爱好广泛，游泳、乒乓球、跳舞、电竞等，这几样是最精通的兴趣技能，其他兴趣颇有接触，玩得开。<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我的理念是，不能在最应该努力的年纪选择安逸，而是勇于面对各种挑战。</p>
                </div>
                <div className='clearfix' style={styles.topRight}>
                    <h3 style={styles.h3}>个人简历-移动端</h3>
                    <a href="https://www.baidu.com/" style={styles.a}></a>
                </div>
            </div>
          </div>
        )
    }
}




export default MyInfo;
