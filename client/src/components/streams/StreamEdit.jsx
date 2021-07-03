import React from "react";
import { connect } from "react-redux";
import { fetchStream, editStream } from "../../actions";
import StreamForm from "./StreamForm";
import _ from "lodash";

class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }
  onSubmit = (formValues) => {
    this.props.editStream(this.props.match.params.id, formValues);
  };
  render() {
    if (!this.props.stream) {
      return (
        <div className="ui segment" style={{ height: "100vh" }}>
          <div className="ui active inverted dimmer">
            <div className="ui large text loader">Loading</div>
          </div>
        </div>
      );
    }
    return (
      <div>
        <h3>Edit Stream</h3>
        <StreamForm
          initialValues={_.pick(this.props.stream, "title", "description")}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};
export default connect(mapStateToProps, { fetchStream, editStream })(
  StreamEdit
);
