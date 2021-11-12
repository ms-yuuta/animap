export type Seichi = {
  id: number;
  work: string;
  place: string;
  latitude: number;
  longitude: number;
};

export type Title = {
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
