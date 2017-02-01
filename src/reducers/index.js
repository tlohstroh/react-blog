import { combineReducers } from 'redux';
import PostsReducer from './reducer_posts';
// import redux-form, grab the reducer prop off of it
// and create a variable with it named formReducer.
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  // state: (state = {}) => state
  posts: PostsReducer,
  form: formReducer
});

export default rootReducer;
