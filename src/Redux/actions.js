import { FETCH_POSTS, REMOVE_POST } from './types';

export const fetchPosts = () => async (dispatch) => {
  dispatch({ type: FETCH_POSTS.REQUEST });
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    dispatch({ type: FETCH_POSTS.SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FETCH_POSTS.FAILURE, payload: error.message });
  }
};

export const removePost = (postId) => {
  return {
    type: REMOVE_POST,
    payload: postId
  };
};
