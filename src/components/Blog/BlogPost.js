import React from "react";

const BlogPost = (props) => {  
    let cleanedText;
    if (props.text.charAt(0) === '\"') {
        // If the text string contains quotes, remove them by taking the substring starting from index 1 (opening quotation mark)
        // and continuing until 4 indices ("END" + closing quotation mark) before the end of the string
        cleanedText = props.text.substring(1, (props.text.length)- 4);
    } else {
        // Else, only remove the last 3 letters -- "END"
        cleanedText = props.text.substring(0, (props.text.length)- 3);
    }

    return (
        <div>
            <div className="blogPost"><b>"{props.title}" by {props.author} {props.date}</b></div>
            
            <pre><div className="blogText">{cleanedText}</div></pre>
            <br />
            <br />

        </div>
    );
};
 
export default BlogPost;