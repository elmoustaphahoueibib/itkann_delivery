import React, {useState} from 'react';
import AppContext from './Context';
import PersonalInfo from './forms/PersonalInfo';
import Otp from './forms/otp';
import CarInfo from './forms/carInfo';
import Justificatif from './forms/justificatif';
import ThankYou from './forms/thankYou';
import ProgressBar from './ProgressBar';

const StepForm = () => {

    const [step, setStep] = useState(0);
    const [name, setName] = useState(null);
    const [lastname, setLastName] = useState(null);
    const [email, setEmail] = useState(null);
    const [phone, setPhone] = useState(null);
    const [photo, setPhoto] = useState(null);
    const [permisPic, setPermis] = useState(null);
    const [cardId, setCardId] = useState(null);
    const [nni, setNni] = useState(null);
    const [otp, setOTP] = useState(null);
    const [brand, setBrand] = useState(null);
    const [model, setModel] = useState(null);
    const [year, setYear] = useState(null);
    const [value, setValue] = useState(null);
    const [dob, setDOB] = useState(null);
    const [issue, setIssue] = useState(null);
    const [assurance, setAssurance] = useState(null);

    const userDetails = {
        currentPage: step,
        userName: name,
        lastname: lastname,
        userMail: email,
        userPhone: phone,
        userNni: nni,
        userPhoto: photo,
        userPermis: permisPic,
        userCardId: cardId,
        userOTP: otp,
        vehBrand: brand,
        userVehicle: model,
        vehYear: year,
        vehValue: value,
        userDOB: dob,
        issueDate: issue,
        userAssurance: assurance,
        setName,
        setLastName,
        setEmail,
        setPermis,
        setCardId,
        setPhone,
        setNni,
        setPhoto,
        setStep,
        setOTP,
        setBrand,
        setModel,
        setYear,
        setValue,
        setDOB,
        setIssue,
        setAssurance,
    };

    return (
        <AppContext.Provider value={{userDetails}}>
            <div className="main">
                <div className="body">
                    <div className="wrapper">
                        <ProgressBar />
                        {step === 0 && <PersonalInfo /> }
                        {step === 1 && <Otp /> }
                        {step === 2 && <CarInfo /> }
                        {step === 3 && <Justificatif /> }
                        {step === 4 && <ThankYou /> }
                    </div>
                </div>
            </div>
        </AppContext.Provider>
    );
};

export default StepForm;