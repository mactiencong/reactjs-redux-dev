var redux = require("redux");
var personReducer = require("./persons");
var reducer = redux.combineReducers({personReducer});
module.exports = reducer;