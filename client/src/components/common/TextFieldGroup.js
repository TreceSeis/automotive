import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

const TextFieldGroup = ({
  name,
  placeholder,
  value,
  label,
  error,
  info,
  type,
  onChange,
  disabled
}) => {
  return (
    <div
      className={classnames("form-group", {
        "has-danger": error
      })}
    >
      <div className="input-group input-group-alternative mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text">
            <i className="fas fa-user" />
          </span>
        </div>

        <input
          className={classnames("form-control", {
            "is-invalid": error
          })}
          placeholder={placeholder}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          disabled={disabled}
        />
      </div>
      {info && <small className="form-text text-muted">{info}</small>}
      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}
    </div>
  );
};

TextFieldGroup.PropTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  label: PropTypes.string,
  error: PropTypes.string,
  info: PropTypes.string,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.string.isRequired,
  disabled: PropTypes.string
};

TextFieldGroup.defaultProps = {
  type: "text"
};

export default TextFieldGroup;
