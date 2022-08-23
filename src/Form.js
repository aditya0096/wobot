import React from 'react'
import './Form.css'
import image from './logo.png';

function Form() {
  return (
    <div className="body">
        <div className="head">
            <img src={image} alt="logo" width="50" height="50"/>
            <h2>It’s a delight to have you onboard</h2>
            <p>Help us know you better</p>
            <p>(This is how we optimize Wobot as per your business needs)</p>
        </div>
        <div className="company">
            <label >Company Name</label>
            <input type="text"></input>
        </div>
        <div className="industry">
            <label >Industry</label>
            <select id="industry" name="industry">
                <option value="australia">Software</option>
                <option value="canada">Health Care</option>
            </select>
        </div>
        <div className="company-size">
             <fieldset>
                <legend>Company Size</legend>
                <button class="size" type="button" >1-20</button>
                <button class="size"type="button" >21-50</button>
                <button class="size" type="button" >51-200</button>
                <button class="size"type="button" >201-500</button>
                <button class="size" type="button">500+</button>
            </fieldset>
        </div>
        <button id="register" type="submit" name="Register">Get Started</button>
    </div>
  )
}

export default Form
