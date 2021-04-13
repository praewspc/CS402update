import React , {createContext , useReducer} from 'react' ;
import AppReducer from './AppReducer' ;

// Initial State
const initialState = {
    groups: [
        {id: 1, groupname: 'PraewPooh1'},
        {id: 2, groupname: 'PraewPooh2'},
        {id: 3, groupname: 'PraewPooh3'}
    ]
};

//Create Context
export const GlobalContext = createContext(initialState);

//Provider Component
export const GlobalProvider = ({Group}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    
    //Actions
    const removeGroup = (id) => {
        dispatch({
            type: 'REMOVE_GROUP',
            payload: id
        })
    }

    const addGroup = (group) => {
        dispatch({
            type: 'ADD_GROUP',
            payload: group
        })
    }



    return (
        <GlobalContext.Provider value = {{
            groups: state.groups,
            removeGroup,
            addGroup
        }}>
            {Group}
        </GlobalContext.Provider>
    )
}