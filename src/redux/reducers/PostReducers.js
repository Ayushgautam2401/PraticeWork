import { FETCH_POST_REQUEST ,FETCH_POST_FAILED,FETCH_POST_SUCCESS } from '../actions/PostActions'; 
import { forEach ,map} from 'lodash';
const INITIAL_STATE = {
	totalElements: 0,
	fetching:{},
	records:{},
	ids:{}
};

 const PostReducers = (state = INITIAL_STATE, action) => {
	const {type, payload} = action;
	const {pageNo, records} = payload || {};
	switch (type) {
		case FETCH_POST_REQUEST:
			return {
				...state,
				fetching: {
					...state.fetching,
					[pageNo]: true
				}
			};
		case FETCH_POST_SUCCESS:
           const pageIds = [];
		   const rawRecords = {};
		  records?.forEach((item) =>{
			const {id} = item;
			pageIds.push(id)
			rawRecords[id] = item;
		   });
		   console.log(rawRecords)
			return { 
				...state,
				fetching: {
					...state.fetching,
					[pageNo]: false,
				},
				records:{
					...state.records,
					...rawRecords
				},
				ids: {
					...state.ids,
					[pageNo]: pageIds
				},
				totalElements: payload.totalElements
			};
			
		case FETCH_POST_FAILED:
			return {
				...state,
				fetching: {
					...state.fetching,
					[pageNo]: false,
				},
				error: action.payload,
			};
		default:
			return state;
	}
};

export default PostReducers
