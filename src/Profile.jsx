import React from 'react'
import ReactDOM from 'react-dom'
import ProfileImage from './assets/profile.jpg'
import About from './About'


export default function Profile () {
    return (
        <div className='profile'>
            <img 
                className="profile-image" 
                src={ProfileImage} 
                alt="Prince Biney in a yellow striped shirt smiling." 
            />
            <div className='profile-text-container'>
                <h1 className='profile-name'>Prince E. Biney</h1>
                <p className='profile-job-title'>Frontend Developer</p>
                <p className='profile-website'>pbineydummywebsite.com</p>
                <div className='profile-links-container'>
                    <a href="#" className='btn btn-light'><i class="fa-solid fa-envelope"></i> Email</a>
                    <a href="https://www.linkedin.com/in/biney-prince-b77298197/" className='btn btn-dark'><i class="fa-brands fa-linkedin"></i> LinkedIn</a>
                </div>
            </div>
        </div>
    )
}