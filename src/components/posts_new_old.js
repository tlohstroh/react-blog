import _ from 'lodash';
import React, { Component, PropTypes } from 'react';
// reduxFrom is almost identical to connect from react-redux
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';
import { Link } from 'react-router';

class PostsNew extends Component {
  // "Hey I want access to this router propprty
  // please go check through all of my parents until you find it,
  // and assign in to this.context.router inside of the Component."
  static contextTypes = {
    router: PropTypes.object
  };

  // onsubmit takes propperties from the FORM!
  onSubmit(props){
    this.props.createPost(props)
      .then(() => {
        // blogpost has been created, navigate the user to the index
        // We navigate by calling this.context.router.push with the
        // new path to navigate to.
        this.context.router.push('/')
        // NOTE this can also be done simply with history.push('/')!!!
        // no contextTypes needed......
      });
  }

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
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <h3>Create A New Post</h3>
        <div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''}`}>
          <label>Title</label>
          <input type="text" className="form-control" {...title}/>
          <div className="text-help">
            {title.touched ? title.error : ''}
          </div>
        </div>

        <div className={`form-group ${categories.touched && categories.invalid ? 'has-danger' : ''}`}>
          <label>Categories</label>
          <input type="text" className="form-control" {...categories}/>
          <div className="text-help">
            {categories.touched ? categories.error : ''}
          </div>
        </div>

        <div className={`form-group ${content.touched && content.invalid ? 'has-danger' : ''}`}>
          <label>Content</label>
          <textarea className="form-control" {...content}/>
          <div className="text-help">
            {content.touched ? content.error : ''}
          </div>
        </div>

        <button type="submit" className="btn btn-primary">Sumbit</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
    );
  }
}

function validate(values){
  const errors = {};

  if (!values.title){
    errors.title = 'Enter a title';
  }
  if (!values.categories){
    errors.categories = 'Enter categories';
  }
  if (!values.content){
    errors.content = 'Enter some content';
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
