export type Seichi = {
  id: string;
  work: string;
  work_id: string;
  place: string;
  prefecture: string;
  address: string;
  latitude: string;
  longitude: string;
};

export type Title = {
  work_id: string;
  work: string;
};

export type Fallback = {
  [url: string]: Seichi | Title;
};

export type FetchFunc<T> = (url: string) => {
  data: T[] | undefined;
  error: Error | undefined;
  isLoading: boolean;
};

export type FetchData<T> = () => {
  data: T[] | undefined;
  error: Error | undefined;
  isLoading: boolean;
};
