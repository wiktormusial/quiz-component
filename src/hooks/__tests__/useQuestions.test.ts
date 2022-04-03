import { useQuestions } from "../useQuestions";
import { questionsList } from "../../data/questionsList";

test("should return a question", () => {
    const response = useQuestions(questionsList)
    expect(response).not.toBeUndefined()
})

test("should return a question with title", () => {
    const response = useQuestions(questionsList)
    expect(response.title).not.toBeUndefined()
})
