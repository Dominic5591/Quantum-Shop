import csrfFetch from "./csrf";

export const RECEIVE_SEARCH = 'search/RECEIVE_SEARCH';

export const receiveSearch = (results) => ({
  type: RECEIVE_SEARCH,
  results,
});

export const fetchSearch = (params) => async (dispatch) => {
  const res = await csrfFetch(
    `/api/products/search?q=${params.query}&category=${params.category}`
  );

  if (res.ok) {
    const searchData = await res.json();
    dispatch(receiveSearch(searchData));
  }
};


const searchReducer = (state = {}, action) => {
  switch (action.type) {
  case RECEIVE_SEARCH:
    return action.results;
  default:
    return state;
  }
};

export default searchReducer;


