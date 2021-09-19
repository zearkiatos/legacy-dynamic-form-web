import React, { Component, PropTypes } from "react";
import { keys, each, map } from "lodash";
import { reduxForm } from "redux-form";
import { Link } from "react-router";
import { postActions } from "../../actions";

const FIELDS = {
  title: {
    type: "input",
    label: "Title for Post"
  },
  categories: {
    type: "input",
    label: "Enter some categories for this post",
  },
  content: {
    type: "textarea",
    label: "Post Contents",
  },
};

class PostsNew extends Component {
  static contextTypes = {
    router: PropTypes.object,
  };

  onSubmit(props) {
    this.props.createPost(props).then(() => {
      this.context.router.push("/");
    });
  }

  renderField(fieldConfig, field) {
    const fieldHelper = this.props.fields[field];

    return (
      <div
        className={`form-group ${
          fieldHelper.touched && fieldHelper.invalid ? "has-danger" : ""
        }`}
      >
        <label>{fieldConfig.label}</label>
        <fieldConfig.type
          type="text"
          className="form-control"
          {...fieldHelper}
        />
        <div className="text-help">
          {fieldHelper.touched ? fieldHelper.error : ""}
        </div>
      </div>
    );
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit((props) => this.onSubmit(props))}>
        <h3>Create A New Post</h3>
        {map(FIELDS, this.renderField.bind(this))}
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <Link to="/" className="btn btn-danger">
          Cancel
        </Link>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};

  each(FIELDS, (type, field) => {
    if (!values[field]) {
      errors[field] = `Ènter a ${field}`;
    }
  });

  return errors;
}

export default reduxForm(
  {
    form: "PostsNew",
    fields: keys(FIELDS),
    validate,
  },
  null,
  { createPost: postActions.createPost }
)(PostsNew);
