export interface Answer {
    answer: string,
    isCorrect: boolean
}

export interface Question {
    title: string,
    answers: Answer[]
}

export interface QuestionsList {
    questions: Question[]
}