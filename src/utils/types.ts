export type TableData = {
  id: string;
  Title: string;
  Body: string;
  Author: string;
  Views: number;
  CreatedAt: string;
  Joke: string;
};

export type JokeData = Omit<TableData, "id" | "Body" | "CreatedAt">;

export type TableColumns = {
  path: string;
  label: string;
  content?: (joke: TableData) => JSX.Element;
};
