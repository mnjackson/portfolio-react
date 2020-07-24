import React from 'react';

function Advertisements() {
    return (
        <React.Fragment>
            <Ads />
        </React.Fragment>
    );
}

const Ads = () => {
    return (

        <div className="container">
            <div className="row row-content">
                <div className="col-md-6 col-md-push-6">
      
                </div>
            </div>

        <div className="col-sm-8 mx-auto">
            <div id="adsCarousel" className="carousel slide carousel-fade" data-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="d-block w-100" src="assets/images//UAE/UAE_7.JPG" alt="UAE 7" />
                        <div className="carousel-caption">
                            <h3>Styling</h3>
                            <p>Advertisements</p>
                        </div>
                </div>

                <div className="carousel-item">
                  <img className="d-block w-100" src="assets/images//NFCU/NFCU_2.JPG" alt="NFCU 2" />
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100" src="assets/images//NFCU/NFCU_3.JPG" alt="NFCU 3" />
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100" src="assets/images//UAE/UAE_1.JPG" alt="UAE 1" />
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100" src="assets/images//UAE/UAE_2.JPG" alt="UAE 2" />
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src="assets/images//NFCU/NFCU_1.JPG" alt="NFCU 1" />
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100" src="assets/images//UAE/UAE_5.JPG" alt="UAE 5" />
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100" src="assets/images//UAE/UAE_6.JPG" alt="UAE 6" />
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100" src="assets/images//UAE/UAE_4.JPG" alt="UAE 4" />
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100" src="assets/images//UAE/UAE_8.JPG" alt="UAE 8" />
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100" src="assets/images//UAE/UAE_9.JPG" alt="UAE 9" />
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100" src="assets/images//UAE/UAE_12.JPG" alt="UAE 12" />
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src="assets/images//UAE/UAE_13.JPG" alt="UAE 13" />
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src="assets/images//UAE/UAE_14.JPG" alt="UAE 14" />
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src="assets/images//UAE/UAE_24.JPG" alt="UAE 24" />
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src="assets/images//UAE/UAE_25.JPG" alt="UAE 25" />
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src="assets/images//AMTR/AMTRAK_1.jpg" alt="AM 1" />
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src="assets/images//AMTR/AMTRAK_2.JPG" alt="AM 2" />
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src="assets/images//AMTR/AMTRAK_3.JPG" alt="AM 3" />
                </div>
                <div className="carousel-item">
                <img className="d-block w-100" src="assets/images//UAIS/UA_GiftGuide_1.png" alt="UA GG1" />
                </div>

                    <a className="carousel-control-prev" href="#adsCarousel" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#adsCarousel" role="button" data-slide="next">
                        <span className="carousel-control-next-icon"></span>
                        <span className="sr-only">Next</span>
                    </a>

              </div>
            </div>
        </div>
    </div>


    );

}

export default Advertisements;