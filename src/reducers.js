import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_ISPENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED,
} from "constants";

const initialStateSearch = { searchField: "" };

export const searchRobots = (state = initialStateSearch, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return { ...state, searchField: action.payload };
    default:
      return state;
  }
};

const initialStateFetch = {
  isPending: false,
  robots: [],
  error: "",
};

export const fetchRobots = (state = initialStateFetch, action = {}) => {
  switch (action.type) {
    case REQUEST_ROBOTS_ISPENDING:
      return { ...state, isPending: true };
    case REQUEST_ROBOTS_SUCCESS:
      return { ...state, isPending: false, robots: action.payload };
    case REQUEST_ROBOTS_FAILED:
      return { ...state, isPending: false, error: action.payload };
    default:
      return state;
  }
};
