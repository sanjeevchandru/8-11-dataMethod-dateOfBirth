document.write("Find age in date of birth"+"<br>");
document.write("---------------------------------"+"<br>");
let a=prompt("Enter the year of Birth :");
let b=prompt("Enter a month of Birth :");
let c=prompt("Enter a date of Birth :");
const d1=new Date();
const d2=new Date(a,b,c);

document.write("Today  : "+d1+"<br>");
document.write("Your Birthday date : "+d2+"<br>");

let x=d1.getFullYear();
let x2=d1.getMonth();
let y=d2.getFullYear();
let y2=d2.getMonth();

let q=x-y;
if(x2>y2)
{
    document.write("Your age is :"+q);
}
else if(x2<=y2)
{  
    document.write("your age is "+(q+1));
}
else
{
    document.write("Is not a number");
}



