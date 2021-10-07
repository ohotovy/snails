import SnailRacer from './SnailRacer';
  
let snail = null;
const app=document.getElementById('app');
fetch(`https://classes.codingbootcamp.cz/assets/classes/api/snails.php?number=5`)
.then((resp) => resp.json())
.then((json) => {
for (let i = 0 ; i < json.length ; i++) {
        snail = new SnailRacer(`${json[i].name}`,`${json[i].color}`,json[i].velocity)
        app.appendChild(snail.mount())
    }
})