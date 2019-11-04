
import jsonPlaceHolder from '../api/jsonplaceholder';


export const fetchPosts = () => async dispatch => {
        const response = await jsonPlaceHolder.get('/posts');
        
        dispatch({ type: 'FETCH_POSTS', payload: response.data })
       
    };
export const fetchUserPosts = (id) => async dispatch => {
        const response = await jsonPlaceHolder.get(`/users/${id}`);
        
        dispatch({ type: 'FETCH_USER', payload: response.data })
       
};
     
