import React, {Component} from 'react';

class User extends Component{
     render(){
        return(
            <li>
                <a href={this.props.users.Name}>{this.props.users.Name}</a>
            </li>
        )
     }
}

export default User;