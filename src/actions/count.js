import { INCREASE, DECREASE, GETSUCCESS, REFRESHDATA } from '../constants'  
import 'whatwg-fetch'  

export const increase = n => {
    return {
        type: INCREASE,
        amount: n
    }
}

export const decrease = n => {
    return {
        type: DECREASE,
        amount: n
    }
}

export const refreshData = () => {
    return {
        type: REFRESHDATA
    }
}

export const getSuccess = (json) => {
    return {
        type: GETSUCCESS,
        json
    }
}

function fetchPosts() {
    return dispatch => {
        return fetch('data.json')
            .then((res) => { console.log(res.status); return res.json() })
            .then((data) => {
                dispatch(getSuccess(data))
            })
            .catch((e) => { console.log(e.message) })
        }
}

export function fetchPostsIfNeeded() {

    return (dispatch, getState) => {
        return dispatch(fetchPosts())
    }
}
