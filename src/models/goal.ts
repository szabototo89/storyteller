import Story from "./story";

type Goal = {
  id: number;
  title: string;
  stories: Array<Story>;
}

export default Goal;
