import { QuestionsList } from "../types/questions"

export const useQuestions = (questionsList: QuestionsList) => {
    const min = Math.ceil(0)
    const max = Math.floor(questionsList.questions.length)

    const randomInt = Math.floor(Math.random() * (max - min) + min)
    
    return questionsList.questions[randomInt]
}