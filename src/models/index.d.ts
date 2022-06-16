import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type SeatArrangementMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type BookingsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type MoviesMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class SeatArrangement {
  readonly id: string;
  readonly pvr?: string | null;
  readonly inox?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<SeatArrangement, SeatArrangementMetaData>);
  static copyOf(source: SeatArrangement, mutator: (draft: MutableModel<SeatArrangement, SeatArrangementMetaData>) => MutableModel<SeatArrangement, SeatArrangementMetaData> | void): SeatArrangement;
}

export declare class Bookings {
  readonly id: string;
  readonly place?: string | null;
  readonly time?: string | null;
  readonly seats?: string | null;
  readonly movie?: string | null;
  readonly movieImage?: string | null;
  readonly date?: string | null;
  readonly totalSeats?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Bookings, BookingsMetaData>);
  static copyOf(source: Bookings, mutator: (draft: MutableModel<Bookings, BookingsMetaData>) => MutableModel<Bookings, BookingsMetaData> | void): Bookings;
}

export declare class Movies {
  readonly id: string;
  readonly title?: string | null;
  readonly thumbnail?: string | null;
  readonly rating?: string | null;
  readonly description?: string | null;
  readonly formats?: string | null;
  readonly cast?: string | null;
  readonly languages?: string | null;
  readonly trailerLink?: string | null;
  readonly shows?: string | null;
  readonly information?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Movies, MoviesMetaData>);
  static copyOf(source: Movies, mutator: (draft: MutableModel<Movies, MoviesMetaData>) => MutableModel<Movies, MoviesMetaData> | void): Movies;
}