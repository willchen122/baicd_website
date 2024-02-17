import React from "react";

const BlogPost = (props) => {  

    return (
        <div>
            <b>"{props.title}" by {props.author} {props.date}</b>
            <div>{props.text}</div>
            <br />
            <br />

        </div>
    );
};
 
export default BlogPost;