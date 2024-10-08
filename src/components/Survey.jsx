/* eslint-disable react/prop-types */
import { useState } from "react";
import AnswersList from "./AnswersList";
import Form from "./Form";

function Survey() {
  // eslint-disable-next-line no-unused-vars
  const [open, setOpen] = useState(false); //Ignore this state
  const [surveyFormData, setSurveyFormData] = useState({
    id: null,
    radioButton: "",
    checkBox: [],
    textBox: "",
    name: "",
    email: "",
  })
  const [answersList, setAnswersList] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault()

    if (surveyFormData.id) {
      setAnswersList((prevList) =>
        prevList.map((item) =>
          item.id === surveyFormData.id ? surveyFormData : item
        )
      )
    } else {
      const newAnswer = { ...surveyFormData, id: answersList.length + 1 }
      setAnswersList((prevList) => [...prevList, newAnswer])
    }
    
    setSurveyFormData({
      id: null,
      radioButton: "",
      checkBox: [],
      textBox: "",
      name: "",
      email: "",
    })
  }

  const handleChange = (event) => {
    const { name, type, value, checked } = event.target;

    if (type === "checkbox") {
      setSurveyFormData((prevState) => {
        const updatedCheckBox = checked
          ? [...prevState.checkBox, value]
          : prevState.checkBox.filter((item) => item !== value)
        return { ...prevState, checkBox: updatedCheckBox }
      });
    } else if (type === "radio") {
      setSurveyFormData({ ...surveyFormData, radioButton: value })
    } else {
      setSurveyFormData({ ...surveyFormData, [name]: value })
    }
  }

  const handleEdit = (id) => {
    const answerToEdit = answersList.find((answer) => answer.id === id)

    setSurveyFormData(answerToEdit)
  }

  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        {/* answers should go here */}
        <AnswersList answersList={answersList} handleEdit={(id) => handleEdit(id)}/>
      </section>

      <section className="survey__form">
        <Form 
          handleSubmit={(event) => handleSubmit(event)} 
          handleChange={(event) => handleChange(event)} 
          formData={surveyFormData}
        />
      </section>
    </main>
  );
}

export default Survey;
