class Admin 
{
    constructor(username,password)
    {
        this.username = username;
        this.password = password;
        this.type = "ADMIN"; 
        this.EmployeeList = [];
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

var ClassList = [];
var StudentList = [];

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
    constructor(name,teacher, timeinterval,StudentList)
    {
        this.name = name; 
        this.teacher = new Teacher();
        this.timeinterval = timeinterval;
        this.StudentList = []; 

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



