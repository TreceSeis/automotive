import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import TextFieldGroup from "../common/TextFieldGroup";

class Register extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.registerUser(newUser, this.props.history);
  }

  render() {
    const { errors } = this.state;
    return (
      <main>
        <section className="section section-shaped section-lg my-0">
          <div className="shape shape-style-1 bg-gradient-default">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <div className="container pt-lg-md">
            <div className="row justify-content-center">
              <div className="col-lg-5">
                <div className="card bg-secondary shadow border-0">
                  <div className="card-header bg-white pb-5">
                    <div className="text-muted text-center mb-3">
                      <small>Sign up with</small>
                    </div>
                    <div className="text-center">
                      <Link to="/" className="btn btn-neutral btn-icon mr-4">
                        <span className="btn-inner--icon">
                          <i className="fab fa-github" />
                        </span>
                        <span className="btn-inner--text">GitHub</span>
                      </Link>
                      <Link to="/" className="btn btn-neutral btn-icon">
                        <span className="btn-inner--icon">
                          <i className="fab fa-google" />
                        </span>
                        <span className="btn-inner--text">Google</span>
                      </Link>
                    </div>
                  </div>
                  <div className="card-body px-lg-5 py-lg-5">
                    <div className="text-center text-muted mb-4">
                      <small>Or sign up with credentials</small>
                    </div>
                    <form noValidate onSubmit={this.onSubmit}>
                      <TextFieldGroup
                        placeholder="Name"
                        name="name"
                        type="text"
                        value={this.state.name}
                        onChange={this.onChange}
                        error={errors.name}
                      />
                      <TextFieldGroup
                        placeholder="Email"
                        name="email"
                        type="email"
                        value={this.state.email}
                        onChange={this.onChange}
                        error={errors.email}
                      />
                      <TextFieldGroup
                        placeholder="Password"
                        name="password"
                        type="password"
                        value={this.state.password}
                        onChange={this.onChange}
                        error={errors.password}
                      />
                      <TextFieldGroup
                        placeholder="Confirm Password"
                        name="password2"
                        type="password"
                        value={this.state.password2}
                        onChange={this.onChange}
                        error={errors.password2}
                      />
                      <div className="text-center">
                        <button type="submit" className="btn btn-primary mt-4">
                          Create account
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }
}

Register.PropTypes = {
  auth: PropTypes.object.isRequired,
  registerUser: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));
