//Import the React and ReactDom libraries
import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
//Create a react component
const App =  function(){
  return (
        <div className="ui container comments">
                 <CommentDetail/>
                 <CommentDetail/>
                 <CommentDetail/>
                 <CommentDetail/>
        </div>
  );
};

//Take the react component and show it on the screen

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);