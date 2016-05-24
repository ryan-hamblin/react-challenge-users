import React, {Component} from 'react';
import UserCard from './UserCard.jsx';
class User extends Component{
    onClick(e){
        e.preventDefault();
        const {setUser, user} = this.props;
        setUser(user);
    }
    render(){
    const {user, activeUser} = this.props;
    const active = user === activeUser ? 'active' : '';
    return(
        <li className={active}>
            <a onClick={this.onClick.bind(this)}>
                {this.props.users.Name}
            </a>
            <UserCard 
                {...this.props}
            />
        </li>
    )
    }
}

export default User;