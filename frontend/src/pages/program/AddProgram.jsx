import React, { Fragment, useState } from 'react';
import { Stepper, Step } from 'react-form-stepper';

import StepOne from "./steps/StepOne";
import StepTwo from "./steps/StepTwo";
import StepThree from "./steps/StepThree";

import PageTitle from '../../components/PageTitle'

const AddProgram = () => {
    const [goSteps, setGoSteps] = useState(1);

    return (
        <Fragment>
            <PageTitle activeMenu={"Ajouter un programme"} motherMenu={"Programme"} />
                <div className="row">
                    <div className="col-xl-12 col-xxl-12">
                        <div className="card">
                            <div className="card-body">							
                                <div className="form-wizard ">
                                    <Stepper className="nav-wizard" activeStep={goSteps}>
                                        <Step className="nav-link" onClick={() => setGoSteps(1)} />
                                        <Step className="nav-link" onClick={() => setGoSteps(2)} />
                                        <Step className="nav-link" onClick={() => setGoSteps(3)} />
                                    </Stepper>
                                {goSteps === 1 && (
                                    <>
                                        <StepOne />	
                                        <div className="text-end toolbar toolbar-bottom p-2">
                                            <button className="btn btn-primary sw-btn-prev disabled me-1">Préc</button>
                                            <button  className="btn btn-primary sw-btn-next" onClick={() => setGoSteps(2)}>Suiv</button>
                                        </div>	
                                    </>
                                )}
                                {goSteps === 2 && (
                                    <>
                                        <StepTwo />
                                        <div className="text-end toolbar toolbar-bottom p-2">
                                            <button  className="btn btn-secondary sw-btn-prev me-1" onClick={() => setGoSteps(1)}>Préc</button>
                                            <button className="btn btn-primary sw-btn-next ms-1" onClick={() => setGoSteps(3)}>Suiv</button>
                                        </div>	
                                    </>
                                )}
                                {goSteps === 3 && (
                                    <>
                                        <StepThree />
                                        <div className="text-end toolbar toolbar-bottom p-2">
                                            <button  className="btn btn-secondary sw-btn-prev me-1" onClick={() => setGoSteps(2)}>Préc</button>
                                            <button className="btn btn-primary sw-btn-next ms-1 disabled"  >Suiv</button>
                                        </div>	
                                    </>
                                )}
                               
                                </div>
                            </div>
                        </div>
                    </div>
			</div>
		
        </Fragment>
    );
};

export default AddProgram;