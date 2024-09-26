/* eslint-disable react/prop-types */
import AnswersItem from "./AnswersItem";

export default function AnswersList({ answersList, handleEdit }) {
  console.log("Inside AnswersList: ", answersList);

  // const { answersList } = props;

  return (
    <ul>
      {answersList.map((answerItem) => (
        <AnswersItem answerItem={answerItem} handleEdit={(id) => handleEdit(id)} key={answerItem.id} />
      ))}
    </ul>
  );
}
