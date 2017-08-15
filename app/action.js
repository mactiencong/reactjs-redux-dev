function addPerson(person) {
    return { type: "ADD_PERSON", person: person};
}
function deletePerson(index) {
    return { type: "DELETE_PERSON", index: index};
}
module.exports = {addPerson, deletePerson};