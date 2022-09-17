export const FETCH_POST_REQUEST = 'FETCH_POST_REQUEST';
export const FETCH_POST_SUCCESS = 'FETCH_POST_SUCCESS';
export const FETCH_POST_FAILED = 'FETCH_POST_FAILED';



export const getPosts = (pageNo,callback) => {
	return {
	  type: FETCH_POST_REQUEST,
	  callback,
	  pageNo
	};
  };
  
  export const getPostsSuccess = (posts) => {
	return {
	  type: FETCH_POST_SUCCESS,
	  payload: posts,
	};
  };
  
  export const getPostsFail = (error) => {
	return {
	  type: FETCH_POST_FAILED,
	  payload: error,
	};
  };



