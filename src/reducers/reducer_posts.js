import { FETCH_POSTS } from '../actions/index';

// all =  array of blogposts for indexpage , post is single post
const INITIAL_STATE = { all: [], post: null};

export default function (state = INITIAL_STATE, action){
  switch(action.type) {
    case FETCH_POSTS:
      // create a new state object,
      // take whatever our current state is
      // and also: add on all action payload data
      return { ...state, all: action.payload.data};
    default:
      return state;
  }
}
