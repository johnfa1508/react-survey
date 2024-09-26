/* eslint-disable react/prop-types */
import CheckBoxes from "./Checkboxes";
import RadioButtons from "./RadioButtons";

function Form({ handleSubmit, handleChange, formData }) {
    return (
      <>
        <form className="form" onSubmit={handleSubmit}>
            <h2>Tell us what you think about your rubber duck!</h2>
            <div className="form__group radio">
              <h3>How do you rate your rubber duck colour?</h3>
              {/* Radio inputs go here */}
              <RadioButtons handleChange={(event) => handleChange(event)} formData={formData} />
            </div>
  
            <div className="form__group">
              <h3>How do you like to spend time with your rubber duck</h3>
              {/* checkboxes go here */}
              <CheckBoxes handleChange={(event) => handleChange(event)} formData={formData}/>
            </div>
            
            <label>What else have you got to say about your rubber duck?
              <textarea 
                name="textBox" 
                cols="30" 
                rows="10" 
                onChange={handleChange} 
                value={formData.textBox}
              ></textarea>
            </label>
  
            <label>Put your name here (if you feel like it):
              <input 
                type="text" 
                name="name" 
                onChange={handleChange} 
                value={formData.name} 
              />
            </label>
        
            <label>Leave us your email pretty please??
              <input 
                type="email" 
                name="email" 
                onChange={handleChange} 
                value={formData.email} 
              />
            </label>
            
            <input className="form__submit" type="submit" value="Submit Survey!"/>
          </form>
      </>
    )
  }

export default Form;