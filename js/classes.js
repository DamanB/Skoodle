var EmployeeList = []; //list of all employees (admins, secretaries, teachers)
var GlobalClassList = []; //list of all classes offered at the school
var StudentList = []; //list of all students in the class
var ParentList = []; //list of all parents of the students in the school
var GlobalDailyAttendenceList = [];  //the daily attendence 

class Admin {
    constructor(name, username, password) {
        this.name = name;
        this.username = username;
        this.password = password;
        this.type = "Admin";

    }
    addToList() {
        EmployeeList.push(this);

    }


    /* ADMIN FUNCTION: ADDING EMPLOYEES */
    //precondition check for employee existing
    employeeExists(username) {
        for (var i = 0; i < EmployeeList.length; i++) {
            if (username === EmployeeList[i].username) {
                //do not add the employee to the list 
                return EmployeeList[i];
            }
        }
        return false;
    }

    //adding an employee to the system as an admin
    addEmployee(name, username, password, type) {
        if (!this.employeeExists(username)) {
            if (type == "Secretary") {
                var secretary_1 = new Secretary(name, username, password);
                EmployeeList.push(secretary_1);
                return secretary_1;
            }
            else if (type == "Teacher") {
                var teacher_1 = new Teacher(name, username, password);
                EmployeeList.push(teacher_1);
                return teacher_1;
            }
        }
        else {
            return false;
        }
    }


    /* ADMIN FUNCTION: REMOVING EMPLOYEES */
    //removing a employee
    removeEmployee(username) {
        if (this.employeeExists(username)) {
            for (var i = 0; i < EmployeeList.length; i++) {
                if (username == EmployeeList[i].username) {
                    const victim_employee_index = EmployeeList.indexOf(i);
                }
            }

            if (victim_employee_index > -1) {
                EmployeeList.splice(victim_employee_index, 1);
                return true;
            }
        }
        else {
            console.log("THIS DOES NOT EXISTS");
            return false;
        }
    }

    /* ADMIN FUNCTION: MODIFY EMPLOYEES NAME, USERNAME, OR PASSWORD */
    modifyEmployeeName(username, newName) {
        var employee_1 = this.employeeExists(username);
        employee_1.name = newName;
    }

    modifyEmployeeUsername(username, newUser) {
        if (employeeExists(newUser)) {
            return false;
        }
        else {
            var employee_1 = this.employeeExists(username);
            employee_1.username = newUser;
            return true;
        }
    }

    modifyEmployeePassword(username, newPass) {
        var employee_1 = this.employeeExists(username);
        employee_1.password = newPass;
    }
}


class Secretary {
    constructor(name, username, password) {
        this.name = name;
        this.username = username;
        this.password = password;
        //this.StudentList = new Array(Student);
        //this.ClassList = new Array(Classroom);
        this.type = "Secretary";
    }


    /* SECRETARY FUNCTION: ADD CLASSROOM TO GLOBAL CLASS LIST */
    employeeExists(username) {
        for (var i = 0; i < EmployeeList.length; i++) {
            if (username === EmployeeList[i].username) {
                return EmployeeList[i];
            }
        }
        return false;
    }


    // gets Classroom reference from GlobalClassList
    //precondition check for a classroom existing
    classExists(name) {
        for (var i = 0; i < GlobalClassList.length; i++) {
            if (name === GlobalClassList[i].name) {
                return GlobalClassList[i];
            }
        }
        return false;
    }

    //adding an employee to the system as an admin
    addClass(name, teacher, timeinterval, ClassList) {
        if (!this.classExists(name)) {
            if (this.employeeExists(teacher.username)) {
                if (ClassList.length == 0) {                 // no students in given class list
                    ClassList.push(StudentList[0]);         // need minimum 1 student in a class list before instantiation
                    var classroom_1 = new Classroom(name, teacher, timeinterval, ClassList, []);
                    GlobalClassList.push(classroom_1);
                    return classroom_1;
                }
                else {
                    var classroom_1 = new Classroom(name, teacher, timeinterval, ClassList, []);
                    GlobalClassList.push(classroom_1);
                    return classroom_1;
                }

            }
        }
        else {
            return false;
        }
    }


