import axios from "axios";

export const FILTER_COMBINATION = "FILTER_COMBINATION";
export const FILTER_COMBINATIONGENRES = "FILTER_COMBINATIONGENRES";
export const GET_GENRES = "GET_GENRES";
export const GET_DETAILS = "GET_DETAILS";
export const GET_TOP_12 = "GET_TOP_12";
export const GET_FILTER_GENRES = "GET_FILTER_GENRES";
export const REFRESH_STATE = "REFRESH_STATE";
export const GET_TEN_GAMES = "GET_TEN_GAMES";
export const GET_ALL_GAMES = "GET_ALL_GAMES";
export const GET_FILTER_12_SLICE = "GET_FILTER_12_SLICE";

export const filterCombination = (payload) => {
  return {
    type: FILTER_COMBINATION,
    payload,
  };
};
export const filterCombinationGenres = (payload) => {
  return {
    type: FILTER_COMBINATIONGENRES,
    payload,
  };
};

export const getGenres = () => {
  return async function (dispatch) {
    try {
      const resGenre = await axios.get(`http://localhost:3001/genre`);
      const genre = resGenre.data;
      return dispatch({
        type: GET_GENRES,
        payload: genre,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getDetails = (id) => {
  return async function (dispatch) {
    try {
      const resDetails = await axios.get(`http://localhost:3001/detail/${id}`);
      const details = resDetails.data;
      return dispatch({
        type: "GET_DETAILS",
        payload: details,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getTenGames = () => {
  return async function (dispatch) {
    try {
      const games = await axios.get(
        `http://localhost:3001/filtered?type=random`
      );
      const res = games.data;
      return dispatch({
        type: GET_TEN_GAMES,
        payload: res,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getTop12 = () => {
  return async function (dispatch) {
    try {
      const games = await axios.get(
        `http://localhost:3001/filtered?type=top12`
      );
      const res = games.data;
      return dispatch({
        type: GET_TOP_12,
        payload: res,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const filterGenres = (genreFilter) => {
  return async function (dispatch) {
    try {
      const games = await axios.get(
        `http://localhost:3001/genre/${genreFilter}`
      );
      const response = games.data;
      return dispatch({
        type: GET_FILTER_GENRES,
        payload: response,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getAllGames = () => {
  return async function (dispatch) {
    try {
      const games = await axios.get(`http://localhost:3001/filtered?type=all`);
      const res = games.data;
      return dispatch({
        type: GET_ALL_GAMES,
        payload: res,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const setRefreshUpdate = () => {
  return {
    type: REFRESH_STATE,
  };
};

export const slice12Games = () => {
  return async function (dispatch) {
    try {
      const games = await axios.get(`http://localhost:3001/filtered?type=all`);
      const res = games.data.slice(48,60);
      return dispatch({
        type: GET_FILTER_12_SLICE,
        payload: res,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
