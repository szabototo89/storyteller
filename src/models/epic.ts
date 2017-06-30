import { Story } from "models/story";

export type Epic = {
  id: string;
  content: string;
  stories: Array<Story>;
};
