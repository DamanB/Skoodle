var EmployeeList = [];
var GlobalClassList = [];
var StudentList = [];

class Admin 
{
    constructor(username,password)
    {
        this.username = username;
        this.password = password;
        this.type = "ADMIN";
        this.EmployeeList;
    }

    //precondition check for employee existing
    employeeExists(username)
    {
        var i;

        for(i = 0; i < this.EmployeeList.length; i=i+1)
        {
            if(username === this.EmployeeList[i].username)
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
                this.EmployeeList.push(secretary_1); 
                return true; 
            }
            else if(type == "Teacher")
            {
                var teacher_1 = new Teacher(name, username, password); 
                this.EmployeeList.push(teacher_1); 
                return true; 
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
            for(i = 0; i < this.EmployeeList.length; i++)
            {
                if(username == this.EmployeeList[i].username)
                {
                    const victim_employee_index = this.EmployeeList.indexOf(i); 
                }
            }
    
            if(victim_employee_index> -1)
            {
                this.EmployeeList.splice(victim_employee_index,1); 
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
        this.EmployeeList;
        //this.StudentList = new Array(Student);
        //this.ClassList = new Array(Classroom);
        this.type = "Secretary";
    }

    employeeExists(username)
    {
        var i;

        for(i = 0; i < this.EmployeeList.length; i=i+1)
        {
            if(username === this.EmployeeList[i].username)
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

        for(i = 0; i < this.GlobalClassList.length; i=i+1)
        {
            if(name === this.GlobalClassList[i].name)
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
            if(employeeExists(teacher.username)) {
                if(ClassList.length == 0) {                 // no students in given class list
                    ClassList.push(StudentList[0]);         // need minimum 1 student in a class list before instantiation
                    var classroom_1 = new Classroom(name, teacher, timeinterval, ClassList);
                    this.GlobalClassList.push(classroom_1);
                    return true;
                }
                else {
                    var classroom_1 = new Classroom(name, teacher, timeinterval, ClassList);
                    this.GlobalClassList.push(classroom_1);
                    return true;
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

        for(i = 0; i < this.StudentList.length; i=i+1)
        {
            if(studID === this.StudentList[i].Stdid)
            {
               return true; 
            }
        }
        return false; 
    }

    addStudentToClass(className, student) {
        if(classExists(className)) {
            if(studentExists(student.Stdid)) {
                for(var i = 0; i < GlobalClassList.length; i++) {
                    if(className == this.GlobalClassList[i].name) {
                        
                        // found correct class
                        var holder_class = this.GlobalClassList[i];
                        for(var j = 0; j < holder_class.ClassList.length; j++) {
                            if(studID == holder_class.ClassList[j].Stdid) {
                                return false;
                            }
                        }
                        holder_class.ClassList.push(student);
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
            for(i = 0; i < this.GlobalClassList.length; i++)
            {
                if(name == this.GlobalClassList[i].name)
                {
                    const victim_class_index = this.GlobalClassList.indexOf(i); 
                }
            }
    
            if(victim_class_index > -1)
            {
                this.GlobalClassList.splice(victim_class_index,1); 
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
    constructor(name,username,password,type)
    {
        this.name = name; 
        this.username = username; 
        this.password = password;
        this.type = "SupplyTeacher"; 
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



