import {
  GET_EVENTS_FAIL,
  GET_EVENTS_REQUEST,
  GET_EVENTS_SUCCESS,
  GET_EVENT_FAIL,
  GET_EVENT_REQUEST,
  GET_EVENT_SUCCESS,
  CREATE_EVENT_FAIL,
  CREATE_EVENT_REQUEST,
  CREATE_EVENT_SUCCESS,
} from "./eventsTypes";

export const eventsReducer = (state = { events: [] }, action) => {
  switch (action.type) {
    // fetch multiple events
    case GET_EVENTS_REQUEST:
      return { ...state, loading: true };

    case GET_EVENTS_SUCCESS:
      return { ...state, loading: false, events: action.payload.events };

    case GET_EVENTS_FAIL:
      return { ...state, loading: false, error: action.payload };

    // get single event
    case GET_EVENT_REQUEST:
      return { ...state, loading: true };

    case GET_EVENT_SUCCESS:
      return { ...state, loading: false, singlePost: action.payload };

    case GET_EVENT_FAIL:
      return { ...state, loading: false, error: action.payload };

    // create
    case CREATE_EVENT_REQUEST:
      return { ...state, loading: true };

    case CREATE_EVENT_SUCCESS:
      return { ...state, loading: false, success: action.payload };

    case CREATE_EVENT_FAIL:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};
