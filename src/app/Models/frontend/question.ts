
import { Choice } from "./choice";
export interface Question {
    choices: Choice[];
    questionId: number;
    questionDescription: string;
    suggestion: string;
}
