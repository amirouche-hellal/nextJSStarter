import Axios from "axios";
import Link from "next/link";
import React, { Fragment } from "react";
import Layout from "../../components/layout/layout";




function Blog({ data }) {
  

  const posts = data.map(post =>{

    
      return(
        <Fragment key={post.id}>

            <h2>
                <Link href={"blog/[id]"} as={`blog/${post.id}`} passHref>
                {post.title}
                </Link>
            </h2>
        </Fragment>
      )
      
    
    
  })
  return (
    <Layout namePage = "blog">
      <h1>Cette page utilise getStaticProps</h1>

      {posts}
    </Layout>
  );
}

export const getStaticProps = async (context) => {

 
  const { data } = await Axios.get(
    `${process.env.NEXT_PUBLIC_API_POST}/posts`
  );

  return {
    props: {
      data,
    },
  };
};

export default Blog;
