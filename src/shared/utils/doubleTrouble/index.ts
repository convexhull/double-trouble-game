import { Question, Answer } from '../../types/doubleTrouble';

export const checkAnswer = (question: Question, chosenOption: Answer): boolean => {
    //return true if color of the question matches text of the chosen option
    return question.question.color === chosenOption.text;
}


