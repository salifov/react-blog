import React from 'react';
import './style.css';
import Card from '../UI/Card';

export default function Sidebar() {
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
                    <div className="recentPost">
                        <h3>Post Title</h3>
                        <span>July 23, 2029</span>
                    </div>
                </div>
            </Card>
        </div>
        
    );
}
