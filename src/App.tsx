import React from 'react';
import Data from './friendsList.json';

function App() {
  return (
    <div>
      <h1>I'm new here</h1>
      <div>
        {Data.map((post) => {
          return (
            <div key={post.id}>
              <h1> {post.title} </h1>
              <p> {post.socialHandle} </p>
              <img src={post.imageUrl} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
