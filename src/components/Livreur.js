import React from 'react'
import StepperForm from "./StepperForm";
import {Container, Box, Paper} from "@material-ui/core";



export default function Livreur() {
    return (
        <div className='testimonials' id='livreur'>
            <div className='container'>
                <h2>Livreur</h2>
                <span className='line'></span>
                <div className='content' >
                    <StepperForm />
                </div>
            </div>
        </div>
    )
}
