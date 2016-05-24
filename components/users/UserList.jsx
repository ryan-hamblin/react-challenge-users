import React, {Component} from 'react';
import User from './User.jsx';

class UserList extends Component{    
    render(){
        return(
            <ul> 
                {this.props.People.map(person => {
                    return <User 
                        users={person}
                        key={person.Id}
                        {...this.props}
                    />
                })}
            </ul>
        )
    }
}

export default UserList;