class Admin 
{
    constructor(username,password)
    {
        this.username = username;
        this.password = password;
        this.type = "ADMIN"; 
        this.TeacherList = [];
        this.SecretaryList = []; 
    }

    //precondition check for secretary existing
    secretaryExists(username)
    {
        var i;

        for(i = 0; i < this.SecretaryList.length; i++)
        {
            if(username == this.SecretaryList[i].username)
            {
                //do not add the secretary to the list 
               return true; 
            }
            else
            {
                return false; 
            }
        }
    }

    //adding a secretary to the system as an admin
    addSecretary(name, username, password)
    {   
        if(!this.secretaryExists(username))
        {
            var secretary_1 = new Secretary(name, username, password); 
            this.SecretaryList.push(secretary_1); 
            console.log("Adding Sec: Name: " + admin.SecretaryList[0].name + "Username: " + admin.SecretaryList[0].username + "Passwrod: " + admin.SecretaryList[0].password);
            return true; 
        }
        else
        {
            console.log("THIS ALREADY EXISTS");
            return false; 
        }              
    }

    //removing a secretary
    removeSecretary(username)
    {
        var i;

        if(this.secretaryExists(username))
        {
            for(i = 0; i < this.SecretaryList.length; i++)
            {
                if(username == this.SecretaryList[i].username)
                {
                    const victim_secretary_index = this.SecretaryList.indexOf(i); 
                }
            }
    
            if(victim_secretary_index> -1)
            {
                this.SecretaryList.splice(victim_secretary_index,1); 
                return true; 
            }
        }
        else
        {
            console.log("THIS DOES NOT EXISTS");
            return false;  
        }
    }
    

    //precondition for checking if teacher already exists
    teacherExists(username)
    {
        var i;

        for(i = 0; i < this.TeacherList.length; i++)
        {
            if(username == this.TeacherList[i].username)
            {
                //do not add the teacher to the list 
               return true; 
            }
            else
            {
                return false; 
            }
        }
    }

    //adding teacher to the list
    addTeacher(name, username, password)
    {   
        if(!this.teacherExists(username))
        {
            var teacher_1 = new Teacher(name, username, password); 
            this.TeacherList.push(teacher_1); 
            console.log("Adding Teach: Name: " + admin.TeacherList[0].name + "Username: " + admin.TeacherList[0].username + "Passwrod: " + admin.TeacherList[0].password);
            return true;
        }
        else
        {
            console.log("THIS ALREADY EXISTS");
            return false; 
        }              
    }

    //removing a teacher
    removeTeacher(username)
    {
        var i;

        if(this.teacherExists(username))
        {
            for(i = 0; i < this.TeacherList.length; i++)
            {
                if(username == this.TeacherList[i].username)
                {
                    const victim_teacher_index = this.TeacherList.indexOf(i); 
                }
            }
    
            if(victim_teacher_index> -1)
            {
                this.TeacherList.splice(victim_teacher_index,1); 
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
        this.type = "SECRETARY"; 
    }


}

class Teacher
{
    constructor(name,username,password)
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
    constructor(name,Stdid,classes, attendanceList) 
    {
      this.name = name;
      this.Stdid = Stdid;
      this.classes = []; 
      this.attendanceList = []; 
    }
}



