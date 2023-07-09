import React from 'react'
import user from "./images/features/user-friendly.png"
import customisation from "./images/features/customisation.png"
import save from "./images/features/save-online.png"
import preview from "./images/features/preview.png"
import manage from "./images/features/manage.png"
import template from "./images/features/template.png"


function Features() {
    return (
        <div className='features' >
            <div className='title' >
                <h1>Our Core Feature</h1>
                <p> "Build, Edit, and Download Resumes That Make a Lasting Impression"</p>
            </div>
            <div className='feature' >
                <div className='feature-box' >
                    <div className='image' >
                        <img src={user} alt="" />
                    </div>
                    <div className='box-text' >
                        <h2>User-Friendly</h2>
                        <p> "Effortlessly Create Professional Resumes with Our Intuitive and User-Friendly Platform"</p>
                    </div>
                </div>
                <div className='feature-box' >
                    <div className='image' >
                        <img src={customisation} alt="" />
                    </div>
                    <div className='box-text' >
                        <h2>Personalize Your Resume</h2>
                        <p> "Unleash Your Creativity and Make a Lasting Impression with Customizable Fonts, Colors, Layouts, and Sections"</p>
                    </div>
                </div>
                <div className='feature-box' >
                    <div className='image' >
                        <img src={save} alt="" />
                    </div>
                    <div className='box-text' >
                        <h2>Save-Online</h2>
                        <p>"Safely Preserve and Update Your Resume Information with Easy Accessibility"</p>
                    </div>
                </div>
                <div className='feature-box' >
                    <div className='image' >
                        <img src={preview} alt="" />
                    </div>
                    <div className='box-text' >
                        <h2>Dynamic Previews</h2>
                        <p>Instantly preview your resume as you make changes, allowing you to visualize the final result in real-time.</p>
                    </div>
                </div>
                <div className='feature-box' >
                    <div className='image' >
                        <img src={manage} alt="" />
                    </div>
                    <div className='box-text' >
                        <h2>Section Management</h2>
                        <p> Organize your resume with ease by adding and managing sections such as work experience, education, skills, and more.</p>
                    </div>
                </div>
                <div className='feature-box' >
                    <div className='image' >
                        <img src={template} alt="" />
                    </div>
                    <div className='box-text' >
                        <h2> Template Selection</h2>
                        <p>"Choose from a Variety of Professionally Designed Templates for Your Perfect Resume"</p>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Features