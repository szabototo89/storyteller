import * as React from "react";
import { Epic } from "models/epic";
import { EventHandler } from "utils/eventHandler";

type ReactComponent<Props> =
  | React.ComponentClass<Props>
  | React.StatelessComponent<Props>;

type BaseProperties = {
  onEpicSelected?: EventHandler<Epic>;
  selectedEpic?: Epic;
};

export function epicListBoxContainer<Properties extends BaseProperties>(
  Component: ReactComponent<Properties>
) {
  return class EpicListBoxContainer extends React.Component<Properties, any> {
    constructor(props: Properties) {
      super(props);

      this.state = {
        selectedEpic: props.selectedEpic
      };
    }

    handleEpicSelected = (epic: Epic) => {
      this.setState(() => ({
        selectedEpic: epic
      }));
    };

    render() {
      const { selectedEpic } = this.state;

      return (
        <Component
          {...this.props}
          selectedEpic={selectedEpic}
          onEpicSelected={this.handleEpicSelected}
        />
      );
    }
  };
}
