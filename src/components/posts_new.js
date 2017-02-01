import React, { Component } from 'react';
// reduxFrom is almost identical to connect from react-redux
import { reduxForm } from 'redux-form';

class PostsNew extends Component {
  render(){
    return(
      <form>
        <h3>Create A New Post</h3>
        <div className="form-group">
          <label>Title</label>
          <input type="text" className="form-control" />
        </div>

        <div className="form-group">
          <label>Categories</label>
          <input type="text" className="form-control" />
        </div>

        <div className="form-group">
          <label>Content</label>
          <input type="textarea" className="form-control" />
        </div>

        <button type="submit" className="btn btn-primary">Sumbit</button>

      </form>
    );
  }
}

// wrap PostsNew in reduxForm:
export default reduxForm({
  // "letter to reduxForm"
  // Hey reduxForm, you are in charge now of a form called PostNewForm
  // Keep track of these input fields : title, categories and content!
  form: 'PostNewForm',
  fields: ['title', 'categories', 'content']
})(PostsNew);
