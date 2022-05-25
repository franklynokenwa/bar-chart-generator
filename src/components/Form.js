import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom';
import Data from '../styles/Form.module.css'


const Form = () => {
    
const [formData, setFormData] = useState({
    emailAddress:"", 
    password:"", 
    confirmPassword:"", 
    fullName:"" ,
    phoneNumber:"",
    isChecked:""

});

const[formErrors, setFormErrors] = useState({})

const navigate = useNavigate();

const error = {
    emailError: "",
    passwordError:"",
    confirmPasswordError:"",
    phoneNumberError:""
}


const handleChange = (event) => {
    const {name,value, type, checked} = event.target
    
    setFormData( prevFormData => {
        return {
            ...prevFormData,
            [name]: type === "checkbox" ? checked : value
        }
    })    
}

const validateForm= (values) => {
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const phoneRegex = /^\+(?:[0-9] ?){6,14}[0-9]$/;

    if(!emailRegex.test(values.emailAddress)){
        error.emailError = "The email address is not a valid email address"
    }
    if((values.password < 6 || values.password === "" || values.password === null)){
        error.passwordError = "The password should not be empty or less than 6"
    }
    if(values.password !== values.confirmPassword){
        error.confirmPasswordError = "The password does not match"
    }
    if(!phoneRegex.test(values.phoneNumber)){
        error.phoneNumberError = "The phone number is not a valid phone number"
    }
    if((formErrors.emailError === "" && formErrors.confirmPasswordError === "" && formErrors.phoneNumberError === "") ){
        navigate('/chart');
    }

    return error
}

const submitForm = (event)=>{
    event.preventDefault();
    console.log(formData);
    setFormErrors(validateForm(formData));

}
console.log(formErrors);


  return (
    <div className={Data.container}>
        <h2>Create an account</h2>
        <form onSubmit={submitForm}>
            <div>
                <label htmlFor="email">Your email address</label> <br/>
                <input 
                    type="email" 
                    id="email"
                    name="emailAddress"
                    onChange={handleChange}
                    value={formData.emailAddress}
                />
                <p className={Data.form__error}>{formErrors.emailError}</p>
            </div>
            <div>
                <label htmlFor="password">Your password</label><br/>
                <input 
                    type="password" 
                    id="password"
                    name="password"
                    onChange={handleChange}
                    value={formData.password}
                />
                <p className={Data.form__error}>{formErrors.passwordError}</p>
            </div>
            <div>
                <label htmlFor="confirmPassword">Confirm your password</label><br/>
                <input 
                    type="password" 
                    id="confirmPassword"
                    name="confirmPassword"
                    onChange={handleChange}  
                    value={formData.confirmPassword}  
                />
                <p className={Data.form__error}>{formErrors.confirmPasswordError}</p>
            </div>
            <div>
                <label htmlFor="fullName">Your full name</label><br/>
                <input 
                    type="text" 
                    id="fullName"
                    name="fullName"
                    onChange={handleChange}
                    value={formData.fullName}
                />
            </div>
            <div>
                <label htmlFor="phoneNumber">Your phone number</label><br/>
                <input 
                    className={Data.form__input_phoneNumber} 
                    type="tel" 
                    id="phoneNumber"
                    name="phoneNumber"
                    onChange={handleChange}
                    value={formData.phoneNumber}
                />
                <p className={Data.form__error}>{formErrors.phoneNumberError}</p>
            </div>
            <div className={Data.form__input__container}>
                <input 
                    className={Data.form__input_checkbox} 
                    type="checkbox"
                    name="isChecked"
                    id="isChecked"
                    onChange={handleChange}
                    value={formData.isChecked}
                />
                <label htmlFor="isChecked">I have and agreed terms and conditions</label>
            </div><br/><br/>
                <button className={Data.form__input_submit}>Create and account</button>
            
        </form>
    </div>
  )
}

export default Form