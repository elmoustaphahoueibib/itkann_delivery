import React, {useContext} from 'react';
import AppContext from '../Context';
import logoGold from '../../assets/itkann_cercle_goldtrans.svg';


const ThankYou = () => {

    const myContext = useContext(AppContext);
    const updateContext = myContext.userDetails;

    const name = updateContext.userName;

    const finish = () => {
        console.log(updateContext);
    }
    return (
        <div className="contain">
            <p>Successfully Submitted</p>
            <p>Thanks for {name} your details</p>
            <br/>
            <img className="done"  src={logoGold} alt="successful"  style={{ width: "100px" }}/>
            <button className="doneSubmit" onClick={finish}>Done</button>
        </div>
    );
};

export default ThankYou;
