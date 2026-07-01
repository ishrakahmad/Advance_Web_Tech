import { Injectable } from '@nestjs/common';

@Injectable()
export class CourseService {

    // Shob course return korbe
    getAllCourses() {
        return {
            message: 'All courses fetched',
            data: [],
        };
    }

    // ID diye specific course khujbe
    getCourseById(id: string) {
        return {
            message: 'Course fetched',
            id,
        };
    }

    // Notun course create korbe
    createCourse(name: string, code: string) {
        return {
            message: 'Course created',
            data: {
                name,
                code,
            },
        };
    }
}