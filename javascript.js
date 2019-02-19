const colorBtn = document.querySelector('.colorBtn');
const bodyBcg = document.querySelector('body');

const colors=['yellow','red','green','blue'];

colorBtn.addEventListener('click',changeColor);
//fuction 
function changeColor(){
  //  bodyBcg.style.backgroundColor =colors[2];
  let random =Math.floor(Math.random()*colors.length)
  bodyBcg.style.backgroundColor =colors[random];
}
