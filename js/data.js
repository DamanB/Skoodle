// Initiates the starter data for the entire school system
function InitData()
{
    // Creation of Administrator
    var admin_1 = new Admin("Adam", "admin_1" , "1234"); 
    admin_1.addToList();    // forced push into the Global EmployeeList

    // Creation of Secretaries
    var sec_1 = admin_1.addEmployee("Susan Boyle", "sec1", "123", "Secretary");
    var sec_2 = admin_1.addEmployee("Kaitlyn Ford", "sec2", "123", "Secretary");
    var sec_3 = admin_1.addEmployee("Carole Beck", "sec3", "123", "Secretary");

    // Creation of FT-Teachers
    var teach_1 = admin_1.addEmployee("John Marston", "teach1", "12345", "Teacher"); 
    var teach_2 = admin_1.addEmployee("Jerry King", "teach2", "123456", "Teacher"); 
    var teach_3 = admin_1.addEmployee("Hina Yamamoto", "teach3", "123456", "Teacher");
    var teach_4 = admin_1.addEmployee("Tom Ford", "teach4", "123456", "Teacher");
    var teach_5 = admin_1.addEmployee("Sabrina Dang", "teach5", "123456", "Teacher");
    var teach_6 = admin_1.addEmployee("Robert Chan", "teach6", "123456", "Teacher");
    var teach_7 = admin_1.addEmployee("Daisy Ridley", "teach7", "123456", "Teacher");
    var teach_8 = admin_1.addEmployee("Lisa Aston", "teach8", "123456", "Teacher");
    var teach_9 = admin_1.addEmployee("Mia Khalifa", "teach9", "1234", "Teacher");

    // Creation of Supply-Teachers
    var supply_1 = sec_1.createTempSupply("Blerim Meehmoti");
    var supply_2 = sec_1.createTempSupply("Dom Anastazi");
    var supply_3 = sec_1.createTempSupply("Liz Fowler");
    var supply_3 = sec_2.createTempSupply("August Ames");

    // Creation of Students
    var stud_1 = sec_1.registerStudent("Maninder Bassi");
    var stud_2 = sec_1.registerStudent("Jagveer Singh");
    var stud_3 = sec_1.registerStudent("Tina Kelly");
    var stud_4 = sec_1.registerStudent("Johnny Sons");
    var stud_5 = sec_1.registerStudent("Jack Black");
    var stud_6 = sec_1.registerStudent("Aaron Smith");  
    var stud_7 = sec_1.registerStudent("Matimbo Johnson");
    var stud_8 = sec_2.registerStudent("Harley Dean");
    var stud_9 = sec_2.registerStudent("James Charles");
    var stud_10 = sec_2.registerStudent("Eren Yeager");
    var stud_11 = sec_2.registerStudent("Jordi el Nino");
    var stud_12 = sec_3.registerStudent("Spike Spiegel");
    var stud_13 = sec_2.registerStudent("Linus Sebastien");
    var stud_14 = sec_2.registerStudent("Dennisveer Singh");
    var stud_15 = sec_3.registerStudent("Sidhu Moosewala");
    var stud_16 = sec_3.registerStudent("Levi Ackermann");
    var stud_17 = sec_3.registerStudent("Song Zhao");
    var stud_18 = sec_3.registerStudent("Tyroil Smoochie-Wallace");
    var stud_19 = sec_3.registerStudent("Goolius Boozler");
    var stud_20 = sec_3.registerStudent("Vagonius Thicket-Suede");
    var stud_21 = sec_3.registerStudent("Cosgrove Shumway");
    var stud_22 = sec_3.registerStudent("Blyrone Blashington");
    var stud_23 = sec_3.registerStudent("Mergatroid Skittle");
    var stud_24 = sec_3.registerStudent("Bismo Funyuns");
    var stud_25 = sec_3.registerStudent("Decatholac Mango");
    var stud_26 = sec_3.registerStudent("Coznester Smiff");
    var stud_27 = sec_3.registerStudent("Bisquiteen Trisket");
    var stud_28 = sec_3.registerStudent("Jammie Jammie-Jammie");
    var stud_29 = sec_3.registerStudent("Eggsnuizitine Buble-Shwinslow");
    var stud_30 = sec_3.registerStudent("Splendiferous Finch");
    var stud_31 = sec_2.registerStudent("Gon Freecs");
    var stud_32 = sec_2.registerStudent("Dick Cheney");
    var stud_33 = sec_3.registerStudent("Ugly Boy");
    var stud_34 = sec_2.registerStudent("Quatro Quartro");
    var stud_35 = sec_2.registerStudent("Dan Smith");
    var stud_36 = sec_3.registerStudent("Lucius Blucius");
    var stud_37 = sec_3.registerStudent("Arnold Swartz");
    var stud_38 = sec_3.registerStudent("Communist Manifesto");
    var stud_39 = sec_3.registerStudent("XWing Dings");
    var stud_40 = sec_3.registerStudent("Benedict Cumberbastch");
    var stud_41 = sec_3.registerStudent("Cony Patel");
    var stud_42 = sec_3.registerStudent("Super Man");
    var stud_43 = sec_3.registerStudent("Johnny Sins");
    var stud_44 = sec_3.registerStudent("Mandingo Bingo");
    var stud_45 = sec_3.registerStudent("TJ AJ");
    var stud_46 = sec_3.registerStudent("Firstname Lastname");
    var stud_47 = sec_3.registerStudent("Torque (Construction Noise) Lewith");
    var stud_48 = sec_3.registerStudent("Turdine Cupcake");
    var stud_49 = sec_3.registerStudent("Morse Code");
    var stud_50 = sec_3.registerStudent("Egg Sandwich");
    var stud_51 = sec_3.registerStudent("Shakiriquan TGIF Carter");
    var stud_52 = sec_1.registerStudent("Davina Davis");
    var stud_53 = sec_1.registerStudent("Door Knob");
    var stud_54 = sec_1.registerStudent("Corn Cobs");
    var stud_55 = sec_1.registerStudent("Apple Picker");
    var stud_56 = sec_1.registerStudent("Kenny Blacksmith");
    var stud_57 = sec_1.registerStudent("Leah Gotti");  
    var stud_58 = sec_1.registerStudent("Rae Lil Black");
    var stud_59 = sec_2.registerStudent("Darcie Dolce");
    var stud_60 = sec_2.registerStudent("Sunny Leone");
    var stud_61 = sec_2.registerStudent("Blair Williams");
    var stud_62 = sec_2.registerStudent("Abella Danger");
    var stud_63 = sec_3.registerStudent("Dhruv Patel");
    var stud_64 = sec_2.registerStudent("Harleen Randhawa");
    var stud_65 = sec_2.registerStudent("Navjot Sangha");
    var stud_66 = sec_3.registerStudent("Kendall Jenner");
    var stud_67 = sec_3.registerStudent("Gigi Hadid");
    var stud_68 = sec_3.registerStudent("Kanye Norf");
    var stud_69 = sec_3.registerStudent("Jay Coleslaw");
    var stud_70 = sec_3.registerStudent("Em Anems");
    var stud_71 = sec_3.registerStudent("Chrissy Teigen");
    var stud_72 = sec_3.registerStudent("Sommer Ray");
    var stud_73 = sec_3.registerStudent("Ashley Graham");
    var stud_74 = sec_3.registerStudent("Mathilde Tanton");
    var stud_75 = sec_3.registerStudent("Billy Harrington");
    var stud_76 = sec_3.registerStudent("Van Dungeon");
    var stud_77 = sec_3.registerStudent("Leather Boot");
    var stud_78 = sec_3.registerStudent("Level1 Grunt");
    var stud_79 = sec_3.registerStudent("James Charles");
    var stud_80 = sec_3.registerStudent("Lebron James");
    var stud_81 = sec_3.registerStudent("Bronny James");
    var stud_82 = sec_2.registerStudent("Kemba Walker");
    var stud_83 = sec_2.registerStudent("Tacko Falls");
    var stud_84 = sec_3.registerStudent("Anthony Davis");
    var stud_85 = sec_2.registerStudent("David Cho");
    var stud_86 = sec_2.registerStudent("Andy Smithers");
    var stud_87 = sec_3.registerStudent("Jemario Moon");
    var stud_88 = sec_3.registerStudent("Jeff Hardy");
    var stud_89 = sec_3.registerStudent("Kawhi Leotard");
    var stud_90 = sec_3.registerStudent("Kyrie Icing");
    var stud_91 = sec_3.registerStudent("Mafuzzy Wade");
    var stud_92 = sec_3.registerStudent("Cofi Kingston");
    var stud_93 = sec_3.registerStudent("Black Coffee");
    var stud_94 = sec_3.registerStudent("Jack White");
    var stud_95 = sec_3.registerStudent("Leo Messi");
    var stud_96 = sec_3.registerStudent("Andrea Biryani");
    var stud_97 = sec_3.registerStudent("Manu Ginobili");
    var stud_98 = sec_3.registerStudent("Demar DeRozen");
    var stud_99 = sec_3.registerStudent("Klay Thompson");
    var stud_100 = sec_3.registerStudent("Steph Smellycurry");
    var stud_101 = sec_3.registerStudent("Butter Chiken");
    var stud_102 = sec_3.registerStudent("Zion Williamson's Right Leg");
    var stud_103 = sec_3.registerStudent("Lonzo Balls");

    // Creation of Classes    
    var class1 = sec_1.addClass("French", teach_1, "9:00am - 10:30am",[]); 
    var class2 = sec_1.addClass("Math", teach_2, "9:00am - 10:30am",[]);

    var class3 = sec_1.addClass("English", teach_3, "10:30am - 12:00pm",[]); 
    var class4 = sec_1.addClass("Geography", teach_4, "10:30am - 12:00pm",[]); 

    var class5 = sec_1.addClass("Coding", teach_5, "12:00pm - 1:30pm",[]);
    var class6 = sec_2.addClass("Cooking", teach_6, "12:00pm - 1:30pm", []);
    var class7 = sec_2.addClass("Gym", teach_7, "12:00pm - 1:30pm", []);

    var class8 = sec_2.addClass("History", teach_8, "1:30pm - 3:00pm", []);
    var class9 = sec_2.addClass("Civics", teach_9, "1:30pm - 3:00pm", []);

    
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
    sec_1.addStudentToClass("French", stud_11.Stdid);   sec_1.addStudentToClass("English", stud_11.Stdid);
    sec_1.addStudentToClass("French", stud_12.Stdid);   sec_1.addStudentToClass("English", stud_12.Stdid);

    sec_1.addStudentToClass("Math", stud_13.Stdid);    sec_1.addStudentToClass("Geography", stud_13.Stdid);
    sec_1.addStudentToClass("Math", stud_14.Stdid);    sec_1.addStudentToClass("Geography", stud_14.Stdid); 
    sec_1.addStudentToClass("Math", stud_15.Stdid);    sec_1.addStudentToClass("Geography", stud_15.Stdid);
    sec_1.addStudentToClass("Math", stud_16.Stdid);    sec_1.addStudentToClass("Geography", stud_16.Stdid);
    sec_1.addStudentToClass("Math", stud_17.Stdid);    sec_1.addStudentToClass("Geography", stud_17.Stdid);
    sec_1.addStudentToClass("Math", stud_18.Stdid);    sec_1.addStudentToClass("Geography", stud_18.Stdid);
    sec_1.addStudentToClass("Math", stud_19.Stdid);    sec_1.addStudentToClass("Geography", stud_19.Stdid);
    sec_1.addStudentToClass("Math", stud_20.Stdid);    sec_1.addStudentToClass("Geography", stud_20.Stdid); 
    sec_1.addStudentToClass("Math", stud_21.Stdid);    sec_1.addStudentToClass("Geography", stud_21.Stdid);
    sec_1.addStudentToClass("Math", stud_22.Stdid);   sec_1.addStudentToClass("Geography", stud_22.Stdid);
    sec_1.addStudentToClass("Math", stud_23.Stdid);   sec_1.addStudentToClass("Geography", stud_23.Stdid);
    sec_1.addStudentToClass("Math", stud_24.Stdid);   sec_1.addStudentToClass("Geography", stud_24.Stdid);
    
    setStudentList(StudentList);
    setGlobalAttendenceList(GlobalAttendenceList); 
    setParentList(ParentList);
    setEmployeeList(EmployeeList); 
    setGlobalClassList(GlobalClassList);  



    var par_1 = new Parent("Mary", "par1", "1234567", "mary@gmail.com"); 
    var par_2 = new Parent("Ostroff", "par2", "1234567", "ostroff@gmail.com"); 
    ParentList.push(par_1);         // TEMPORARY
    ParentList.push(par_2);         // TEMPORARY
    par_1.addStudent(stud_1.Stdid, stud_1.regKey, par_1.username);
    
    var class1_attendance = teach_1.createAttendance("French", 2020,11,01); 
    var class1_attendance = teach_1.createAttendance("French", 2020,11,02); 
    var class1_attendance = teach_1.createAttendance("French", 2020,11,03);
    var class1_attendance = teach_1.createAttendance("French", 2020,11,04); 
    var class1_attendance = teach_1.createAttendance("French", 2020,11,05); 


    teach_1.markStatus("French", new Date(2020,11,01), stud_1.Stdid, "P"); 
    teach_1.markStatus("French", new Date(2020,11,02), stud_1.Stdid, "A"); 
    teach_1.markStatus("French", new Date(2020,11,03), stud_1.Stdid, "AD");



    // Marking Status of Student in French Class
    teach_1.markStatus("French", new Date(2020,11,05), stud_1.Stdid, "P");
    teach_1.markStatus("French", new Date(2020,11,05), stud_2.Stdid, "P");
    teach_1.markStatus("French", new Date(2020,11,05), stud_3.Stdid, "P");
    teach_1.markStatus("French", new Date(2020,11,05), stud_4.Stdid, "P");
    teach_1.markStatus("French", new Date(2020,11,05), stud_5.Stdid, "A");
    teach_1.markStatus("French", new Date(2020,11,05), stud_6.Stdid, "P");
    teach_1.markStatus("French", new Date(2020,11,05), stud_7.Stdid, "P");
    teach_1.markStatus("French", new Date(2020,11,05), stud_8.Stdid, "P");
    teach_1.markStatus("French", new Date(2020,11,05), stud_9.Stdid, "P");
    teach_1.markStatus("French", new Date(2020,11,05), stud_10.Stdid, "P");
    teach_1.markStatus("French", new Date(2020,11,05), stud_11.Stdid, "P");
    teach_1.markStatus("French", new Date(2020,11,05), stud_12.Stdid, "P");

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

