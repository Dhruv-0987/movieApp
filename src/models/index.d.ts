import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type MoviesMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
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