    /* SECRETARY FUNCTION: REMOVE CLASSROOM FROM GLOBAL CLASS LIST */
    //removing a class
    removeClass(name) {
        var i;

        if (classExists(name)) {
            for (i = 0; i < GlobalClassList.length; i++) {
                if (name == GlobalClassList[i].name) {
                    const victim_class_index = GlobalClassList.indexOf(i);
                    var victim_classroom = GlobalClassList[i]; 
                }
            }
            if (victim_class_index > -1) {
                victim_classroom.teacher.taughtClasses.splice(victim_class_index,1);  //unassigning teacher from removed class
                GlobalClassList.splice(victim_class_index, 1);
                return true;
            }
        }
        else {
            console.log("THIS DOES NOT EXISTS");
            return false;
        }
    }

    /* SECRETARY FUNCTION: MODIFY A CLASSROOM'S INFORMATION */
    modifyClassName(className, newName) {
        if (classExists(newName)) {
            return false;
        }
        else {
            var classroom_1 = this.classExists(className);
            classroom_1.name = newName;
        }
    }

    modifyClassTeach(className, newTeach) {
        if (employeeExists(newTeach)) {         // newTeach exists?
            var classroom_1 = this.classExists(className);      
            if (classroom_1) {                  // classroom exists?
                if (classroom_1.teacher.username == newTeach.username) {    // same teacher assigned?
                    return false;
                }
                //derolling current teacher from class so newTeach can teach it
                var victim_teacher = classroom_1.teacher; 
                for(var i = 0; i<victim_teacher.taughtClasses.length; i++)
                {
                    if(victim_teacher.taughtClasses[i].name == classroom_1.name)
                    {
                        var victim_classroom = victim_teacher.taughtClasses.indexOf(i); 
                    }
                }
                if (victim_classroom > -1) {
                    victim_teacher.taughtClasses.splice(victim_classroom,1);  //unassigning teacher from removed class
                    return true;
                }
                classroom_1.teacher = newTeach;
                newTeach.taughtClasses.push(classroom_1); //adding the class to the new teacher's list of taught classes
            }
        }
        return false;
    }

    modifyClassTime(className, newTime) {
        var classroom_1 = this.classExists(className);  
        if (classroom_1) {                              // class exists?
            classroom_1.timeinterval = newTime;         // set new time interval
        }
        else {
            return false;
        }
    }




    /* SECRETARY FUNCTION: ADD A STUDENT TO A CLASSROOM */
    studentExists(studID) {
        var i;

        for (i = 0; i < StudentList.length; i = i + 1) {
            if (studID === StudentList[i].Stdid) {
                return StudentList[i];
            }
        }
        return false;
    }

