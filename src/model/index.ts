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

export type SeichiDate = {
  data: Seichi[];
  error: any;
  isLoading: boolean;
}

export type TitleData = {
  data: Title[];
  error: any;
  isLoading: boolean;
}

export type AsyncData = SeichiDate & TitleData