export default (state, action) => {
    switch (action.type) {
        case 'REMOVE_GROUP':
            return {
                groups: state.groups.filter(group => {
                    return group.id !== action.payload
                })
            }
        case 'ADD_GROUP':
            return {
                groups: [action.payload, state.groups]
            }
        default:
            return state
    }
}
