/* eslint-disable react/prop-types */
function CheckBoxes({ handleChange, formData }) {
    return (
      <>
        {/* This is a checkboxes group */}
        <ul>
          <li>
            <label>
              <input name="spend-time" type="checkbox" value="swimming" onChange={handleChange} checked={formData.checkBox.includes("swimming")}/>Swimming
            </label>
          </li>
  
          <li>
            <label>
              <input name="spend-time" type="checkbox" value="bathing" onChange={handleChange} checked={formData.checkBox.includes("bathing")}/>Bathing
            </label>
          </li>
  
          <li>
            <label>
              <input name="spend-time" type="checkbox" value="chatting" onChange={handleChange} checked={formData.checkBox.includes("chatting")}/>Chatting
            </label>
          </li>
  
          <li>
            <label>
              <input name="spend-time" type="checkbox" value="noTime" onChange={handleChange} checked={formData.checkBox.includes("noTime")}/>I don't like to spend time with it
            </label>
          </li>
        </ul>
      </>
    )
  }

export default CheckBoxes;