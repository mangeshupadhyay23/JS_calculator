document.getElementById('number').value = 0;

var n,a,no=0,b ;
var n1,n2 ;
  function getdata(n){

    var a= document.getElementById('number').value;
    a = a*10 + n;
    document.getElementById('number').value = a;
    a =   document.getElementById('number').value;

}
function equal(){
  if(no==0)
  {
  n1=document.getElementById('number').value ;
  document.getElementById('number').value = 0;
  document.getElementById('demo').innerHTML= n1;
  document.getElementById('heading').innerHTML='Please enter second number and then press equal';
  no= 1;
  }
else
  {
    n2=document.getElementById('number').value ;
    document.getElementById('number').value = 0;
    document.getElementById('demo1').innerHTML= n2;
    document.getElementById('heading').innerHTML='Please select the operator';

  }

}


  function operation(b){
  switch (b) {
    case '+':
      document.getElementById('number').value =   Number(n1)+Number(n2);
      document.getElementById('heading').innerHTML='Result';
      break;
    case '-':
      document.getElementById('number').value = "Result="+ Number(n1)-Number(n2);
        document.getElementById('heading').innerHTML='Result';
      break;
    case '*':
      document.getElementById('number').value = "Result=" + Number(n1)*Number(n2);
      break;
    case '/':
    document.getElementById('number').value = "Result=" + Number(n1)/Number(n2);
      break;


    default:
      document.getElementById('number').value = 'not valid';

  }
}
function refresh() {

  location.reload();

}
