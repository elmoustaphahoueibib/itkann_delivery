import React, {useContext} from 'react';
import AppContext from '../Context';

const Justificatif = () => {
    const myContext = useContext(AppContext);
    const updateContext = myContext.userDetails;

    const next = () => {
        if (updateContext.userPhoto == null) {
            console.log('Please select your Photo')
        }else if(updateContext.userPermis == null){
            console.log('please upload your permis')
        } else if (updateContext.issueDate == null) {
            console.log('Plese enter your license issue date')
        } else if (updateContext.userAssurance == null) {
            console.log('Please fill your company name')
        } else if(updateContext.userCardId) {
            console.log('Please fill your card id')
        } else (updateContext.setStep(updateContext.currentPage + 1))
    };

    return (
        <div className="contain">
            <p>Enter your details</p>
            <div className="formContain">
                <form className="form">
                    <label htmlFor="user pic">
                        Votre Photo de profile

                        <input className="formInput" type="file" placeholder="User Pic" onChange={e => updateContext.setPhoto(e.target.value)} required/>
                    </label>
                      <label htmlFor="permis">
                          Date de votre permis
                          <br/>
                          <input className="formInput" type="date" placeholder="License Issue" onChange={e => updateContext.setIssue(e.target.value)} required/>
                      </label>
                    <label htmlFor="photo de permis">
                        Ajouter votre permis
                        <input className="formInput" type="file" placeholder="Permis" onChange={e => updateContext.setPermis(e.target.value)} required/>
                    </label>
                    <label htmlFor="photo de permis">
                        Assurance
                        <br />
                        <input className="formInput" type="file" placeholder="Assurance" onChange={e => updateContext.setCardId(e.target.value)} required/>
                    </label>

                    <label htmlFor="card id">
                        Card Id
                        <br/>
                        <input className="formInput" type="file" placeholder="Car Id" onChange={e => updateContext.setAssurance(e.target.value)} required/>
                    </label>

                    <div className="multipleButtons">
                        <button className="multipleButton" value="Previous" type="button" onClick={() => updateContext.setStep(updateContext.currentPage - 1)}>Previous </button>
                        <button className="multipleButton" value="Next" type="button" onClick={next}>Next </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Justificatif;
