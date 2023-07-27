export interface IUser {
  avatar_url: string;
  name: string;
  bio: string;
}

export interface IOwner {
  avatar_url: string;
  url: string;
  followers_url: string;
}

export interface IData {
  id: string;
  name: string;
  owner: IOwner;
  url: string;
  language: string;
}
