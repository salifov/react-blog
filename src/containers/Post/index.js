import React from 'react';
import './style.css';
import BlogPost from '../../components/BlogPost';
import Layout from '../../components/Layout';

export default function Post(props) {

    console.log(props);

    return (
            <Layout>
                <BlogPost {...props}></BlogPost>
            </Layout> 
    );
}
