import React from 'react';

function Commercials () {
    return (
        <React.Fragment>
            <Commerce />
        </React.Fragment>
    );
}

const Commerce = () => {
    return (
        <div className="container">
            <div className="row row-content">
                <div className="col">
                </div>
            </div>
        <div className="video">
                    <iframe width="530" height="285" src="https://www.youtube.com/embed/l08Ufpl2V6k" frameborder="0" 
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                    </iframe>

                    <iframe width="530" height="285" src="https://www.youtube.com/embed/XXRmcxI6IEE" frameborder="0" 
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                    </iframe>

                    <iframe width="530" height="285" src="https://www.youtube.com/embed/i_l4KBJhDCA" frameborder="0" 
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                    </iframe>

                    <iframe width="530" height="285" src="https://www.youtube.com/embed/4Wl1XqUtvR0" frameborder="0" 
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                    </iframe>
        </div>
    </div>

    );
}

export default Commercials;