import { Question } from "./question";
export interface Test {
    testId: number;
    testName: string;
    teacherId: number;
    videoId: number;
    questions: Question[];
}
