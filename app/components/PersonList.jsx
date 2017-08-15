var React = require("react");
var ReactDOM = require("react-dom");
var createReactClass = require('create-react-class');
var Person = require("./Person.jsx");
var AddPerson = require("./AddPerson.jsx");
import {connect} from "react-redux";
var PersonList = createReactClass({
    render(){
        return(
            <div className="person-list">
                <AddPerson />
                {this.props.persons.map((person, index)=>{
                    return <Person key={index} index={index} person={person} />
                })}
            </div>
        );
    }
});
var getPersonsStateToProps = state => {
    return { persons: state.personReducer.persons };
}
module.exports = connect(getPersonsStateToProps)(PersonList);