import React from 'react';

const About = () => {
    return (
        <div id='about' className='mt-5 container' style={{marginBottom: "20px"}}>
            <br/>
            <h1 className='text-center'>About Us</h1>
            <br/>
            <div className="row row-content mb-2">
            <div className="col-12 col-sm-6 ">
                <p>"Dream House" is the only property solutions provider in Bangladesh. We cater to the needs of those seeking real estate services, with a promise to make property search, renting & buying easier than ever. We offer the easiest platform that enables anyone to buy, rent or sell properties in the country.</p>
                <p> Our investors are some of the top names from the global property portal industry, who operate highly successful ventures across the world, such as SeLoger.com, the largest and most successful property portal in France. </p>
            </div>
            <div className="col-12 col-sm-6">
                <div className="card">
                    <h3 className="card-header bg-warning ">Facts At a Glance</h3>
                    <div className="card-body">
                        <dl className="row">
                            <dt className="col-6">Started</dt>
                            <dd className="col-6">3 Feb. 1983</dd>
                            <dt className="col-6">Branches</dt>
                            <dd className="col-6">7</dd>
                            <dt className="col-6">Operating in </dt>
                            <dd className="col-6">4 countries</dd>
                            <dt className="col-6">Handled property</dt>
                            <dd className="col-6">20716</dd>
                            
                            
                        </dl>
                    </div>
                </div>
            </div> 

            </div> 
            <br></br>
            <br></br>
            <br></br>
        </div>
    );
};

export default About;