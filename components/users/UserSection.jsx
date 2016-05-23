import React, {Component} from 'react';
import User from './User.jsx';
import UserList from './UserList.jsx';

class UserSection extends Component{
    render(){
        return(
            <div className='support panel panel-primary'>
                <div className='panel-heading'>
                    <strong>Users</strong>
                </div>
                <div className='panel-body channels'>
                    <UserList {...this.props}/>
                </div>
            </div>
        )
    }
}

export default UserSection;