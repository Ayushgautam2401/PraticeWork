import { getPostsFail, getPostsSuccess } from '../actions/PostActions';
import { all, call, put, select, takeLatest } from "redux-saga/effects";
import { FETCH_POST_REQUEST } from '../constants/PostConstants';
import { fetchAPI } from '../API';



function* fetchPosts ({callback,pageNo=1}) {
	try {
		let apiUrl = `/Data/page${pageNo}.json`;
		const data = yield call(fetchAPI,apiUrl);
		console.log("data<>>",data);
		callback(data?.records);
		yield put(getPostsSuccess({payload:data}));
	} catch (error) {
		yield put(getPostsFail({  payload: error.message }));
		console.log(error.message);
	}
};

function*  fetchPostsSaga () {
    yield takeLatest(FETCH_POST_REQUEST ,fetchPosts)
}
export default fetchPostsSaga
