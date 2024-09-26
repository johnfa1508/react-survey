/* eslint-disable react/prop-types */
// Components don't need to be separeted into individual files
// Here we have a smaller component that helps compose the AnswersItem below

const answersSet = {
  swimming: "Swimming",
  bathing: "Bathing",
  chatting: "Chatting",
  noTime: "I don't like to spend time with it"
};

function ItemsList({ list }) {
  return (
    <ul>
      {list.map((item, index) => (
        <li key={index}>{answersSet[item]}</li>
      ))}
    </ul>
  );
}

// This is the main component being exported from this file
export default function AnswersItem({
  // Feel free to change this props names to what suits you best
  // Rememeber here we're destructuring answerItem, which is the prop name that we've passed
  answerItem: { id, name, radioButton, checkBox, textBox }, handleEdit
}) {
  return (
    <li key={id}>
      <article className="answer">
        <h3>{name || "Anon"} said:</h3>
        <p>
          <em>How do you rate your rubber duck colour?</em>
          <span className="answer__line">{radioButton}</span>
        </p>
        <p>
          <em>How do you like to spend time with your rubber duck?</em>
          <ItemsList list={checkBox} />
        </p>
        <p>
          <em>What else have you got to say about your rubber duck?</em>
          <span className="answer__line">{textBox}</span>
        </p>
        {/* 
          TODO: 
                IMPLEMENT onClick. DONE
                Send ID to Survey.jsx ? DONE
                Update surveyFormData-state based on id DONE
                When user submits, check if id already exists in answersList?
                If it does update that specific answer
                If not just submit normally
        */}
        <button className="form__submit" onClick={() => handleEdit(id)}>EDIT</button>
      </article>
    </li>
  );
}
