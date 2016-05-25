import React, {Component} from 'react';
import UserCard from './UserCard.jsx';

class User extends Component{
    onClick(e){
        e.preventDefault();
        const {updateUserId, user} = this.props;
        updateUserId(user);
    }
    render(){
    const {user, activeUser, userIdToShow} = this.props;
    const active = user === activeUser ? 'active' : '';

    return(
        <li className={active}>
            <a onClick={() => this.props.updateUserId(this.props.users.Id)}>
                {this.props.users.Name}
            </a>
            {userIdToShow
                ? <UserCard user={this.props.People[userIdToShow-1]}/>
                : null}
        </li>
    )
    }
}

export default User;