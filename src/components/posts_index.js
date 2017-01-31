import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPosts } from '../actions/index';

class PostsIndex extends Component {
  // 80 react will call this automactically whenever our component is ABOUT to be
  // rendered to the DOM for the first time. It will be only called once!
  componentWillMount() {
    console.log('this would be a great time to call an action creator to fetch posts');
    this.props.fetchPosts();
  }

  render(){
    return (
      <div>List of blogposts</div>
    );
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ fetchPosts }, dispatch);
}

// first arg to a connect function is usually mapStateToProps
// In this case we don't have that function (yet) so we'll pass in null.
export default connect ( null, mapDispatchToProps)(PostsIndex);
// This gives us acces to this.props.fetchPosts,
// so we can now call it inside of component
