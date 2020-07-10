import {
    GET_SCHOOLS,
    SCHOOLS_ERROR,
    GET_SCHOOLS_BY_RADIUS,
    GET_SCHOOLS_BY_RADIUS_ERROR,
    GET_SCHOOLS_BY_RATING_AND_FOUNDED,
    GET_SCHOOLS_BY_RATING_AND_FOUNDED_ERROR,
} from '../actions/types';

const initialState = {
    count: 0,
    pagination: {},
    schoolData: [],
    isAuthenticated: false,
    loading: true,
};

export default (state = initialState, action) => {
    const { type, payload } = action;
    // console.log(payload);
    switch (type) {
        case GET_SCHOOLS:
        case GET_SCHOOLS_BY_RADIUS:
        case GET_SCHOOLS_BY_RATING_AND_FOUNDED:
            return {
                ...state,
                count: payload.count,
                pagination: payload.pagination,
                schoolData: payload.data,
                loading: false,
            };
        case SCHOOLS_ERROR:
        case GET_SCHOOLS_BY_RADIUS_ERROR:
        case GET_SCHOOLS_BY_RATING_AND_FOUNDED_ERROR:
            return {
                ...state,
                loading: false,
            };
        default:
            return state;
    }
};