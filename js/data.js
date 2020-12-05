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

    var stud_1 = sec_1.registerStudent("Maninder Bassi");
    var stud_2 = sec_1.registerStudent("Jagveer Singh");
    var stud_3 = sec_1.registerStudent("Tina Kelly");
    var stud_4 = sec_1.registerStudent("Johnny Sons");
    var stud_5 = sec_1.registerStudent("Jack Black");
    var stud_6 = sec_1.registerStudent("Aaron Smith");  
    var stud_7 = sec_1.registerStudent("Matimbo Johnson");

    sec_1.addStudentToClass("French1", stud_1); 
    sec_1.addStudentToClass("French1", stud_2);
    sec_1.addStudentToClass("French1", stud_3);
    sec_1.addStudentToClass("French1", stud_7); 
    sec_1.addStudentToClass("Math1", stud_4); 
    sec_1.addStudentToClass("Math1", stud_5); 
    sec_1.addStudentToClass("Math1", stud_6);
    sec_1.addStudentToClass("Math1", stud_1);



    var par_1 = new Parent("Mary", "par1", "1234567", "mary@gmail.com"); 
    var par_2 = new Parent("Ostroff", "par2", "1234567", "ostroff@gmail.com"); 
    ParentList.push(par_1);         // TEMPORARY
    ParentList.push(par_2);         // TEMPORARY
    par_1.addStudent(stud_1.Stdid, stud_1.regKey);
    
    var class1_attendance = teach_1.createAttendance("French1", 2020,11,01); 
    var class1_attendance = teach_1.createAttendance("French1", 2020,11,02); 
    var class1_attendance = teach_1.createAttendance("French1", 2020,11,03); 

    teach_1.markStatus("French1", new Date(2020,11,01), stud_1.Stdid ,"P"); 
    teach_1.markStatus("French1", new Date(2020,11,02), stud_1.Stdid ,"A"); 
    teach_1.markStatus("French1", new Date(2020,11,03), stud_1.Stdid ,"AD"); 

    teach_1.markStatus("French1", new Date(), stud_2.Stdid ,"A"); 

    var class2_attendance = teach_2.createAttendance("Math1",2020,11,02); 
    teach_1.markStatus("Math1", new Date(2020,11,02), stud_1.Stdid ,"P"); 
    teach_1.markStatus("Math1", new Date(), stud_4.Stdid ,"P"); 
    teach_1.markStatus("Math1", new Date(), stud_5.Stdid ,"A"); 

    setGlobalAttendenceList(GlobalAttendenceList); 
    setParentList(ParentList);
    setEmployeeList(EmployeeList); 
    setGlobalClassList(GlobalClassList);    

}

function getEmployeeList(){
    var raw = sessionStorage.getItem('EmployeeList');
    var list = JSON.parse(raw);
    if (list){
        EmployeeList = list; 
    }
    return list;
}

function setEmployeeList(list){
    EmployeeList = list; 
    sessionStorage.setItem('EmployeeList', JSON.stringify(list));
}

function getGlobalClassList(){
    var raw = sessionStorage.getItem('GlobalClassList');
    var list = JSON.parse(raw);
    if (list){
        GlobalClassList = list; 
    }
    return list;
}

function setGlobalClassList(list){
    GlobalClassList = list; 
    sessionStorage.setItem('GlobalClassList', JSON.stringify(list));
}

function getStudentList(){
    var raw = sessionStorage.getItem('StudentList');
    var list = JSON.parse(raw);
    if (list){
        StudentList = list; 
    }
    return list;
}

function setStudentList(list){
    StudentList = list; 
    sessionStorage.setItem('StudentList', JSON.stringify(list));
}

function getParentList(){
    var raw = sessionStorage.getItem('ParentList');
    var list = JSON.parse(raw);
    if (list){
        ParentList = list; 
    }
    return list;
}

function setParentList(list){
    ParentList = list; 
    sessionStorage.setItem('ParentList', JSON.stringify(list));
}

function getGlobalAttendenceList(){
    var raw = sessionStorage.getItem('GlobalAttendenceList');
    var list = JSON.parse(raw);
    if (list){
        GlobalAttendenceList = list; 
    }
    return list;
}

function setGlobalAttendenceList(list){
    GlobalAttendenceList = list; 
    sessionStorage.setItem('GlobalAttendenceList', JSON.stringify(list));
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

