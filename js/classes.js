class Admin 
{
    constructor(username,password,type)
    {
        this.username = username;
        this.password = password;
        this.type = "ADMIN"; 
    }


}

class Secretary
{
    constructor(name, username, password,StudentList,ClassList, type)
    {
        this.name = name;
        this.username = username;
        this.password = password;
        this.StudentList = new Array(Student); 
        this.ClassList = new Array(Classroom); 
        this.type = "SECRETARY"; 
    }


}

class Teacher
{
    constructor(name,username,password,type)
    {
        this.name = name; 
        this.username = username; 
        this.password = password;
        this.type = "TEACHER"; 
    }

}

class SupplyTeacher
{
    constructor(name,username,password,type)
    {
        this.name = name; 
        this.username = username; 
        this.password = password;
        this.type = "SUPPLYTEACHER"; 
    }

}

class Parent
{

    constructor(username, password, name, email,type)
    {
        this.username = username; 
        this.password = password; 
        this.name = name; 
        this.email = email;
        this.type = "PARENT";  
    }


}

class Classroom
{
    constructor(name,teacher, timeinterval,StudentList)
    {
        this.name = name; 
        this.teacher = new Teacher();
        this.timeinterval = timeinterval;
        this.StudentList = new Array(Student);

    }


}

//this is just a single entry within the major attendance sheet
class AttendanceEntry
{
    constructor(StudentName,className, date, studentStatus)
    {
        this.className = className; 
        this.StudentName = StudentName; 
        this.date = new Date();
        this.studentStatus = false;  

    }
    

}

//attendance which teacher fills out for their classes 
class ClassAttendance
{
    constructor(ListAttendances)
    {
        this.ListAttendances = new Array(AttendanceEntry); 

    }

}


class Student 
{
    constructor(name,Stdid,classes, attendanceList) 
    {
      this.name = name;
      this.Stdid = Stdid;
      this.classes = new Array(Classroom); 
      this.attendanceList = new Array(Attendance)
    }
}



