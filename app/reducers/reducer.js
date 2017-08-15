var redux = require("redux");
var personReducer = require("./persons");
var reducer = redux.combineReducers({persons: personReducer});
module.exports = reducer;