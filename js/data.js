// Initiates the starter data for the entire school system
function InitData()
{
    // Creation of Administrator
    var admin_1 = new Admin("Adam", "admin_1" , "1234"); 
    admin_1.addToList();    // forced push into the Global EmployeeList


    // Creation of Secretaries
    var sec_1 = admin_1.addEmployee("Susan Boyle", "sec1", "123", "Secretary");
    var sec_2 = admin_1.addEmployee("Kaitlyn Ford", "sec2", "123", "Secretary");


    // Creation of FT-Teachers
    var teach_1 = admin_1.addEmployee("John Marston", "teach1", "12345", "Teacher"); 
    var teach_2 = admin_1.addEmployee("Jerry King", "teach2", "123456", "Teacher"); 
    var teach_3 = admin_1.addEmployee("Hina Yamamoto", "teach3", "123456", "Teacher");


    // Creation of Supply-Teachers
    var supply_1 = sec_1.createTempSupply("Blerim Meehmoti");
    var supply_2 = sec_1.createTempSupply("Dom Anastazi");


    // Creation of Students
    var stud_1 = sec_1.registerStudent("Maninder Bassi");
    var stud_2 = sec_1.registerStudent("Jagveer Singh");
    var stud_3 = sec_1.registerStudent("Tina Kelly");
    var stud_4 = sec_1.registerStudent("Johnny Sins");
    var stud_5 = sec_1.registerStudent("Jack Black");
    var stud_6 = sec_1.registerStudent("Aaron Smith");  
    var stud_7 = sec_1.registerStudent("Matimbo Johnson");
    var stud_8 = sec_2.registerStudent("Harley Dean");
    var stud_9 = sec_2.registerStudent("James Charles");
    var stud_10 = sec_2.registerStudent("Eren Yeager");
    var stud_11 = sec_2.registerStudent("Jordi el Nino");
    var stud_12 = sec_2.registerStudent("Spike Spiegel");
    var stud_13 = sec_2.registerStudent("Linus Sebastien");
    var stud_14 = sec_2.registerStudent("Dennisveer Singh");
    var stud_15 = sec_2.registerStudent("Sidhu Moosewala");
    var stud_16 = sec_2.registerStudent("Levi Ackermann");
    var stud_17 = sec_2.registerStudent("Song Zhao");
    var stud_18 = sec_2.registerStudent("Tyroil Smoochie-Wallace");
    var stud_19 = sec_2.registerStudent("Goolius Boozler");
    var stud_20 = sec_2.registerStudent("Vagonius Thicket-Suede");
    var stud_21 = sec_2.registerStudent("Cosgrove Shumway");
    var stud_22 = sec_2.registerStudent("Blyrone Blashington");
    var stud_23 = sec_2.registerStudent("Mergatroid Skittle");
    var stud_24 = sec_2.registerStudent("Bismo Funyuns");
    var stud_25 = sec_2.registerStudent("Decatholac Mango");
    var stud_26 = sec_2.registerStudent("Coznester Smiff");
    var stud_27 = sec_2.registerStudent("Bisquiteen Trisket");
    var stud_28 = sec_2.registerStudent("Jammie Jammie-Jammie");
    var stud_29 = sec_2.registerStudent("Eggsnuizitine Buble-Shwinslow");
    var stud_30 = sec_2.registerStudent("Splendiferous Finch");


    // Creation of Classes    
    var class1 = sec_1.addClass("French", teach_1, "9:00am - 10:30am",[]); 
    var class2 = sec_1.addClass("Math", teach_2, "10:30am - 12:00pm",[]);
    var class3 = sec_1.addClass("English", teach_3, "1:00pm - 2:30pm",[]); 
    

    // Adding Students to Classes
    sec_1.addStudentToClass("French", stud_1.Stdid);    sec_1.addStudentToClass("English", stud_1.Stdid);
    sec_1.addStudentToClass("French", stud_2.Stdid);    sec_1.addStudentToClass("English", stud_2.Stdid); 
    sec_1.addStudentToClass("French", stud_3.Stdid);    sec_1.addStudentToClass("English", stud_3.Stdid);
    sec_1.addStudentToClass("French", stud_4.Stdid);    sec_1.addStudentToClass("English", stud_4.Stdid);
    sec_1.addStudentToClass("French", stud_5.Stdid);    sec_1.addStudentToClass("English", stud_5.Stdid);
    sec_1.addStudentToClass("French", stud_6.Stdid);    sec_1.addStudentToClass("English", stud_6.Stdid);
    sec_1.addStudentToClass("French", stud_7.Stdid);    sec_1.addStudentToClass("English", stud_7.Stdid);
    sec_1.addStudentToClass("French", stud_8.Stdid);    sec_1.addStudentToClass("English", stud_8.Stdid); 
    sec_1.addStudentToClass("French", stud_9.Stdid);    sec_1.addStudentToClass("English", stud_9.Stdid);
    sec_1.addStudentToClass("French", stud_10.Stdid);   sec_1.addStudentToClass("English", stud_10.Stdid);

    sec_1.addStudentToClass("Math", stud_11.Stdid);     sec_1.addStudentToClass("English", stud_11.Stdid);
    sec_1.addStudentToClass("Math", stud_12.Stdid);     sec_1.addStudentToClass("English", stud_12.Stdid);
    sec_1.addStudentToClass("Math", stud_13.Stdid);     sec_1.addStudentToClass("English", stud_13.Stdid);
    sec_1.addStudentToClass("Math", stud_14.Stdid);     sec_1.addStudentToClass("English", stud_14.Stdid); 
    sec_1.addStudentToClass("Math", stud_15.Stdid);     sec_1.addStudentToClass("English", stud_15.Stdid);
    sec_1.addStudentToClass("Math", stud_16.Stdid);     sec_1.addStudentToClass("English", stud_16.Stdid);
    sec_1.addStudentToClass("Math", stud_17.Stdid);     sec_1.addStudentToClass("English", stud_17.Stdid);
    sec_1.addStudentToClass("Math", stud_18.Stdid);     sec_1.addStudentToClass("English", stud_18.Stdid);
    sec_1.addStudentToClass("Math", stud_19.Stdid);     sec_1.addStudentToClass("English", stud_19.Stdid);
    sec_1.addStudentToClass("Math", stud_20.Stdid);     sec_1.addStudentToClass("English", stud_20.Stdid);

    sec_1.addStudentToClass("French", stud_21.Stdid);   sec_1.addStudentToClass("Math", stud_21.Stdid);
    sec_1.addStudentToClass("French", stud_22.Stdid);   sec_1.addStudentToClass("Math", stud_22.Stdid);
    sec_1.addStudentToClass("French", stud_23.Stdid);   sec_1.addStudentToClass("Math", stud_23.Stdid);
    sec_1.addStudentToClass("French", stud_24.Stdid);   sec_1.addStudentToClass("Math", stud_24.Stdid);
    sec_1.addStudentToClass("French", stud_25.Stdid);   sec_1.addStudentToClass("Math", stud_25.Stdid);
    sec_1.addStudentToClass("French", stud_26.Stdid);   sec_1.addStudentToClass("Math", stud_26.Stdid);
    sec_1.addStudentToClass("French", stud_27.Stdid);   sec_1.addStudentToClass("Math", stud_27.Stdid);
    sec_1.addStudentToClass("French", stud_28.Stdid);   sec_1.addStudentToClass("Math", stud_28.Stdid);
    sec_1.addStudentToClass("French", stud_29.Stdid);   sec_1.addStudentToClass("Math", stud_29.Stdid);
    sec_1.addStudentToClass("French", stud_30.Stdid);   sec_1.addStudentToClass("Math", stud_30.Stdid);

    
    setStudentList(StudentList);
    setGlobalAttendenceList(GlobalAttendenceList); 
    setParentList(ParentList);
    setEmployeeList(EmployeeList); 
    setGlobalClassList(GlobalClassList);  

    // Creation of Parents
    var par_1 = new Parent("Mary", "par1", "1234567", "mary@gmail.com");
    var par_2 = new Parent("Ostroff", "par2", "1234567", "ostroff@gmail.com");
    var par_3 = new Parent("Dan", "par3", "1234567", "dan@gmail.com")
    var par_4 = new Parent("Connie", "par4", "1234567", "connie@gmail.com")
    var par_5 = new Parent("Sasha", "par5", "1234567", "sasha@gmail.com")
    ParentList.push(par_1);
    ParentList.push(par_2);
    ParentList.push(par_3);
    ParentList.push(par_4);
    ParentList.push(par_5);

    // Linking Parents to Existing Students
    par_1.addStudent(stud_1.Stdid, stud_1.regKey, par_1.username);
    par_1.addStudent(stud_3.Stdid, stud_3.regKey, par_1.username);
    par_2.addStudent(stud_4.Stdid, stud_4.regKey, par_2.username);
    par_2.addStudent(stud_5.Stdid, stud_5.regKey, par_2.username);
    par_2.addStudent(stud_7.Stdid, stud_7.regKey, par_2.username);
    par_3.addStudent(stud_8.Stdid, stud_8.regKey, par_3.username);
    par_4.addStudent(stud_15.Stdid, stud_15.regKey, par_4.username);
    par_5.addStudent(stud_19.Stdid, stud_19.regKey, par_5.username);
    par_5.addStudent(stud_26.Stdid, stud_26.regKey, par_5.username);

    
    var class1_attendance = teach_1.createAttendance("French", 2020,11,01); 
    var class1_attendance = teach_1.createAttendance("French", 2020,11,02); 
    var class1_attendance = teach_1.createAttendance("French", 2020,11,03);
    var class1_attendance = teach_1.createAttendance("French", 2020,11,04); 
    var class1_attendance = teach_1.createAttendance("French", 2020,11,05); 


    teach_1.markStatus("French", new Date(2020,11,01), stud_1.Stdid, "P"); 
    teach_1.markStatus("French", new Date(2020,11,02), stud_1.Stdid, "A"); 
    teach_1.markStatus("French", new Date(2020,11,03), stud_1.Stdid, "AD");


    // Marking Status of Student in French Class
    teach_1.markStatus("French", new Date(2020,11,05), stud_1.Stdid, "P");      teach_1.markStatus("French", new Date(2020,11,05), stud_21.Stdid, "P");
    teach_1.markStatus("French", new Date(2020,11,05), stud_2.Stdid, "P");      teach_1.markStatus("French", new Date(2020,11,05), stud_22.Stdid, "A");
    teach_1.markStatus("French", new Date(2020,11,05), stud_3.Stdid, "P");      teach_1.markStatus("French", new Date(2020,11,05), stud_23.Stdid, "P");
    teach_1.markStatus("French", new Date(2020,11,05), stud_4.Stdid, "AD");     teach_1.markStatus("French", new Date(2020,11,05), stud_24.Stdid, "P");
    teach_1.markStatus("French", new Date(2020,11,05), stud_5.Stdid, "A");      teach_1.markStatus("French", new Date(2020,11,05), stud_25.Stdid, "P");
    teach_1.markStatus("French", new Date(2020,11,05), stud_6.Stdid, "A");      teach_1.markStatus("French", new Date(2020,11,05), stud_26.Stdid, "P");
    teach_1.markStatus("French", new Date(2020,11,05), stud_7.Stdid, "AD");     teach_1.markStatus("French", new Date(2020,11,05), stud_27.Stdid, "P");
    teach_1.markStatus("French", new Date(2020,11,05), stud_8.Stdid, "P");      teach_1.markStatus("French", new Date(2020,11,05), stud_28.Stdid, "AD");
    teach_1.markStatus("French", new Date(2020,11,05), stud_9.Stdid, "P");      teach_1.markStatus("French", new Date(2020,11,05), stud_29.Stdid, "P");
    teach_1.markStatus("French", new Date(2020,11,05), stud_10.Stdid, "P");     teach_1.markStatus("French", new Date(2020,11,05), stud_30.Stdid, "P");
    teach_1.submitAttendance("French", new Date(2020,11,05));

    teach_1.markStatus("French", new Date(), stud_2.Stdid ,"A");

    var class2_attendance = teach_2.createAttendance("Math",2020,11,02); 
    teach_1.markStatus("Math", new Date(2020,11,02), stud_1.Stdid ,"P"); 
    teach_1.markStatus("Math", new Date(), stud_4.Stdid ,"P"); 
    teach_1.markStatus("Math", new Date(), stud_5.Stdid ,"A"); 

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

