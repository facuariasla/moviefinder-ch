export interface MovieQuery {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: [];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: string;
}

export interface MovieSearch {
  Title: string;
  Year: string;
  Poster: string;
  imdbID: string;
  Type: string;
}

export interface SearchData {
  Search?: [];
  totalResults?: string;
  Error?: string;
  Response: string;
}
