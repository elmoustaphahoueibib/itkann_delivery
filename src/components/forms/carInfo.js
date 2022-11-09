import React, {useContext} from 'react';
import AppContext from '../Context';

const CarInfo = () => {
    const myContext = useContext(AppContext);
    const updateContext = myContext.userDetails;

    const next = () => {

        if (updateContext.vehBrand == null) {
            console.log('Please enter your Brand')
        } else if(updateContext.userVehicle == null){
            console.log('Please enter your Model')
        } else if (updateContext.vehYear == null) {
            console.log('Enter the value of your Car')
        }
        else (updateContext.setStep(updateContext.currentPage + 1))
    };

    return (
        <div className="contain">
            <p>Enter your vehicle details</p>
            <div className="formContainer">
                <form className="form">
                    <input className="formInput" type="text" placeholder="Marque" onChange={e => updateContext.setBrand(e.target.value)} required/>
                    <input className="formInput" type="text" placeholder="Model" onChange={e => updateContext.setModel(e.target.value)} required/>
                    <label>
                        <select className="formSelect" onChange={e => updateContext.setYear(e.target.value)}>
                            <option >Manufacturing Year</option>
                            <option value="1999">1999</option>
                            <option value="2000">2000</option>
                            <option value="2001">2001</option>
                            <option value="2002">2002</option>
                        </select>
                    </label>

                     <button type="button" className="formSubmit" onClick={next}>Next </button>
                </form>
            </div>
        </div>
    );
};

export default CarInfo;