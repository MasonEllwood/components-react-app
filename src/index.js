import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail author="fartname1"/>
            <CommentDetail author="fartname2"/>
            <CommentDetail author="fartname3"/>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));