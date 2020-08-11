//Import the React and ReactDom libraries
import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './AprovalCard';
//Create a react component
const App =  function(){
  return (
        <div className="ui container comments">
            <ApprovalCard>
                 <CommentDetail
                     img= {faker.image.avatar()} 
                     author="Sam" 
                     timeAgo="Today at 4:45PM" 
                     comment = "Nice blog post!"
                 />
            </ApprovalCard>

            <ApprovalCard>
                 <CommentDetail 
                     img= {faker.image.avatar()} 
                     author="Alex" 
                     timeAgo="Today at 2:00AM" 
                     comment = "HAHAHA So hilarious!"
                 />
            </ApprovalCard>
            
            <ApprovalCard>
                 <CommentDetail 
                     img= {faker.image.avatar()}  
                     author="Jane" 
                     timeAgo="Yesterday at 5:00PM" 
                     comment = "LMAO!"
                 />
            </ApprovalCard>
        </div>
  );
};

//Take the react component and show it on the screen

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);