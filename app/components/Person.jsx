var React = require("react");
var ReactDOM = require("react-dom");
var createReactClass = require('create-react-class');
import { deletePerson } from "./../action";
import {connect} from "react-redux";
var Person = createReactClass({
    render(){
        return (
            <div className="person clearfix">
                <div className="detail">
                    Name: {this.props.person.name } - Age: {this.props.person.age}
                </div>
                <div className="action">
                    <a href="#" onClick={this.delete}>Delete</a>
                </div>
            </div>
        );
    },
    delete(index){
        var {dispatch, index} = this.props;
        dispatch(deletePerson(index));
    },
});
module.exports = connect()(Person);