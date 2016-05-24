import React, {Component} from 'react';

class UserCard extends Component{
    render(){
        return(
            <div className='row'>
                <div className='col-sm-6 col-md-4'>
                    <div className='thumbnail'>
                        <img src={this.props.users.Picture} alt='...' />
                        <div className='caption'>
                            <h3>{this.props.users.Name}</h3>
                            <p><strong>{this.props.users.Title}</strong></p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserCard;