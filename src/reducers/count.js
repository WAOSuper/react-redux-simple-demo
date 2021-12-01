// reducers/count.js
import { INCREASE, DECREASE, GETSUCCESS, REFRESHDATA } from '../constants' 


const initialState = {
    number: 1,
    lists: [
        {text: 'state'}, 
        {text: 'action'},
        {text: 'reducer'},
        {text: 'redux'}
    ],
    data: []
}


export default function update(state = initialState, action) {

    
    switch(action.type) {
        case INCREASE:
            return Object.assign({}, state, { number: state.number + action.amount })
            break
        case DECREASE:
            return Object.assign({}, state, { number: state.number - action.amount })
            break
        case GETSUCCESS:
            return Object.assign({}, state, { data: action.json })
        case REFRESHDATA:
            return Object.assign({}, state, { data: [] })
        default:
            return state
    }
}