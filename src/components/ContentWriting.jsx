import React from 'react'
import "./ContentWriting.css"
import Card from "./Card"
import ITImage from "../assets/Media/shoot.jpeg"
const ContentWriting = () => {
    return (
        <div className="it-section">

            {/* <h1 className="it-title">IT</h1> */}

            <div className="it-cards">
                <div className='it-card pop-up'>
                    <Card title="CONTENT WRITING" />
                </div>
                <div className="it-card left">
                    <Card img={ITImage}  //image url
                        title="Engaging Content Creation"   //add title here
                        //write description below
                        des="WWe craft content that not only resonates with your audience but also encourages 
                                interaction and sharing. Our content is customized to align with your brand’s goals 
and values.
Key Features:
• Blogs, Articles, and Website Copy
• Social Media Posts and Campaigns
• Email Marketing Copy
• Product Descriptions "
                    />
                </div>


                <div className="it-card right left">
                    <Card img={ITImage}
                        title="SEO-Optimized Writing"
                        des="We deliver SEO-optimized content that helps your website rank higher in search 
engine results. Our writers use targeted keywords and SEO best practices to 
increase organic traffic and improve search rankings.
Key Features:
• Keyword Research and Integration
• On-Page SEO Optimization
• Content for Landing Pages, Blog Posts, and Product Pages
• Meta Descriptions and Title Tags"
                    />
                </div>

                <div className="it-card left">
                    <Card img={ITImage} title=" Strategic Storytelling" des="We use the power of storytelling to convey your brand’s message in a way that 
captivates and connects with your audience. Our content aims to build emotional 
connections and drive customer loyalty.
Key Features:
• Narrative-Driven Blog Posts and Articles
• Brand Story Creation
• Case Studies and Testimonials
• Long-Form Storytelling for Campaigns and Ads" />
                </div>

                <div className="it-card left">
                    <Card img={ITImage} title="APP DEVELOPMENT" 
                    des="We develop custom mobile applications that offer seamless user experiences across devices. Our apps are designed to meet your specific requirements, ensuring functionality, performance, and scalability." />
                </div>
            </div>

            <h2 className="job-openings-heading">JOB OPENINGS</h2>
            <div className="job-opening-container">
                <div className="job-opening-details">
                    {/* Add job opening information here */}
                </div>
                <div className="job-opening-icons">
                    <i className="share-icon">🔗</i>
                    <i className="heart-icon">❤️</i>
                </div>
            </div>
        </div>
    );
}

export default ContentWriting