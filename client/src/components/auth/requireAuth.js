import React, { Component } from "react";
import { connect } from "react-redux";
import { browserHistory } from "react-router";

export default ComposedComponent => {
  class Authentication extends Component {
    static contextTypes = {
      router: React.PropTypes.object
    };

    componentWillMount() {
      if (!this.props.authenticated) this.context.router.push("/signin");
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.authenticated) this.context.router.push("/signin");
    }

    render() {
      return <ComposedComponent {...this.props} />;
    }
  }

  const mapStateToProps = (state) => ({ authenticated: state.auth.authenticated });

  return connect(mapStateToProps)(Authentication);
};
