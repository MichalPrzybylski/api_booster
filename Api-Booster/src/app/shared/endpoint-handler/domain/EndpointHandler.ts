import {Observable} from "rxjs/Observable";

export type QueryStatements =  { [paramName: string]: string };
type DefaultIdTypes = string | number;

export interface InputResourceFlow <T, K = DefaultIdTypes> {
  find(id:K, query?: QueryStatements): Observable<T>;
  filter(query: QueryStatements): Observable<T[]>;
}

export interface OutputResourceFlow <T>  {
  add(resource: T): Observable<T>;
  replace(resource: T): Observable<T>;
  remove(resource: T): Observable<T>;
  change?(resource: T): Observable<T>;
}

export interface ResourceFlow <T, K = DefaultIdTypes> extends InputResourceFlow <T, K>, OutputResourceFlow<T> {}
