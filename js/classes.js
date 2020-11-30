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
        var i;

        for (i = 0; i < EmployeeList.length; i = i + 1) {
            if (username === EmployeeList[i].username) {
                //do not add the employee to the list 
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
                }
            }

            if (victim_class_index > -1) {
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
    modifyClassroom() {
        
        this.Classroom.name = name;
        this.Classroom.teacher = teacher;
        this.Classroom.timeinterval = timeinterval;

    }

    modifyClassName(name) {
        if (classExists(name)) {
            return false; // class name already exists
        }
        else {
            
        }
    }

    modifyClassTeach() {

    }

    modifyClassTime() {

    }




    /* SECRETARY FUNCTION: ADD A STUDENT TO A CLASSROOM */
    studentExists(studID) {
        var i;

        for (i = 0; i < StudentList.length; i = i + 1) {
            if (studID === StudentList[i].Stdid) {
                return true;
            }
        }
        return false;
    }

    // test comment
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

}

class Teacher {
    constructor(name, username, password) {
        this.name = name;
        this.username = username;
        this.password = password;
        this.type = "Teacher";
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
    constructor(name, teacher, timeinterval, ClassList, Attendance) {
        this.name = name;
        this.teacher = new Teacher();
        this.timeinterval = timeinterval;
        this.ClassList = [];    // Array of Student Objects
        this.Attendance = [];  //list of of attendance entries where teacher can check present etc...

    }


}

//this is just a single entry within the major attendance sheet for a single class for a single student
class AttendanceEntry {
    constructor(StudentName, className, date, studentStatus) {
        this.className = className;
        this.StudentName = StudentName;
        this.date = new Date();
        this.studentStatus = false;

    }


}

//attendance which teacher fills out for their classes 
class ClassAttendance {
    constructor(ListAttendances) {
        this.ListAttendances = [];

    }

}


class Student {
    constructor(name, Stdid, classes, regKey) {
        this.name = name;
        this.Stdid = Stdid;
        this.classes = [];
        this.regKey = regKey;
        //this.attendanceList = []; 
    }
}



