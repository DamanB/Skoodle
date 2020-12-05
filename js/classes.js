var EmployeeList = []; //list of all employees (admins, secretaries, teachers)
var GlobalClassList = []; //list of all classes offered at the school
var StudentList = []; //list of all students in the class
var ParentList = []; //list of all parents of the students in the school
var GlobalAttendenceList = [];  //the daily attendence 

class Admin {
    constructor(name, username, password) {
        this.name = name;
        this.username = username;
        this.password = password;
        this.type = "Admin";

    }
    addToList() {
        EmployeeList.push(this);
        //setEmployeeList(EmployeeList); 
    }


    /* ADMIN FUNCTION: ADDING EMPLOYEES */
    //precondition check for employee existing
    employeeExists(username) {
        for (var i = 0; i < EmployeeList.length; i++) {
            if (username == EmployeeList[i].username) {
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
                setEmployeeList(EmployeeList); 
                return secretary_1;
            }
            else if (type == "Teacher") {
                var teacher_1 = new Teacher(name, username, password);
                EmployeeList.push(teacher_1);
                setEmployeeList(EmployeeList); 
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
        getEmployeeList();
        if (this.employeeExists(username)) {
            for (var i = 0; i < EmployeeList.length; i++) {
                if (username == EmployeeList[i].username) {
                    var victim_employee_index = i;
                } 
            if (victim_employee_index > -1) {
                EmployeeList.splice(victim_employee_index, 1);
                setEmployeeList(EmployeeList); 
                return true;
                }
            }
        }
        else {
            console.log("THIS DOES NOT EXISTS");
            return false;
        }
    }

    /* ADMIN FUNCTION: MODIFY EMPLOYEES NAME, USERNAME, OR PASSWORD */
    modifyEmployeeName(username, newName) {
        getEmployeeList();
        var employee_1 = this.employeeExists(username);
        employee_1.name = newName;
        setEmployeeList(EmployeeList); 
    }

    modifyEmployeeUsername(username, newUser) {
        getEmployeeList();
        if (this.employeeExists(newUser)) {
            return false;
        }
        else {
            var employee_1 = this.employeeExists(username);
            employee_1.username = newUser;
            setEmployeeList(EmployeeList); 
            return true;
        }
    }

    modifyEmployeePassword(username, newPass) {
        getEmployeeList();
        var employee_1 = this.employeeExists(username);
        employee_1.password = newPass;
        setEmployeeList(EmployeeList); 
    }
}

var numOfSupply = 1;        // global helper var to be used by Secretary to count the num of supply teacher accounts (also used in creation of supplyTeach username)

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
            if (username == EmployeeList[i].username) {
                return EmployeeList[i];
            }
        }
        return false;
    }


    // gets Classroom reference from GlobalClassList
    //precondition check for a classroom existing
    classExists(name) {
        for (var i = 0; i < GlobalClassList.length; i++) {
            if (name == GlobalClassList[i].name) {
                return GlobalClassList[i];
            }
        }
        return false;
    }

    //adding an employee to the system as an admin
    addClass(name, teacher, timeinterval, ClassList) {
        if (!this.classExists(name)) {
            if (this.employeeExists(teacher.username)) {
                if (ClassList.length == 1) {                 // no students in given class list
                    ClassList.push(StudentList[0]);         // need minimum 1 student in a class list before instantiation
                    var classroom_1 = new Classroom(name, teacher, timeinterval, ClassList, []);
                    GlobalClassList.push(classroom_1);
                    teacher.taughtClasses.push(classroom_1.name); 
                    setGlobalClassList(GlobalClassList); 
                    setStudentList(StudentList); 
                    setEmployeeList(EmployeeList); 

                    return classroom_1;
                }
                else {
                    var classroom_1 = new Classroom(name, teacher, timeinterval, ClassList, []);
                    GlobalClassList.push(classroom_1);
                    teacher.taughtClasses.push(classroom_1.name); 
                    setGlobalClassList(GlobalClassList);
                    setStudentList(StudentList);
                    setEmployeeList(EmployeeList); 
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
    //remove class from student list 
    removeClass(name) {
        var i;
        if (this.classExists(name)) {
            for (i = 0; i < GlobalClassList.length; i++) {
                if (name == GlobalClassList[i].name) {
                    const victim_class_index = GlobalClassList.indexOf(i);
                    var victim_classroom = GlobalClassList[i]; 
                }
                if (victim_class_index > -1) {
                    victim_classroom.teacher.taughtClasses.splice(victim_class_index,1);  //unassigning teacher from removed class
                    this.removeStudentFromClass(victim_classroom); //unassigning students from removed classroom 
                    GlobalClassList.splice(victim_class_index, 1);
                    setGlobalClassList(GlobalClassList);
                    setEmployeeList(EmployeeList);
                    setStudentList(StudentList);  
                    return true;
                }
            }

        }
        else {
            console.log("THIS DOES NOT EXISTS");
            return false;
        }
    }

    //helper method for removeClass function
    removeStudentsFromClass(currClassroom)
    {
        for (var i = 0; i < currClassroom.ClassList.length; i++)
        {
            var currStudent = currClassroom.ClassList[i]; 
            
            for(var j = 0; j < currStudent.classes.length; j++)
            {
                if(currStudent.classes[j].name == currClassroom.name)
                {
                    var victim_enrolled_class_index = currStudent.classes.indexOf(j); 
                }
                if(victim_enrolled_class_index > -1)
                {
                    currStudent.classes.splice(victim_enrolled_class_index, 1);
                    setGlobalClassList();
                }
            }

        }

    }

    /* SECRETARY FUNCTION: MODIFY A CLASSROOM'S INFORMATION */
    modifyClassName(className, newName) {
        if (this.classExists(newName)) {
            return false;
        }
        else {
            var classroom_1 = this.classExists(className);
            classroom_1.name = newName;
            setGlobalClassList(GlobalClassList);
            setStudentList(StudentList); 
        }
    }

    modifyClassTeach(className, newTeach) {
        var newTeacher = this.employeeExists(newTeach); 
        if (newTeacher) {         // newTeach exists?
            var classroom_1 = this.classExists(className);      
            if (classroom_1) {                  // classroom exists?
                if (classroom_1.teacher.username == newTeacher.username) {    // same teacher assigned?
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
                    if (victim_classroom > -1) {
                        victim_teacher.taughtClasses.splice(victim_classroom,1);  //unassigning teacher from removed class
                        setEmployeeList(EmployeeList);
                        setGlobalClassList(GlobalClassList);
                        setStudentList(StudentList); 
                        return true;
                    }
                }
                classroom_1.teacher = newTeacher;
                newTeacher.taughtClasses.push(classroom_1.name); //adding the class to the new teacher's list of taught classes
                setEmployeeList(EmployeeList);
                setGlobalClassList(GlobalClassList);
                setStudentList(StudentList); 
            }
        }
        return false;
    }

    modifyClassTime(className, newTime) {
        var classroom_1 = this.classExists(className);  
        if (classroom_1) {                              // class exists?
            classroom_1.timeinterval = newTime;         // set new time interval
            setGlobalClassList(GlobalClassList);
            setStudentList(StudentList);
        }
        else {
            return false;
        }
    }




    /* SECRETARY FUNCTION: ADD A STUDENT TO A CLASSROOM */
    studentExists(studID) {
        for (var i = 0; i < StudentList.length; i++) {
            if (studID == StudentList[i].Stdid) {
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
                        student.classes.push(holder_class.name);         // add class to list of student's enrolled class list
                        setGlobalClassList(GlobalClassList);
                        setStudentList(StudentList); 
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
    removeStudentFromClass(className,studID)
    {
        // console.log("remove student now?");
        var currClass = this.classExists(className); 
        
        //class exists 
        if(currClass)
        {
            console.log("hjere");
            for(var i = 0; i < currClass.ClassList.length; i++) //loop over the class list to access students 
            {
                if(currClass.ClassList[i].Stdid == studID) //if the student to remove from class is found?
                {
                    var victim_stud = i;  //grab the index of the student we want to remove from currClass ClassList 
                }
                if (victim_stud > -1) 
                {
                    currClass.ClassList.splice(victim_stud, 1); //removing the targetted student from the currClass ClassList 
                    //setStudentList(StudentList);
                    console.log("remove student from class");
                    setGlobalClassList(GlobalClassList); //updating the global class list 
                    setStudentList(StudentList); //updating the student list 
                    return true;
                }
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
        setStudentList(StudentList);
        return newStud;
    }

    //removing student from global student list (deregistering student from school)
    deregisterStudent(studId)
    {
        // console.log("deregister student now?");
        var currStud = this.studentExists(studId);
        if (currStud) {
            // console.log("hjere");
            for (var i = 0; i < StudentList.length; i++) {
                if (studId == StudentList[i].Stdid) {
                    var victim_index = i;
                }
                if (victim_index > -1) {
                    StudentList.splice(victim_index, 1);
                    setStudentList(StudentList); //updating the student list because student was removed from school
                    setGlobalClassList(GlobalClassList); //do we have to also remove them from the class???????
                    // console.log("removing student");
                    return true;
                }
            }
        }
        else {
            return false;
        }
    }


    //generate random RegKey for Students
    genPass() {
        return Math.floor(Math.random()*100000);
    }

    
    
    // creating SUPPLY TEACHER a "temporary" account
    createTempSupply(supplyName)
    {
        var tempUsername = "supply_".concat(numOfSupply.toString());
        numOfSupply++;
        var tempPass = this.genPass().toString();
        var newSupplyTeach = new SupplyTeacher(supplyName, tempUsername, tempPass);
        setEmployeeList(EmployeeList);
        return newSupplyTeach;
    }


    // removing SUPPLY TEACHER account (SECRETARY MUST REMOVE IT ON THEIR OWN, WE ARE NOT HAVING THE TEMP ACCOUNT DISABLE ON ITS OWN AFTER SOME TIME <-- ARJUN)
    removeTempSupply(supplyUsername) {
        var supplyTeacher = this.employeeExists(supplyUsername);
        if (supplyTeacher) {
            for (var i = 0; i < EmployeeList.length; i++) {
                if (supplyUsername == EmployeeList[i].username) {
                    var victim_supplyTeacher_index = i;
                }
                if (victim_supplyTeacher_index > -1) {
                    EmployeeList.splice(victim_supplyTeacher_index, 1);
                    setEmployeeList(EmployeeList);
                    return true;
                }
            }
        }
        else {
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

    
    //helper method for UI people
    getTeacherFromClass(className) {
        var currClassroom = this.classExists(className);
        return currClassroom.teacher;
    }

    //helper method for teacher used in createAttendance 
    classExists(className) {
        for (var i = 0; i < GlobalClassList.length; i++) {
            if (className == GlobalClassList[i].name) {
                return GlobalClassList[i];
            }
        }
        return false;
    }
    
    //helper method for teacher used in markStatus 
    attendanceExists(className, date) {
        var currClass = this.classExists(className);
        if (currClass) {
            var currAttendance = currClass.Attendance;
            currAttendance.forEach(function(att) {
                if (att.date.getFullYear() == date.getFullYear() && att.date.getMonth() == date.getMonth() && att.date.getDay() == date.getDay()) {
                    return att;
                }
            })
            return false;
        }
    }

    //helper method for teacher used in markStatus
    studentExistsInClass(studID, currClass) 
    {
        for (var i = 0; i < currClass.ClassList.length; i++) {
            if (studID == currClass.ClassList[i].Stdid) {
                return currClass.ClassList[i]; 
            }
        }
        return false;
    }

    //create attendance for day and class CLASSATTENDANCE
    createAttendance(className, year, month, day)
    {
        var new_date = new Date(year, month, day);
        if (this.attendanceExists(className, new_date)) {
            return;
        }
        var currClassroom = this.classExists(className); 
        var attendance_holder = [];  //mock attendance for holding student attendance entries
        
        if(currClassroom) // checking if the current classroom exits 
        {
            for(var i = 0; i < currClassroom.ClassList.length; i++) //looping through classList to get students 
            {
                var currStudent = currClassroom.ClassList[i];  //creating student object 
                
                var attendance_entry = new AttendanceEntry(currStudent, className, "*");  //creating an attendance entry 
                                
                attendance_holder.push(attendance_entry);   //storing student attendance entries into mock holder

            }
        }
        //var d = new Date(new_date.getFullYear(), new_date.getMonth(), new_date.getDay());
        var attendance_1 = new ClassAttendance(attendance_holder, new_date);  // creating the class attendance list from temp mock class attendance
        console.log(attendance_1.date); 

        currClassroom.Attendance.push(attendance_1); //putting the attendance made into the class 
        setGlobalClassList(GlobalClassList); 
        
        GlobalAttendenceList.push(attendance_1); //sending the attendance so secratery can access the attendances
        setGlobalAttendenceList(GlobalAttendenceList);  

        return attendance_1; 
    }
    
    //mark student present/absent
    markStatus(className, currDate, stdId, status)
    {
        var currClass = this.classExists(className); //grabs the current class
        // var currStudent = this.studentExistsInClass(studId, currClass);
        var classAttendanceList = currClass.Attendance;
        var classAttendance_1;
        classAttendanceList.forEach(function(classAttend){
            if (classAttend.date.getFullYear() == currDate.getFullYear() && classAttend.date.getMonth() == currDate.getMonth() && classAttend.date.getDay() == currDate.getDay()) {
                classAttendance_1 = classAttend;
                return;
            }
        });
        
        if (classAttendance_1)
        {
            classAttendance_1.entries.forEach(function(classEntry){
                if (classEntry.student.Stdid == stdId) {
                    classEntry.studentStatus = status;
                    return;
                }
            });
        }
        
        setGlobalClassList(GlobalClassList); 
        setGlobalAttendenceList(GlobalAttendenceList);  
    }

    //submitting a complete attendance to the secretary (updating global list)
    submitAttendance(className)
    {
        var currClass = this.classExists(className); //grabs the current class

        if(currClass)
        {
            for (var i = 0; i < currClass.Attendance.AttEntries.length; i++)
            {
                if(currClass.Attendance.AttEntries[i].studentStatus == "*")
                {
                    return false; 
                }

            }
            //should update the global attendance list with the marked statuses 
            setGlobalAttendenceList(GlobalAttendenceList);
            return true; 
        }
        return false; 
    }
}


class SupplyTeacher {       // Substitute Teacher: same functionalities as FT-Teacher, but cannot view individual student 
    constructor(name, username, password) {
        this.user = new Teacher(name, username, password); 
        this.type = "SupplyTeacher";
    }
}

class Parent {

    constructor(name, username, password, email) {
        this.name = name;
        this.username = username;
        this.password = password;
        this.email = email;
        this.children = [];             // array of children (Student's ID #)  NOTE: FRONT-END CAN SORT BY NAMES INSTEAD OF ID
        this.type = "Parent";
    }
    

    // a helper function for checking if a child (student) exists in the Parent's children list
    childExists(studId) {
        for (var i = 0; i < this.children.length; i++) {
            if (this.children[i].Stdid == studId) {
                return this.children[i];
            }
        }
        return false;
    }
   
    // a helper function for checking if a child is enrolled in a class
    classExists(className) {
        for (var i = 0; i < GlobalClassList.length; i++) {
            if (className == GlobalClassList[i].name) {
                return GlobalClassList[i];
            }
        }
        return false;
    }

    //helper method to see if parent exists will be used by addStudent
    parentExists(username)
    {
        for(var i = 0; i < ParentList.length; i++)
        {
            if(ParentList[i].username == username)
            {
                return ParentList[i]; 
            }
        }
        return false; 
    }
  
    // Lets Parent link a student to their account
    addStudent(studId, studRegKey, parUsername) {

        var currParent = this.parentExists(parUsername); 
        if(currParent)
        {
            for (var i = 0; i < StudentList.length; i++) {
                if (StudentList[i].Stdid == studId && StudentList[i].regKey == studRegKey) {   // if student found + regKey matches
                    var currStud = StudentList[i];
                    currParent.children.push(currStud);         // student ID # pushed onto parent's children list
                    setParentList(ParentList);
                    return true;
                }
            }         
        }
        return false;
    }

    // Displays the selected child's (Student) attendance record
    viewStudentAttendance(student) {
        var currChild = this.childExists(student.Stdid);        // fetch the student object from parent's child list
        return currChild.attendanceList;
    }

    // Report the selected child's (Student) attendance entry to reported absent for certain date/class
    // if the ClassAttendance does not exist on that date, create it using CreateAttendance (from dummy_teacher), then recursively call reportStudentAbsence after it
    // (CHANGES FOR CreateAttendance include: if it sees that the ClassAttendance already exists, it should not overwrite that dates attendances)
    reportStudentAbsence(studId, date, className) {
        var dummy_teacher = new Teacher("","","");
        var studClass = this.classExists(className);
        var classAttendance = studClass.Attendance;
        
        var succ = false;


        classAttendance.forEach(function(att) {
            att.date = new Date(att.date)
            console.log(att.date)
            if (att.date.getFullYear() == date.getFullYear() && att.date.getMonth() == date.getMonth() && att.date.getDay() == date.getDay()) {
                succ = true;
                att.entries.forEach(function(ent) {
                    if (ent.student.Stdid == studId) {
                        ent.studentStatus = "AD";
                        setGlobalAttendenceList(GlobalAttendenceList);
                        setGlobalClassList(GlobalClassList);
                        return;
                    }
                })
                return;
            }
        })
        if (!succ) {
            dummy_teacher.createAttendance(className, date.getFullYear(), date.getMonth(), date.getDay());
            this.reportStudentAbsence(studId, date, className);
        }
    }

    //registering parent into the system
    registerParent(name, username, password, email)
    {
        var currParent = new Parent(name, username, password, email); 
        ParentList.push(currParent); 
        setParentList(ParentList); 
    }
}

class Classroom {
    constructor(name, teacher, timeinterval, ClassList) {
        this.name = name;
        this.teacher = teacher;
        this.timeinterval = timeinterval;
        this.ClassList = ClassList;    // Array of Student Objects
        this.Attendance = [];  //list of of Class attendance objects 
    }


}

//this is just a single entry within the major attendance sheet for a single class for a single student
class AttendanceEntry {
    constructor(student, className) {
        this.student = student; 
        this.className = className;
        this.studentStatus = "*"; //this will be the different types of status (P - Present), (A - Absent), (RA - Reported Absent)
        this.successfullyLogged = false;
    }

}

//attendance which teacher fills out for their classes 
class ClassAttendance {
    constructor(AttEntries, date) {
        this.entries = AttEntries;
        this.date = date;
    }


}

class Student {
    constructor(name, Stdid, classes, regKey) {
        this.name = name;
        this.Stdid = Stdid;
        this.classes = []; //list of classes student is enrolled in
        this.regKey = regKey;
    }
}



