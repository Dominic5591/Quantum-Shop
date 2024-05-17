import { createSelector } from "reselect";
import csrfFetch from "./csrf";

export const RECEIVE_SEARCH_RESULTS = "products/RECEIVE_SEARCH_RESULTS";
export const RECEIVE_SEARCH_RESULT = "products/RECEIVE_SEARCH_RESULT";




export const receiveSearchResults = (results) => ({
  type: RECEIVE_SEARCH_RESULTS,
  results,
});

export const receiveSearchResult = (result) => ({
  type: RECEIVE_SEARCH_RESULT,
  result,
});


const selectSearchResultState = (state) => state.search;

console.log(selectSearchResultState);

export const selectSearchResultsArray = createSelector(
  [selectSearchResultState],
  (searchResults) => {
    if (!searchResults.results) return []; // Return an empty array if searchResults is undefined or null
    return Object.values(searchResults.results);
  }
);



// export const selectSearchResultById = (resultId) =>
//   createSelector([selectSearchResults], (results) =>
//     results.find((result) => result.id === resultId)
//   );



export const fetchSearchResults = (query, category, page = 1) => async (dispatch) => {
  const res = await csrfFetch(
    `/api/products/search?q=${query}&category=${category}&page=${page}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const searchData = await res.json();
  dispatch(receiveSearchResults(searchData));
};

export const fetchSearchResult = (productId) => async (dispatch) => {
  const res = await fetch(`/api/products/${productId}`);
  const searchData = await res.json();
  dispatch(receiveSearchResult(searchData));
};

const searchReducer = (state = {}, action) => {


  switch (action.type) {
  case RECEIVE_SEARCH_RESULTS: {
    console.log(action.results);
    return {
      ...state,
      ...action.results,
    };
  }
  case RECEIVE_SEARCH_RESULT: {
    console.log(action.result);
    return {
      ...action.result,
    };
  }
  default:
    return state;
  }
};

export default searchReducer;
