import React from "react";
import { connect } from "react-redux";
import { fetchStream } from "../../actions";

class StreamShow extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }
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
    const { title, description } = this.props.stream;
    return (
      <div>
        <h1>{title}</h1>
        <h5>{description}</h5>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};
export default connect(mapStateToProps, { fetchStream })(StreamShow);
