import initialState from './initialState';
import * as types from '../constants/actionTypes';

const arr = [];
const updateroi = (state, action) => {
    // console.log('im reducer')
    let newState = { ...state };
    const roi = (((action.gtm + action.gql + action.ghc1 + action.ghc2 + action.gfx)
    - action.coi) / action.coi) * 100;
    const time = new Date();
    const ch = time.getHours();
    const cm = time.getMinutes();
    arr.push({ name: roi.toFixed(2), time: `${ch}:${cm}hrs` });

    // time.push(new Date());
    // if (roi !== NaN)
    return roi ? (newState = Object.assign({}, state, { roi, calcValues: arr })) : { ...newState };
    // return { ...newState };
    // }
    // return state;
};


export default (state = initialState, action) => {
    switch (action.type) {
        case types.UPDATE_ROI:
            return updateroi(state, action);
        default:
            return state;
    }
};
