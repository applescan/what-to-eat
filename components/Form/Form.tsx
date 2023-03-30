import React, { ChangeEvent, FC, FormEvent, useState } from "react";

import { Button } from "../Button";
import { TextInput } from "./TextInput";
import { Title } from "./Title";
import { formData } from "./FormData";

const Form: FC = () => {
  const [answer, updateAnswer] = useState<string>("");
  const [answerList, updateAnswerList] = useState<string[]>([]);
  const [step, setStep] = useState<number>(1);

  const { title, questionList, subTitle } = formData;

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();

    if (String(answer).trim().length) {
      updateAnswer("");
      updateAnswerList([...answerList, answer]);
      setStep(step + 1);
    }
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { value } = e.target;

    updateAnswer(value.trim());
  };

  const handleClick = (e: FormEvent<HTMLInputElement>): void => {
    handleSubmit(e);
  };

  return (
    <div>
      <Title fontSize={48} label={title} />
      {answerList.length >= questionList.length && (
        <div>
          <Title fontSize={24} label={subTitle} />
          {answerList.map((answer, k) => {
            return (
              <div key={k}>
                <Title fontSize={18} label={questionList[k]} />
                <div>
                  <i>{answer}</i>
                </div>
              </div>
            );
          })}
        </div>
      )}
      {answerList.length < questionList.length && (
        <form onSubmit={handleSubmit}>
          <Title fontSize={24} label={`Question ${step}`} />
          <div>{questionList[step - 1] || ""}</div>
          <TextInput type="text" value={answer} change={handleChange} />

          <Button
            type="submit"
            click={handleClick}
            label="Next"
            disabled={!answer.length}
          />
        </form>
      )}
    </div>
  );
};

export { Form };