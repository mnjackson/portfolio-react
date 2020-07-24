import React from 'react';

function About() {
    return (
        <React.Fragment>
            <AboutMe />
        </React.Fragment>
    );
}

const AboutMe = () => {
    return (
        <div className="container" >
                <div className="row">
                    <div className="col-4">
                        <div className="media">
                        <img className="d-flex mr-3 img-thumbnail" src="assets/images/prof/profilepic.JPG" alt="Mel Jackson" />
                        </div>
                    </div>

            <div className="textbox col-8">
                <br />

            <p> 
                Melanie Jackson is an East Coast based Producer & Stylist. 
                Her work in the production industry started as a Merchandise Coordinator for the Under Armour e-commerce 
                studio & quickly evolved into becoming a Producer for high-volume studio photo production for Creative Drive 
                Studios in both Baltimore & NYC. She became freelance in 2019 to pursue styling in the greater Baltimore/DC 
                area & has since been on numerous creative teams as a Wardrobe Stylist & Stylist Assistant for e-commerce & 
                editorial photography sets, commercials, & advertising campaigns

                <br /><br />

                Melanie is a passionate equal rights activist & humanitarian. As we face injustices in our world today, she strives to
                put her effort into projects & organizations that benefit minority groups in need of support & alliance. She prioritizes projects that 
                promote diversity, as well as creative teams dedicated to the support for Black Lives Matter, POC, LGBTQA, Gender Equality, 
                (& many more) with a goal to raise cultural awareness & acceptance. Let's collaborate our talents for the greater good

                <br />

                <span className="rainbow">We are in this together.</span>

                <br />
            </p>
        </div>

                </div>
            </div>
        );
    }


export default About;