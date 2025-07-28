let user = [
    {
        name: "Praveen Kumar S",
        password: "Praveen@123",
        AccountNumber: 41110998,
        userId: 9876543210,
        type: "Admin",
        currentAmount: 75000
    },
    {
        name: "Prasanna Raj R",
        password: "prasannaraj444",
        AccountNumber: 41110995,
        userId: 123456789,
        type: "user",
        currentAmount: 15000
    },
    {
        name: "Pradheep S",
        password: "Pradheep@123",
        AccountNumber: 39845723,
        userId: 9363438391,
        type: "user",
        currentAmount: 5000
    },
    {
        name: "Ravi Patel",
        password: "ravi427@",
        AccountNumber: 41117733,
        userId: 2844808687,
        type: "user",
        currentAmount: 38000
    },
    {
        name: "Raj Rao",
        password: "raj858@",
        AccountNumber: 41115684,
        userId: 2862588879,
        type: "user",
        currentAmount: 22000
    },
    {
        name: "Raj Nair",
        password: "raj558@",
        AccountNumber: 41116585,
        userId: 4334723757,
        type: "Admin",
        currentAmount: 67000
    },
    {
        name: "Suresh Rao",
        password: "suresh344@",
        AccountNumber: 41111884,
        userId: 3557718741,
        type: "user",
        currentAmount: 12000
    },
    {
        name: "Raj Nair",
        password: "raj397@",
        AccountNumber: 41117082,
        userId: 4094720328,
        type: "user",
        currentAmount: 43000
    },
    {
        name: "Suresh Joshi",
        password: "suresh178@",
        AccountNumber: 41116605,
        userId: 2773158987,
        type: "Admin",
        currentAmount: 91000
    },
    {
        name: "Suresh Kumar",
        password: "suresh668@",
        AccountNumber: 41113690,
        userId: 1376909828,
        type: "user",
        currentAmount: 14000
    },
    {
        name: "Ravi Verma",
        password: "ravi716@",
        AccountNumber: 41110350,
        userId: 9174450297,
        type: "user",
        currentAmount: 25000
    }
];

let upacno;
let uname;
let upassword;
let uAccountNumber;
let userid;
let type;
let ck="No";
let ind;
but = document.getElementById("login");
sel = document.getElementById("select");
id = document.getElementById("id");
pass = document.getElementById("password");
auth = document.getElementById("Authent");

det = document.getElementById("det");
det.style.display="none";

ckbalance = document.getElementById("ck-balance");

AcName = document.getElementById("Ac-Name");
AcNumber=document.getElementById("Ac-Number");
AcNum = document.getElementById("Ac-Num");
AcId=document.getElementById("Ac-Id");
Actype=document.getElementById("Ac-type");
userpage = document.getElementById("userpage");
detback = document.getElementById("det-back");
userpage.style.display="none";
AcUser = document.getElementById("Ac-User");
Acdet = document.getElementById("Ac-Det");


but.addEventListener("click",event=>{
    userid = id.value;
    upassword = pass.value;
    type = sel.value;
   
    for (i of user){
        if(i.userId == userid && i.password == upassword && i.type == type){
            ind = i;
            ck = "Yes";
        }
    }
    if(ck == "Yes"){
       auth.style.display = "none";
       userpage.style.display="";
        AcName.textContent = ind.name;
        AcNumber.textContent = ind.AccountNumber;
        AcId.textContent = ind.userId;
        Actype.textContent = ind.type;
        AcUser.textContent = userid;
        upacno = String(ind.AccountNumber).slice(5,8);
        AcNum.textContent =`AC/NO-xx`+upacno;
    }
    Acdet.addEventListener("click",event =>{
    userpage.style.display="none";
    det.style.display="";});
    detback.addEventListener("click",event=>{
        userpage.style.display="";
        det.style.display="none";
    });
    ckbalance.addEventListener("click",event=>{
        ckbalance.textContent=`Account Balance: ₹${ind.currentAmount}`;
        ckbalance.style.border="none";
    });
});