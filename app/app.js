var React = require("react");
var ReactDOM = require("react-dom");
var {Provider} = require("react-redux");
var PersonList = require("./components/PersonList.jsx");
var store = require("./store");
ReactDOM.render(
    <Provider store={store}>
        <PersonList />
    </Provider>
    , document.getElementById('app')
);