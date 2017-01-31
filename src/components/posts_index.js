import React, { Component } from 'react';

class PostsIndex extends Component {
  // react will call this automactically whenever our component is ABOUT to be
  // rendered to the DOM for the first time. It will be only called once!
  componentWillMount() {
    console.log('this would be a great time to call an action creator to fetch posts');
  }

  render(){
    return (
      <div>List of blogposts</div>
    );
  }
}

export default PostsIndex;

// export default () => {
//   return <div>List of blogposts</div>;
// };
