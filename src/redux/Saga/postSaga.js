import { getPostsFail, getPostsSuccess } from '../actions/PostActions';
import { all, call, put, select, takeLatest } from "redux-saga/effects";
import { FETCH_POST_REQUEST } from '../constants/PostConstants';
import { fetchAPI } from '../API';



function* fetchPosts (action) {
	const {payload: {pageNo}} = action;
	try {
		let apiUrl = `/Data/page${pageNo}.json`;
		const data = yield call(fetchAPI,apiUrl,"get");
		yield put(getPostsSuccess(data));
	} catch (error) {
		yield put(getPostsFail({error: error.message }));
	}
};

function*  fetchPostsSaga () {
    yield takeLatest(FETCH_POST_REQUEST ,fetchPosts)
}
export default fetchPostsSaga
