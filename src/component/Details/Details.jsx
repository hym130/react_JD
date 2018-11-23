import React, { Component } from 'react'
import './Details.css'
import { Tabs, WhiteSpace } from 'antd-mobile';
import { StickyContainer, Sticky } from 'react-sticky';
import {getJData} from '../../api/servers.js'
import { connect } from 'react-redux'
import {aas} from '../../store/actions/detail'
const className = 'detail'
function renderTabBar(props) {
    return (<Sticky>
        {({ style }) => <div style={{ ...style, zIndex: 1 }}><Tabs.DefaultTabBar {...props} /></div>}
    </Sticky>);
}
const tabs = [
    { title: '商品' },
    { title: '详情' },
    { title: '评价' },
];
class Details extends Component {
    componentDidMount() {
        //const { dispatch } = this.props;//链接了connect就可以结构dispatch
        getJData().then((res) => {
            const {dispatch} =this.props;
            const data=res.data.wareDetailComment
             if(data.code != '0') return 
            // // this.setState({
            // //     jdList: jdList.wareInfoList
            // // })

            dispatch(aas(data.commentInfoList))//store/actions/home.js的home方法里调用
            console.log(res.data.wareDetailComment,'yyyy');
        })

            .catch(e => {
                throw Error(e)
            })
    }
    render() {
        console.log(this.props)
        const { location, imageurl, wname } = this.props.location.state;
        const {datas}=this.props;
        return (
            <div>
                <WhiteSpace />
                <StickyContainer>
                    <Tabs tabs={tabs}
                        initalPage={'t2'}
                        renderTabBar={renderTabBar}
                    >
                        <div className="main" >
                            <div
                                className={className}
                            >
                                <img src={imageurl} alt="" />
                                <div>{wname}</div>
                            </div>
                         <div>
                                {
                                    datas!==null&&datas.map((item,index)=>{
                                        return (
                                            <div key={index}>
                                                {item.commentData}
                                                <div>
                                                    {
                                                        item.pictureInfoList!==null&&item.pictureInfoList.map((item,index)=>{
                                                            return (
                                                                <p className='pp' key={index}><img src={item.picURL} alt=""/></p>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className="main">
                            222222
        </div>
                        <div className="main">
                            3333333
        </div>
                    </Tabs>
                </StickyContainer>
                <WhiteSpace />
            </div>
        )
    }
}
// const Details = (props) => {

//     console.log(props,'mmm');
//     const { imageurl, wname } = props.location.state
//     return <div>
// <WhiteSpace />
// <StickyContainer>
//     <Tabs tabs={tabs}
//         initalPage={'t2'}
//         renderTabBar={renderTabBar}
//     >
//         <div className="main" >
//             <div
//                 className={className}
//             >
//                 <img src={imageurl} alt="" />
//                 <div>{wname}</div>
//             </div>
//             <p>
//                 评价列表
//             </p>
//         </div>
//         <div className="main">
//             222222
// </div>
//         <div className="main">
//             3333333
// </div>
//     </Tabs>
// </StickyContainer>
// <WhiteSpace />
//     </div>
// };
const mapStateToProps = (state, ownProps) => {
    
    //取数据的
    return {
        datas:state.detail.data
    }
}
export default connect(mapStateToProps)(Details);