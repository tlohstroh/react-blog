import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router';

class PostsIndex extends Component {
  // 80 react will call this automactically whenever our component is ABOUT to be
  // rendered to the DOM for the first time. It will be only called once!
  componentWillMount() {
    console.log('this would be a great time to call an action creator to fetch posts');
    this.props.fetchPosts();
  }

  renderPosts() {
    return this.props.posts.map((post) => {
      return (
        <li className="list-group-item" key={post.id}>
          <Link to={"posts/" + post.id}>
            <span className="pull-xs-right">{post.categories}</span>
            <strong>{post.title}</strong>
          </Link>
        </li>
      );
    });
  }

  render(){
    return (
      <div>
        <div className="text-xs-right">
          <Link to="/posts/new" className="btn btn-primary" >
            Add a post
          </Link>
        </div>
        <h3>Posts</h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts.all };
}

// REFACTOR:
// function mapDispatchToProps(dispatch){
//   return bindActionCreators({ fetchPosts }, dispatch);
// }

// first arg to a connect function is usually mapStateToProps
// In this case we don't have that function (yet) so we'll pass in null.
// export default connect ( null, mapDispatchToProps)(PostsIndex);
export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
// This gives us acces to this.props.fetchPosts,
// so we can now call it inside of component


// Delete the entire mapDispatchToProps function and instead just pass in an object that says
// { fetchPosts: fetchPosts }
// Whit this does it's just a shortcut! It'still going to give us access to
// this.props.fetchPosts inside of our component.
//
