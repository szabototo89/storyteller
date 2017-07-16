import * as React from "react";
import { EpicProperties } from "storyboard/epic/epicProperties";

type State = {
  isEdited?: boolean;
};

export const epicContainer = (
  EpicComponent: React.StatelessComponent<EpicProperties>
) =>
  class EpicContainer extends React.Component<EpicProperties, State> {
    constructor(props: EpicProperties) {
      super(props);
      this.state = {
        isEdited: props.isEdited
      };
    }

    handleSelected = (...args: Array<any>) => {
      const { onSelected } = this.props;

      onSelected && onSelected(...args);

      this.setState(() => ({
        isEdited: true
      }));
    };

    render() {
      const { isEdited } = this.state;
      return (
        <EpicComponent
          {...this.props}
          isEdited={isEdited}
          onSelected={this.handleSelected}
        />
      );
    }
  };
