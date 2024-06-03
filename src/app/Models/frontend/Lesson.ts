import { Video } from "./Video";

export interface Lesson {
    lessionId: number;
    lessionName: string;
    lessionDuration: string;
    courseId: number;
    videos: Video[];
}