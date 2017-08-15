const initialState = {
    list: []
};
function personReducer(previousState=initialState, action){
    if(action.type==="ADD_PERSON") return {...previousState, list: [...previousState.list, action.person]};
    if(action.type==="DELETE_PERSON") return {...previousState, list: previousState.list.filter((person, index)=>index!==action.index)};
    return previousState;
}
module.exports = personReducer;