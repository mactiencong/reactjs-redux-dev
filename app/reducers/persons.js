const initialState = { persons: [] };
module.exports = (previousState=initialState, action) => {
    if(action.type==="ADD_PERSON") return {...previousState, persons: [...previousState.persons, action.person]};
    if(action.type==="DELETE_PERSON") return {...previousState, persons : previousState.persons.filter((person, index)=>index!==action.index)};
    return previousState;
};