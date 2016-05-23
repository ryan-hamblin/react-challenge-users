import React, {Component} from 'react';
import UserSection from './users/UserSection.jsx';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
           People:[  
              {  
                 "Name":"Rowlf",
                 "Id": "1",
                 "Title":"Pianist",
                 "Phone":"251-415-8198",
                 "Street":"3867 George Avenue",
                 "City":"Mobile",
                 "State":"AK",
                 "Zipcode":"36602",
                 "Email":"rowlf@Hensonllc.com",
                 "Birthday":"4/3/1962",
                 "Picture":"http://vignette3.wikia.nocookie.net/muppet/images/7/79/Rowlf2.jpg"
              },
              {  
                 "Name":"Kermit",
                 "Id": "2",
                 "Title":"News Anchor",
                 "Phone":"715-387-5896",
                 "Street":"283 Abner Road",
                 "City":"Marshfield",
                 "State":"WI",
                 "Zipcode":"54449",
                 "Email":"kermit@Hensonllc.com",
                 "Birthday":"6/27/1955",
                 "Picture":"http://vignette3.wikia.nocookie.net/muppet/images/7/79/Kermit-the-frog.jpg"
              },
              {  
                 "Name":"Beaker",
                 "Id": "3",
                 "Title":"Lab Assistant",
                 "Phone":"860-257-6781",
                 "Street":"2263 Hart Street",
                 "City":"Wethersfield",
                 "State":"CT",
                 "Zipcode":"06109",
                 "Email":"beaker@Hensonllc.com",
                 "Birthday":"11/18/1977",
                 "Picture":"http://vignette2.wikia.nocookie.net/muppet/images/0/05/Beaker.jpg"
              },
              {  
                 "Name":"Gonzo",
                 "Id": "4",
                 "Title":"Stuntman",
                 "Phone":"603-326-8798",
                 "Street":"3061 Shearwood Forest Drive",
                 "City":"Manchester",
                 "State":"NH",
                 "Zipcode":"03103",
                 "Email":"gonzo@Hensonllc.com",
                 "Birthday":"6/10/1970",
                 "Picture":"http://vignette3.wikia.nocookie.net/muppet/images/e/eb/Gonzo2.jpg"
              }
           ]
        }
     }
    setUser(activeUser){
        this.setState({activeUser});
        console.log("CLICKED: ", {activeUser})
    }
    render(){
        return (
            <UserSection 
                {...this.state} 
                setUser={this.setUser.bind(this)}
            />
        )
    }
}

export default App