export const FETCH_POST_REQUEST = 'FETCH_POST_REQUEST';
export const FETCH_POST_SUCCESS = 'FETCH_POST_SUCCESS';
export const FETCH_POST_FAILED = 'FETCH_POST_FAILED';



export const getPosts = (pageNo) => {
	return {
	  type: FETCH_POST_REQUEST,
	  payload:{pageNo}
	};
  };
  
  export const getPostsSuccess = (payload) => {
	return {
	  type: FETCH_POST_SUCCESS,
	  payload
	};
  };
  
  export const getPostsFail = (error) => {
	return {
	  type: FETCH_POST_FAILED,
	  payload: error,
	};
  };



