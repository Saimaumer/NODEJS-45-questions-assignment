//They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

interface itCourse{
    courseName: string;
    location: string;
    onSiteStudents : number
}

let itCourse ={
    courseName : "typescript and python",
    location : "Governor House",
    onSiteStudents :50000

};
console.log (itCourse)