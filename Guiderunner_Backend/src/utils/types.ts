export type CreateAccountParams = {
    username: string;
    email: string;
    password: string;
} 
export type UpdateAccountParams = {
    username: string;
    email: string;
    password: string;
}
export type CreateGameParams = {
    gamename: string;
    release: number;
    genre: string;
    platform: string;
    developer: string;
    description: string;
    image: string;
}
export type UpdateGameParams = {
    gamename: string;
    release: number;
    genre: string;
    platform: string;
    developer: string;
    description: string;
    image: string;
}
export type CreateNewsParams = {
  gamename: string;
  title: string;
  content: string;
  source: string;
  date: string;
}
export type UpdateNewsParams = {
    gamename: string;
    title: string;
    content: string;
    source: string;
    date: string;
}

export type CreateRecordParams = {
    username: string;
    gamename: string;
    time: string;
    platform: string;
    difficulty: string;
    youtubelink: string;
  }
  export type UpdateRecordParams = {
    username: string;
    gamename: string;
    time: string;
    platform: string;
    difficulty: string;
    youtubelink: string;
  }