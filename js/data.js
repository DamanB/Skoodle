function InitData()
{
    var admin_1 = new Admin("Adam", "admin_1" , "1234"); 

    admin_1.addToList(); 

    var sec_1 = admin_1.addEmployee("Susan", "sec1", "123", "Secretary"); 
    
    var teach_1 = admin_1.addEmployee("John", "teach1", "12345", "Teacher"); 

    var teach_2 = admin_1.addEmployee("Jerry", "teach2", "123456", "Teacher"); 

    var teach_3 = admin_1.addEmployee("Hina", "teach3", "123456", "Teacher"); 

    var class1 = sec_1.addClass("French1", teach_1, "1:00pm - 2:00pm",[]); 

    var class2 = sec_1.addClass("Math1", teach_2, "2:00pm - 3:00pm",[]); 

    var stud_1 = new Student("Ivan", 254, []); 
    
    var stud_2 = new Student("Andrew", 253, []); 
    
    var stud_3 = new Student("Wei", 257, []); 
    
    var stud_4 = new Student("Damanveer Singh Bharaj", 258, []); 
    
    var stud_5 = new Student("Bao", 259, []); 
    
    var stud_6 = new Student("Ngo", 251, []);
    
    
    sec_1.addStudentToClass("French1", stud_1); 
    sec_1.addStudentToClass("French1", stud_2);
    sec_1.addStudentToClass("French1", stud_3);
    
    sec_1.addStudentToClass("Math1", stud_4); 
    sec_1.addStudentToClass("Math1", stud_5); 
    sec_1.addStudentToClass("Math1", stud_6); 


    var par_1 = new Parent("Mary", "par1", "1234567", "mary@gmail.com"); 
    
    var par_2 = new Parent("Ostroff", "par2", "1234567", "ostroff@gmail.com"); 

    setEmployeeList(EmployeeList); 
    

}

function getEmployeeList(){
    var raw = sessionStorage.getItem('EmployeeList');
    var list = JSON.parse(raw);
    EmployeeList = list; 
    return list;
}

function setEmployeeList(list){
    EmployeeList = list; 
    sessionStorage.setItem('EmployeeList', JSON.stringify(list));
}

function getGlobalClassList(){
    var raw = sessionStorage.getItem('GlobalClassList');
    var list = JSON.parse(raw);
    GlobalClassList = list; 
    return list;
}

function setGlobalClassList(list){
    GlobalClassList = list; 
    sessionStorage.setItem('GlobalClassList', JSON.stringify(list));
}

function getStudentList(){
    var raw = sessionStorage.getItem('StudentList');
    var list = JSON.parse(raw);
    StudentList = list; 
    return list;
}

function setStudentList(list){
    StudentList = list; 
    sessionStorage.setItem('StudentList', JSON.stringify(list));
}

function getParentList(){
    var raw = sessionStorage.getItem('ParentList');
    var list = JSON.parse(raw);
    ParentList = list; 
    return list;
}

function setParentList(list){
    ParentList = list; 
    sessionStorage.setItem('ParentList', JSON.stringify(list));
}

function getGlobalDailyAttendenceList(){
    var raw = sessionStorage.getItem('GlobalDailyAttendenceList');
    var list = JSON.parse(raw);
    GlobalDailyAttendenceList = list; 
    return list;
}

function setGlobalDailyAttendenceList(list){
    GlobalDailyAttendenceList = list; 
    sessionStorage.setItem('GlobalDailyAttendenceList', JSON.stringify(list));
}

function getActiveUser(){
    var raw = sessionStorage.getItem("User"); 
    var user = JSON.parse(raw);
    return user;
}

function setActiveUser(user){
    sessionStorage.setItem("User", JSON.stringify(user)); 
}

function removeActiveUser(){
    sessionStorage.setItem("User", null); 
}
