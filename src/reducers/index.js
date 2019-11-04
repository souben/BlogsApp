import  { combineReducers } from 'redux';
import postsReducer from './PostReducer';
import userReducer from './UserReducer';

export default combineReducers({
    posts: postsReducer,
    users : userReducer
}); 