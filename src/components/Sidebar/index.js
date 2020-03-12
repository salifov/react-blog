import React, {useState, useEffect} from 'react';
import './style.css';
import Card from '../UI/Card';
import blogPost from '../../data/blog.json';
import { NavLink } from 'react-router-dom';

export default function Sidebar(props) {

    const [posts,setPosts] = useState([]);

    useEffect(()=>{
        const posts = blogPost.data;
        setPosts(posts);
    }, [posts]);

    return (
        <div className="sidebarContainer">
            <Card style={{marginBottom:'20px', padding:'20px', boxSizing:'border-box'}}>
                <div className="cardHeader">
                    <span>About Us</span>
                </div>
                <div className="profileImg">
                    <img src="https://i.pinimg.com/originals/ca/76/0b/ca760b70976b52578da88e06973af542.jpg" alt="image" ></img>
                </div>
                <div className="cardBody">
                    <p className="personalBio">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
            </Card>
            <Card style={{marginBottom:'20px', padding:'20px', boxSizing:'border-box'}}>
                <div className="cardHeader">
                    <span>Social Network</span>
                    
                </div>
            </Card>
            <Card style={{marginBottom:'20px', padding:'20px', boxSizing:'border-box'}}>
                <div className="cardHeader">
                    <span>Recent Posts</span>
                </div>
                <div className="recentPosts">
                    {posts.map(post=>{
                        return (
                            <NavLink key={post.id} to={`/post/${post.slug}`}>
                                <div className="recentPost">
                                    <h3>{post.blogTitle}</h3>
                                    <span>{post.postedOn}</span>
                                </div>
                            </NavLink>
                        );
                    })}
                    
                </div>
            </Card>
        </div>
        
    );
}
