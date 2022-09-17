import * as actions from '../constants/PostConstants';
import { forEach ,map} from 'lodash';
const initialState = {
	totalElements:30,
	// posts:[],
	feching:{
		"0":false,
		"1":false,
		"2":false
	},
	ids:[],
	records:[]
};

export const PostReducers = (state = initialState, action) => {
	switch (action.type) {
		case actions.FETCH_POST_REQUEST:
			return {
				...state,
				// fetching:{
				// 	0:false
				// }
			};
		case actions.FETCH_POST_SUCCESS:
			console.log(action.payload,"action payload");
            // const raw ={}
			// forEach(posts, (item) => {
            //     raw[posts.id] = item;
            // });
			return {
				...state,
				loading: false,
				posts: action.payload.posts,
				records:action?.payload?.records
				// ids: map(data, "id")
			};
		case actions.FETCH_POST_FAILED:
			return {
				...state,
				loading: false,
				error: action.payload,
			};
		default:
			return state;
	}
};
