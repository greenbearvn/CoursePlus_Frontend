import { Course } from "./Course";
import { Profile } from "./Profile";
import { Level } from "./Level";
import { DetailCategory } from "./DetailCategory";
import { Lesson } from "./Lesson";

export interface CourseData {
    courses: Course;
    profile: Profile;
    levels: Level;
    detailCate: DetailCategory;
    lessionRes: Lesson[];
}