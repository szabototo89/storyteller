import { Story } from "./story";

export type Epic = {
  id: string;
  content: string;
  stories: Array<Story>;
};
