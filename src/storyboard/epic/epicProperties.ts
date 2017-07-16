import { Story } from "models/story";
import { BasicEventHandler } from "utils/eventHandler";

export type EpicProperties = {
  isEdited?: boolean;
  content?: string;
  stories?: Array<Story>;
  onSelected?: BasicEventHandler;
};
