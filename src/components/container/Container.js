import React from 'react'
import { Divider } from 'antd'
import {connect} from 'react-redux';
import Profile from './profile/Profile'


const Container = (props) => {

   // const history = useHistory()

//    let content = null; 

//    if (props.sidebar.num === 1) {
//          history.push("/customers")
//     } 
    return (
        <div style={{backgroundColor:'#f3f5f6', height:'100vh', overflowY:'scroll'}}>
            <div style={{padding:'1rem', display:'flex', alignItems:'center'}}>
                <span style={{fontSize:'2rem', fontWeight:'500'}}>My profile</span>
            </div>
            <Divider style={{margin:'0'}}/>
            <Profile/>
        </div>
    )
}

const mapStateToProps = ({sidebar}) => {
    return {
        sidebar
    }
  
  }

export default connect(mapStateToProps)(Container)
