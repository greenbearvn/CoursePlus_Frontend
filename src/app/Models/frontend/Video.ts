import { Test } from "./Test";
export interface Video {
    videoId: number;
    videoName: string;
    videoContent: string;
    videoLink: string;
    videoDuration: string;
    lessionId: number;
    tests: Test[];
}