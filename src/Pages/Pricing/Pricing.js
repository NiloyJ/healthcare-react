import React from 'react';
import './Pricing.css'
const Pricing = () => {
    return (
        <div style={{ marginTop: '5%' }}>
            <h1>Check our pricing</h1>
            <section class="pricing py-5">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-4">
                            <div class="card mb-5 mb-lg-0">
                                <div class="card-body">
                                    <h5 class="card-title text-muted text-uppercase text-center">Free</h5>
                                    <h6 class="card-price text-center">$0<span class="period">/month</span></h6>
                                    <hr />
                                    <ul class ="fa-ul">
                                    <li><span class ="fa-li"><i class ="fas fa-check"></i></span>Free lecture on mental health</li>
                                    <li><span class ="fa-li"><i class ="fas fa-check"></i></span>1 free report of any deseas(if you refer)</li>
                                    <li><span class ="fa-li"><i class ="fas fa-check"></i></span>Free advise on keeping body fit</li>
                                    <div class ="d-grid">
                                    <a href="#" class ="btn btn-primary text-uppercase">Button</a>
                                    </div>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4">
                            <div class="card mb-5 mb-lg-0">
                                <div class="card-body">
                                    <h5 class="card-title text-muted text-uppercase text-center">Plus</h5>
                                    <h6 class="card-price text-center">$9<span class="period">/month</span></h6>
                                    <hr />
                                    <ul class="fa-ul">
                                       
                                        <li><span class="fa-li"><i class="fas fa-check"></i></span>2 1:1 counselling session</li>
                                        <li><span class="fa-li"><i class="fas fa-check"></i></span>2 speech therapy checkup</li>
                                        <li><span class="fa-li"><i class="fas fa-check"></i></span>Tips for good health</li>
                                        <li><span class="fa-li"><i class="fas fa-check"></i></span>Discount on other healthcare service</li>

                                    </ul>
                                    <div class="d-grid">
                                        <a href="#" class="btn btn-primary text-uppercase">Button</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title text-muted text-uppercase text-center">Pro</h5>
                                    <h6 class="card-price text-center">$49<span class="period">/month</span></h6>
                                    <hr />
                                    <ul class="fa-ul">
                
                                       
                                        <li><span class="fa-li"><i class="fas fa-check"></i></span>10 1:1 physical and mental therapy</li>
                                        <li><span class="fa-li"><i class="fas fa-check"></i></span>5 free ambulance service</li>
                                        <li><span class="fa-li"><i class="fas fa-check"></i></span>4 Doctor care</li>
                                        <li><span class="fa-li"><i class="fas fa-check"></i></span>Heavy discount on other medical facilities</li>
                                       
                                    </ul>
                                    <div class="d-grid">
                                        <a href="#" class="btn btn-primary text-uppercase">Button</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Pricing;