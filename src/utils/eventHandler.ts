export type BasicEventHandler = () => void;
export type EventHandler<Self> = (sender: Self) => void;