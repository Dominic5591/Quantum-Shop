import csrfFetch from './csrf';
// import { fetchOrders } from './order';


const SET_USER = "session/setUser";
export const REMOVE_USER = "session/removeUser";

const setUser = (user) => {
  return {
    type: SET_USER,
    payload: user,
  };
};

export const removeUser = () => {
  return {
    type: REMOVE_USER,
  };
};




const storeCSRFToken = response => {
  const csrfToken = response.headers.get("X-CSRF-Token");
  if (csrfToken) sessionStorage.setItem("X-CSRF-Token", csrfToken);
};

export const restoreSession = () => async dispatch => {
  const response = await csrfFetch("/api/session");
  storeCSRFToken(response);
  const data = await response.json();
  dispatch(setUser(data.user));
  return response;
};

export const login = ({ credential, password }) => async dispatch => {
  const response = await csrfFetch("/api/session", {
    method: "POST",
    body: JSON.stringify({ credential, password }),
  });

  if (response.ok) {
    const data = await response.json();
    dispatch(setUser(data.user));

  } else {
    throw response;
  }

  return response;
};


export const signup = (user) => async (dispatch) => {
  const { username, email, password } = user;
  const response = await csrfFetch("/api/users", {
    method: "POST",
    body: JSON.stringify({
      username,
      email,
      password,
    }),
  });
  const data = await response.json();
  dispatch(setUser(data.user));
  return response;
};

export const logout = () => async (dispatch) => {
  const response = await csrfFetch("/api/session", {
    method: "DELETE",
  });
  dispatch(removeUser());
  return response;
};


export const fetchTotalPages = async () => {
  try {
    const response = await fetch("/api/pagination-metadata");
    const data = await response.json();
    return data.totalPages;
  } catch (error) {
    console.error("Failed to fetch total pages:", error);
    return null;
  }
};


const initialState = { user: null };

const sessionReducer = (state = initialState, action) => {
  console.log(state);
  
  switch (action.type) {
  case SET_USER:
    console.log(action.payload);
    
    return { ...state, user: action.payload };
  case REMOVE_USER:
    return { ...state, user: null };
  default:
    return state;
  }
};

export default sessionReducer;
