var EmployeeList = [];
var GlobalClassList = [];
var StudentList = [];
var ParentList = [];

class Admin 
{
    constructor(name,username,password)
    {
        this.name = name; 
        this.username = username;
        this.password = password;
        this.type = "Admin";

    }
    addToList()
    {
        EmployeeList.push(this); 

    }

    //precondition check for employee existing
    employeeExists(username)
    {
        var i;

        for(i = 0; i < EmployeeList.length; i=i+1)
        {
            if(username === EmployeeList[i].username)
            {
                //do not add the employee to the list 
               return true; 
            }
        }
        return false; 
    }

    //adding an employee to the system as an admin
    addEmployee(name, username, password, type)
    {   
        if(!this.employeeExists(username))
        {
            if(type == "Secretary")
            {
                var secretary_1 = new Secretary(name, username, password); 
                EmployeeList.push(secretary_1); 
                return secretary_1;  
            }
            else if(type == "Teacher")
            {
                var teacher_1 = new Teacher(name, username, password); 
                EmployeeList.push(teacher_1); 
                return teacher_1; 
            }            
        }
        else
        {
            return false; 
        }              
    }

    //removing a employee
    removeEmployee(username)
    {
        var i;

        if(this.employeeExists(username))
        {
            for(i = 0; i < EmployeeList.length; i++)
            {
                if(username == EmployeeList[i].username)
                {
                    const victim_employee_index = EmployeeList.indexOf(i); 
                }
            }
    
            if(victim_employee_index> -1)
            {
                EmployeeList.splice(victim_employee_index,1); 
                return true;
            }
        }
        else
        {
            console.log("THIS DOES NOT EXISTS");
            return false;  
        }
    }
}


class Secretary
{
    constructor(name, username, password)
    {
        this.name = name;
        this.username = username;
        this.password = password;
        //this.StudentList = new Array(Student);
        //this.ClassList = new Array(Classroom);
        this.type = "Secretary";
    }

    employeeExists(username)
    {
        var i;

        for(i = 0; i < EmployeeList.length; i=i+1)
        {
            if(username === EmployeeList[i].username)
            {
                //do not add the employee to the list 
               return true; 
            }
        }
        return false; 
    }


    //precondition check for a classroom existing
    classExists(name)
    {
        var i;

        for(i = 0; i < GlobalClassList.length; i=i+1)
        {
            if(name === GlobalClassList[i].name)
            {
                //do not add the classroom to the list of all classes 
               return true; 
            }
        }
        return false; 
    }

    //adding an employee to the system as an admin
    addClass(name, teacher, timeinterval, ClassList)
    {   
        if(!this.classExists(name)){
            if(this.employeeExists(teacher.username)) {
                if(ClassList.length == 0) {                 // no students in given class list
                    ClassList.push(StudentList[0]);         // need minimum 1 student in a class list before instantiation
                    var classroom_1 = new Classroom(name, teacher, timeinterval, ClassList);
                    GlobalClassList.push(classroom_1);
                    return classroom_1;
                }
                else {
                    var classroom_1 = new Classroom(name, teacher, timeinterval, ClassList);
                    GlobalClassList.push(classroom_1);
                    return classroom_1;
                }

            }       
        }
        else
        {
            return false; 
        }              
    }

    studentExists(studID)
    {
        var i;

        for(i = 0; i < StudentList.length; i=i+1)
        {
            if(studID === StudentList[i].Stdid)
            {
               return true; 
            }
        }
        return false; 
    }

    // test comment
    addStudentToClass(className, student) {
        if(this.classExists(className)) {
            if(this.studentExists(student.Stdid)) {
                for(var i = 0; i < GlobalClassList.length; i++) {
                    if(className == GlobalClassList[i].name) {
                        
                        // found correct class
                        var holder_class = GlobalClassList[i];
                        for(var j = 0; j < holder_class.ClassList.length; j++) {    // does the student already exist in the class?
                            if(student.Stdid == holder_class.ClassList[j].Stdid) {
                                return false;
                            }
                        }
                        holder_class.ClassList.push(student);       // add student into specified class
                        student.classes.push(holder_class);         // add class to list of student's enrolled class list
                        return true;
                    }
                }
            }
            else {
                return false;
            }
        }
        else {
            return false;
        }
    }

    //removing a class
    removeClass(name)
    {
        var i;

        if(classExists(name))
        {
            for(i = 0; i < GlobalClassList.length; i++)
            {
                if(name == GlobalClassList[i].name)
                {
                    const victim_class_index = GlobalClassList.indexOf(i); 
                }
            }
    
            if(victim_class_index > -1)
            {
                GlobalClassList.splice(victim_class_index,1); 
                return true;
            }
        }
        else
        {
            console.log("THIS DOES NOT EXISTS");
            return false;  
        }
    }


}

class Teacher
{
    constructor(name,username,password)
    {
        this.name = name; 
        this.username = username; 
        this.password = password;
        this.type = "Teacher";
    }

}

class SupplyTeacher
{
    constructor(name,username,password)
    {
        this.name = name; 
        this.username = username; 
        this.password = password;
        this.type = "SupplyTeacher"; 
    }

}

class Parent
{

    constructor(name, username, password, email)
    {
        this.name = name; 
        this.username = username; 
        this.password = password; 
        this.email = email;
        this.type = "Parent";  
    }


}

class Classroom
{
    constructor(name, teacher, timeinterval, ClassList)
    {
        this.name = name; 
        this.teacher = new Teacher();
        this.timeinterval = timeinterval;
        this.ClassList = [];    // Array of Student Objects

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
        this.ListAttendances = []; 

    }

}


class Student 
{
    constructor(name, Stdid, classes) 
    {
      this.name = name;
      this.Stdid = Stdid;
      this.classes = []; 
      //this.attendanceList = []; 
    }
}



