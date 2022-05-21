import React from 'react'
import Data from '../styles/Form.module.css'

const Form = () => {
  return (
    <div className={Data.container}>
        <h2>Create an account</h2>
        <form>
            <div>
                <label>Your email address</label> <br/>
                <input type="email" />
            </div> <br/>
            <div>
                <label>Your password</label><br/>
                <input type="password" />
            </div> <br/>
            <div>
                <label>Confirm your password</label><br/>
                <input type="password" />
            </div><br/>
            <div>
                <label>Your full name</label><br/>
                <input type="text" />
            </div><br/>
            <div>
                <label>Your phone number</label><br/>
                <input className={Data.form__input_phoneNumber} type="tel" />
            </div><br/>
            <div className={Data.form__input__container}>
                <input className={Data.form__input_checkbox} type="checkbox"/>
                <span>I have and agreed terms and conditions</span>
            </div><br/><br/>
            
            <button className={Data.form__input_submit}>Create and account</button>
        </form>
    </div>
  )
}

export default Form