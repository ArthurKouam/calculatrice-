
function add(index) {
    if(index!=11)
        document.getElementById("ecr").value =document.getElementById("ecr").value + index;
    else
        if(!document.getElementById("ecr").value.includes("."))
            document.getElementById("ecr").value =document.getElementById("ecr").value + "."; 
}
function oper(b) {
    var a;
    document.getElementById("remp").value = b;
    a = document.getElementById("ecr").value;
    document.getElementById("temp").value = a;
    document.getElementById("ecr").value = "";
    return a;
}
function egale() {
    var a = document.getElementById("temp").value;
    var orv = document.getElementById("remp").value;
    orv = parseInt(orv);
    var b = document.getElementById("ecr").value;
    b = parseFloat(b);
    a = parseFloat(a);
    if(orv == 1)
        document.getElementById("ecr").value = a+b;
    else if(orv == 2)
        document.getElementById("ecr").value = a-b;
    else if(orv == 3)
        document.getElementById("ecr").value = a*b;
    else
        document.getElementById("ecr").value = a/b;
    console.log(a);
    console.log(b);
    document.getElementById("temp").value = "";
    var orv = document.getElementById("remp").value = "";
}


