import {
  SET_SERIES_DATA_LIST,
  SET_SERIES_DATA_LIST_LOADING,
  SET_SERIES_DATA_LIST_ERROR,
  SET_SELECTED_SERIES_DATA,
  SET_SELECTED_SERIES_DATA_LOADING,
  SET_SELECTED_SERIES_DATA_ERROR,
  GET_SELECTED_SERIES_DATA,
} from './actionTypes';

// Initial State inside global state
export interface MainComponentState {
  seriesDataList: {
    loading: boolean,
    error : string,
    data: Array<SeriesListResponse>,
  },
  selectedSeriesData: {
    loading: boolean,
    error : string,
    data: SelectedSeriesResponse,
  },
}

export interface SeriesListResponse {
  title: string,
  episode_id: number,
  opening_crawl: string,
  director: string,
  producer: string,
  release_date: string,
  characters: Array<string>,
  planets: Array<string>,
  starships: Array<string>,
  vehicles: Array<string>,
  species: Array<string>,
  created: string,
  edited: string,
  url: string,
}

export interface SelectedSeriesResponse {
    Title: string,
    Year: number,
    Rated: string,
    Released: string,
    Runtime: string,
    Genre: string,
    Director: string,
    Writer: string,
    Actors: string,
    Plot: string,
    Language: string,
    Country: string,
    Awards: string,
    Poster: string,
    Ratings: Array<string>,
    Metascore: string,
    imdbRating: string,
    imdbVotes: number,
    imdbID: string,
    Type: string,
    totalSeasons: string,
    Response: string
}


export interface IGetSelectedSeriesDataPayload {
  title: string,
  year: string | number,
}

export type IGetSelectedSeriesDataSaga = {
  type: typeof GET_SELECTED_SERIES_DATA;
  payload: IGetSelectedSeriesDataPayload;
};

export type MainComponentActionTypes = {
  type: typeof SET_SERIES_DATA_LIST | typeof SET_SERIES_DATA_LIST_LOADING | typeof SET_SERIES_DATA_LIST_ERROR | typeof SET_SELECTED_SERIES_DATA | typeof SET_SELECTED_SERIES_DATA_LOADING | typeof SET_SELECTED_SERIES_DATA_ERROR;
  payload: boolean | string | MainComponentState;
};

export type MainComponentActions = MainComponentActionTypes | IGetSelectedSeriesDataSaga;
