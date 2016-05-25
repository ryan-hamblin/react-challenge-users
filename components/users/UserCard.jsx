import React, {Component, PropTypes} from 'react';

class UserCard extends Component {
    render () {
        return (
            <div>
                {Object.keys(this.props.user).map((key) => {
                    return (
                        <div key={key}>
                            <h3>Name: {this.props.user.Name}</h3>
                            <p><strong>Title: {this.props.user.Title}</strong></p>
                            <p>Phone: {this.props.user.Phone}</p>
                            <div>
                                <p>Address: 
                                    {this.props.user.Street} 
                                    <br/>
                                    {this.props.user.City} 
                                    <br/>
                                    {this.props.user.Sate}
                                    {this.props.user.Zipcode}
                                </p>
                            </div>
                            <p>Email: {this.props.user.Email}</p>
                            <p>Birthday: {this.props.user.Birthday}</p>
                            <img src={this.props.user.Picture}/>
                        </div>
                    )
                })}
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