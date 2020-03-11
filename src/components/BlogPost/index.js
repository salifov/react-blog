import React from 'react';
import './style.css';
import Card from '../UI/Card';

export default function BlogPost() {
    return (
        
            <div className="blogPostContainer">
                <Card>
                    <div className="blogHeader">
                        <span className="blogCategory">Featured</span>
                        <h1 className="postTitle">Beautiful</h1>
                        <span className="postedBy">posted on july 17th</span>
                    </div>
                    <div className="postImageContainer">
                        <img src={require('../../blogPostImages/memories-from.jpg')} alt="Post image"></img>
                    </div>
                </Card>
            </div>
        
    );
}