    addStudentToClass(className, student) {
        if (this.classExists(className)) {
            if (this.studentExists(student.Stdid)) {
                for (var i = 0; i < GlobalClassList.length; i++) {
                    if (className == GlobalClassList[i].name) {

                        // found correct class
                        var holder_class = GlobalClassList[i];
                        for (var j = 0; j < holder_class.ClassList.length; j++) {    // does the student already exist in the class?
                            if (student.Stdid == holder_class.ClassList[j].Stdid) {
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


    /* SECRETARY FUNCTION: REMOVE A STUDENT FROM A CLASSROOM */
    removeStudentFromClass(className,student)
    {
        var currClass = this.classExists(className); 
        
        //class exists 
        if(currClass)
        {
            for(var i = 0; i < currClass.length; i++)
            {
                if(currClass.ClassList[i].Stdid == student.Stdid)
                {
                    var victim_stud = currClass.ClassList[i].indexOf(i); 
                }
            }
            if (victim_stud > -1) 
            {
                currClass.ClassList.splice(victim_employee_index, 1);
                return true;
            }
        }
        else
        {
            return false; 
        }
    }

    //generate random RegKey for Students
    genKey()
    {
       return Math.floor(Math.random()*1000); 
    }
    
    //generate student ID
    genStudID()
    {
        var ID = Math.floor(Math.random()*1000000); 
        ID = ID + 1;
        return ID;   
    }

    //adding student to global student list (registering student to school)
    registerStudent(studName)
    {
        var regKey = this.genKey(); 
        var studID = this.genStudID(); 
        var newStud = new Student(studName, studID, [], regKey); 

        StudentList.push(newStud); 
    }

    //removing student from global student list (deregistering student from school)
    deregisterStudent(student)
    {
        if(this.studentExists(student.Stdid))
        {
            for(var i = 0; i<StudentList.length; i++)
            {
                if(student.Stdid == StudentList[i].Stdid)
                {
                    var victim_stud = StudentList[i].indexOf(i); 
                }
            }
            if(victim_stud > -1)
            {
                StudentList.splice(victim_stud, 1);
                return true;
            }
        }
        else
        {
            return false;
        }
    }
}

class Teacher {
    constructor(name, username, password) {
        this.name = name;
        this.username = username;
        this.password = password;
        this.type = "Teacher";
        this.taughtClasses = []; //list of classrooms assigned to teacher 
    }

    classExists(className) {
        for (var i = 0; i < this.taughtClasses.length; i++) {
            if (className === this.taughtClasses[i].name) {
                return this.taughtClasses[i];
            }
        }
        return false;
    }
    
    attendanceExists(className) {
        for (var i = 0; i < this.taughtClasses.length; i++) {
            if (className === this.taughtClasses[i].name) {
                return this.taughtClasses[i].Attendance;
            }
        }
        return false;
    }

    //create attendance for day and class
    createAttendance(className)
    {
        var currClassroom = this.classExists(className); 
        var attendance_holder = [];  //mock attendance for holding student attendance entries
        
        if(currClassroom)
        {
            for(var i = 0; i < currClassroom.ClassList.length; i++)
            {
                var currStudent = currClassroom.ClassList[i]; 
                
                var new_date = new Date(); 
                var d = new Date(new_date.getFullYear(), new_date.getMonth(), new_date.getDay());
                var attendance_entry = new AttendanceEntry(currStudent, className, d, false); 
                currStudent.attendanceList.push(attendance_entry); 
                
                attendance_holder[i].push(attendance_entry);   //storing attendance entries into mock holder

            }
        }
        
        var attendance_1 = new ClassAttendance(attendance_holder);  // creating the class attendance list from temp mock class attendance

        return attendance_1; 
    }
    
    //mark student present/absent
    markStatus(className, student, status)
    {
        var currClass = this.classExists(className);
        if (currClass) {
            var currAttendance = this.attendanceExists(className);

        }
    }

}

class SupplyTeacher {
    constructor(name, username, password) {
        this.name = name;
        this.username = username;
        this.password = password;
        this.type = "SupplyTeacher";
    }

}

class Parent {

    constructor(name, username, password, email) {
        this.name = name;
        this.username = username;
        this.password = password;
        this.email = email;
        this.type = "Parent";
    }


}

class Classroom {
    constructor(name, teacher, timeinterval, ClassList) {
        this.name = name;
        this.teacher = teacher;
        this.timeinterval = timeinterval;
        this.ClassList = ClassList;    // Array of Student Objects
        this.Attendance = [];  //list of of attendance entries where teacher can check present etc...
    }


}

//this is just a single entry within the major attendance sheet for a single class for a single student
class AttendanceEntry {
    constructor(student, className, date, studentStatus) {
        this.student = student; 
        this.className = className;
        this.date = new Date();
        this.studentStatus = false;
    }

}

//attendance which teacher fills out for their classes 
class ClassAttendance {
    constructor(AttEntries) {
        this.entries = AttEntries;
    }


}


class Student {
    constructor(name, Stdid, classes, regKey) {
        this.name = name;
        this.Stdid = Stdid;
        this.classes = []; //list of classes student is enrolled in
        this.regKey = regKey;
        this.attendanceList = []; //list of particular student's attendance entries   
    }
}



