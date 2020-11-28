class Admin 
{
    constructor(username,password,type)
    {
        this.username = username;
        this.password = password;
        this.type = "ADMIN"; 
    }


}

class Secretary
{
    constructor(name, username, password,type)
    {
        this.name = name;
        this.username = username;
        this.password = password;
        this.type = "SECRETARY"; 
    }


}

class Teacher
{
    constructor(name,username,password,type)
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


class Student 
{
    constructor(name,tempid) 
    {
      this.name = name;
      this.tempid = tempid; 
    }
}



