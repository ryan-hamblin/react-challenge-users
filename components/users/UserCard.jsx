import React, {Component, PropTypes} from 'react';

class UserCard extends Component {
    render () {
        return (
            <div className='user-card'>
                <div className='center-text'>
                    <h4>{this.props.user.Name}</h4>
                    <div className='image-wrap'>
                        <img src={this.props.user.Picture}/>
                    </div>
                    <p><strong>Occupation: {this.props.user.Title}</strong></p>
                </div>
                <p>Phone: {this.props.user.Phone}</p>
                <div className='address-block'>
                    <p>Address: 
                        <br/>
                        {this.props.user.Street} 
                        <br/>
                        {this.props.user.City}, {this.props.user.State} 
                        <br/>
                        {this.props.user.Zipcode}
                    </p>
                </div>
                <hr/>
                <p>Email: {this.props.user.Email}</p>
                <p>Birthday: {this.props.user.Birthday}</p>
                
            </div>
        )
    }
}

UserCard.propTypes = {
    user: PropTypes.shape({
        Name: PropTypes.string.isRequired,
        Id: PropTypes.string.isRequired,
        Title: PropTypes.string.isRequired,
        Phone: PropTypes.string.isRequired,
        Street: PropTypes.string.isRequired,
        City: PropTypes.string.isRequired,
        State: PropTypes.string.isRequired,
        Zipcode: PropTypes.string.isRequired,
        Email: PropTypes.string.isRequired,
        Birthday: PropTypes.string.isRequired,
        Picture: PropTypes.string.isRequired,
    }).isRequired,
}

export default UserCard