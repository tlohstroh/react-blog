import React, { Component } from 'react';
// reduxFrom is almost identical to connect from react-redux
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';

class PostsNew extends Component {
  render(){
    const { fields: { title, categories, content }, handleSubmit } = this.props;
    // equiv to: const title = this.props.fields.title
    // console.log(title);
    return(
      // the handleSubmit tells reduxForm the user is trying to submit
      // {... title} is destructuring of the object.
      // It destructures the object into its seperate keys and values
      // and passes it into the input!!!
      // So for instance onChange={title.onChange} becomes available..
      <form onSubmit={handleSubmit(this.props.createPost)}>
        <h3>Create A New Post</h3>
        <div className="form-group">
          <label>Title</label>
          <input type="text" className="form-control" {...title}/>
          <div className="text-help">{title.touched ? title.error : ''}</div>
        </div>

        <div className="form-group">
          <label>Categories</label>
          <input type="text" className="form-control" {...categories}/>
        </div>

        <div className="form-group">
          <label>Content</label>
          <textarea className="form-control" {...content}/>
        </div>

        <button type="submit" className="btn btn-primary">Sumbit</button>

      </form>
    );
  }
}

function validate(values){
  const errors = {};

  if (!values.title){
    errors.title = 'Enter a title';
  }

  return errors;
}

// connect: 1st arg is mapStateToProps, 2nd is mapDispatchToProps
// reduxForm: 1st is form confit, 2nd is mapStateToProps, 3rd is mapDispatchToProps


// wrap PostsNew in reduxForm:
export default reduxForm({
  // "letter to reduxForm"
  // Hey reduxForm, you are in charge now of a form called PostNewForm
  // Keep track of these input fields : title, categories and content!
  form: 'PostNewForm',
  fields: ['title', 'categories', 'content'],
  // Hey reduxForm, be sure to use the validate function!
  validate
}, null, { createPost })(PostsNew);

// note: reduxForm is injecting some helpers for us onto this.props inside
// of the component!!
