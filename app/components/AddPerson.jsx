var React = require("react");
var ReactDOM = require("react-dom");
var createReactClass = require('create-react-class');
import {connect} from "react-redux";
import { addPerson } from "./../action";

var AddPerson = createReactClass({
    render(){
        return(
            <div className="add-person">
                <input type="text" name="name" placeholder="Enter name" ref={name=>this.inputName=name} />
                <input type="text" name="age" placeholder="Enter Age" ref={age=>this.inputAge=age} />
                <button onClick={this.addPerson.bind(null, this)}>Add</button>
            </div>
        );
    },
    addPerson(){
        var {dispatch} = this.props;    
        dispatch(addPerson({name: this.inputName.value, age: this.inputAge.value}));
    }
});
module.exports = connect()(AddPerson);