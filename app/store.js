var redux = require("redux");
var reducer = require("./reducers/reducer");
module.exports = redux.createStore(reducer);