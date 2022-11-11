import React, { useContext } from 'react';
import AppContext from '../Context';

const PersonalInfo = () => {
    const myContext = useContext(AppContext);
    const updateContext = myContext.userDetails;

    const next = () => {
        const regex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;

        if (updateContext.userName == null) {
            console.log('Please enter your Name')
        } else if(updateContext.lastname == null){
            console.log('Please enter your last name')
        }
        else if (updateContext.userMail == null || regex.test(updateContext.userMail) !== true) {
            console.log('Please enter your email correctly')
        } else if (updateContext.userPhone == null || updateContext.userPhone.length !== 8 ) {
            console.log('Please enter your phone number correctly')
        } else if (updateContext.userNni == null || updateContext.userNni.length !== 10 ) {
            console.log('Plese enter your nni')
        }
        else (updateContext.setStep(updateContext.currentPage + 1))
    };

    return (
        <div className="contain">
            <p>Entrer vos informations</p>
            <form className="form">
                <input className="formInput" type="text" placeholder="Nom" onChange={e => updateContext.setName(e.target.value)} required={true}/>
                <input className="formInput" type="text" placeholder="Prénom" onChange={e => updateContext.setLastName(e.target.value)} required={true}/>
                <input className="formInput" type="email" placeholder="Email" onChange={e => updateContext.setEmail(e.target.value)} required={true}/>
                <input className="formInput" type="text" placeholder="Numéro" maxLength="8" onChange={e => updateContext.setPhone(e.target.value)}  required={true}/>
                <input className="formInput" type="text" placeholder="Nni" maxLength="10" onChange={e => updateContext.setNni(e.target.value)}  required={true}/>
                <button type="button" className="formSubmit" onClick={next} >Next</button>
            </form>
        </div>
    );
};

export default PersonalInfo;
