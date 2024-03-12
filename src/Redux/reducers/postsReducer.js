import { FETCH_POSTS, REMOVE_POST } from '../types';

const initialState = {
  posts: [],
  loading: false,
  error: null
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS.REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };
    case FETCH_POSTS.SUCCESS:
      return {
        ...state,
        loading: false,
        posts: action.payload,
        error: null
      };
    case FETCH_POSTS.FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case REMOVE_POST:
      return {
        ...state,
        posts: state.posts.filter(post => post.id !== action.payload)
      };
    default:
      return state;
  }
};

export default postsReducer;
