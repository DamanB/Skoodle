$(document).ready(function () {
    console.log("JQUERY IS A GO");
    var students = [
        ["1", "Math2"],
        ["2", "Math1"],
        ["3", "Math2"],
        ["4", "Science1"],
        ["5", "Science1"],
        ["6", "Math2"],
        ["7", "Geo1"]
    ];

    //populate select 
    var classes = ["Select Class", "Math1", "Math2", "Science1"];
    classes.forEach(addToDropdown);

    //Look for changes in select 
    $(document).on('change', '#classList', function(){
        $("#studentList tbody").empty()
        getStudents($("#classList").find(":selected").text(),students);
    });
});

function addToDropdown(value) {
    $("#classList").append('<option value=' + value + '>' + value + '</option>');
}

function getStudents(classroom, students) {
    students.forEach(function(student) {
        if (student[1] === classroom){
            addToTable(student);
        }
    });
}

function addToTable(value){
    console.log("adding student: " + value);
    $('#studentList tbody').append('<tr><td>' + value[0] + '</td><td>' + value[1] + '</td></tr>');
}

