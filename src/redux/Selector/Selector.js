export const getPageState =  (pageNo) => (state) => {
    const {fetching, ids, records} = state.postReducers;
    console.log(state.postReducers);
    return {
        fetching: fetching[pageNo],
        ids: ids[pageNo],
        records
    } 
}