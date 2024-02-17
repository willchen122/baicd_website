import React from "react";

const BlogPost = (props) => {  

    const styles = {
        // aboutText: {
        //     marginLeft: "15%",
        //     marginRight: "15%",
        //     textAlign: "justify",

        // },
        // inputText: {
        //   padding: "10px",
        //   color: "red",
        // },
        // banner:{
        //     marginLeft: "15%",
        //     marginRight: "15%",

        // }
      };
      const author = "author_name"; 
      const date = "day_month_year";
      const blogText = "lots of text lorem ipsum something I don't know what I am doing please send help";


    return (
        <div>

            <div>{author}</div>

            <div>{date}</div>

            <div>{blogText}</div>
            <br />
            <br />
        

        </div>
    );
};
 
export default BlogPost;