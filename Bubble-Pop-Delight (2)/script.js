
if (navigator.userAgent.match(/Android/i)
  || navigator.userAgent.match(/webOS/i)
  || navigator.userAgent.match(/iPhone/i)
  || navigator.userAgent.match(/BlackBerry/i)
  || navigator.userAgent.match(/Windows Phone/i)) {

   document.getElementById("buttons").style.zoom = 0.5;
}
else {

}
if (window.self != window.top) { 
  document.getElementById("buttons").style.zoom = 0.5;
}
//totalpops localStorage
if (localStorage.getItem("totalp") != null) {
  document.getElementById("totalp").innerHTML = localStorage.getItem("totalp");
}
else {
  localStorage.setItem("totalp", 0);
  document.getElementById("totalp").innerHTML = localStorage.getItem("totalp");
}


var sessionp = 0;
document.getElementById("sessionp").innerHTML = sessionp;


let mobs = document.querySelectorAll('.mob');
let mobCount = 0;
var red = 0;
var blue = 0;
var green = 0;

var R = 0;
var G = 0;



var p1 = document.getElementById("p1");
var p2 = document.getElementById("p2");

var p4 = document.getElementById("p4");
var p5 = document.getElementById("p5");
var p6 = document.getElementById("p6");
var p7 = document.getElementById("p7");

p1.play();
var music = document.getElementById("music");
music.volume = 0.05;
music.loop = true;
music.play();

var gold = document.getElementById("gold");
var bomb = document.getElementById("bomb");

var pause = false;
document.getElementById("pauseeee").onclick = function() {
  pause = !pause;
  if (pause == true){
    music.pause();
    document.getElementById("pauseeee").src = "start.png";
  }
  else{
    music.play();
    document.getElementById("pauseeee").src = "pause.png";
  }
};

var confirmation = document.getElementById("confirmation");
confirmation.style.visibility = "hidden";

document.getElementById("restart").onclick = function() {
  confirmation.style.visibility = "visible";
  confirmation.style.opacity = "1";
  confirmation.classList.add("sconfirmation");
  setTimeout(function(){confirmation.classList.remove("sconfirmation");},1000);
 
}

function reset(){
 
    
    localStorage.setItem("totalp", 0);
    document.getElementById("totalp").innerHTML = localStorage.getItem("totalp");
    sessionp = 0;
    document.getElementById("sessionp").innerHTML = sessionp;

    pause = true;
    mobs.forEach(obj => {
      let randomtime = 0;
      if (mobCount < 500) {
        randomtime = Math.ceil(Math.random() * 1500);
      }
      else if (mobCount < 1000 && mobCount >= 500) {
        randomtime = Math.ceil(Math.random() * 3000);
      }
      else {

        randomtime = Math.ceil(Math.random() * 6000);

      }
      setTimeout(function() {
        obj.classList.add("popanimation");
        setTimeout(function() {
          obj.classList.remove("popanimation");
          document.getElementById("gamecontainer").removeChild(obj);
          let popsound = Math.ceil(Math.random() * 8);


          if (popsound == 1) {
            p1.play();
          }
          else if (popsound == 2) {
            p2.play();
          }
          else if (popsound == 3) {
            p6.play();
          }
          else if (popsound == 4) {
            p4.play();
          }
          else if (popsound == 5) {
            p5.play();
          }
          else if (popsound == 6) {
            p6.play();
          }
          else if (popsound == 7) {
            p7.play();
          }
          else {
            p2.play();
          }


        }, 125);

      }, randomtime);
      pause = false;
    });


    clearInterval(spawnMOBSInterval);
    document.getElementById("spawnspeeds").value = 100;

    spawnSpeed = parseInt(document.getElementById("spawnspeeds").value);
    spawnMOBSInterval = setInterval(spawnmob, parseInt(spawnSpeed));

    confirmation.classList.add("econfirmation");
    setTimeout(function(){confirmation.classList.remove("econfirmation");confirmation.style.visibility = "hidden";confirmation.style.opacity = "0";},1000);
  
}
function cclose(){
    confirmation.classList.add("econfirmation");
    setTimeout(function(){confirmation.classList.remove("econfirmation");confirmation.style.visibility = "hidden";confirmation.style.opacity = "0";},1000);
}

var spawnSpeed = parseInt(document.getElementById("spawnspeeds").value);
let spawnMOBSInterval = setInterval(spawnmob, parseInt(spawnSpeed));

var spawnspeedinput = document.getElementById("spawnspeeds");
spawnspeedinput.addEventListener("input", function() {
  clearInterval(spawnMOBSInterval);
  spawnSpeed = parseInt(document.getElementById("spawnspeeds").value);
  spawnMOBSInterval = setInterval(spawnmob, parseInt(spawnSpeed));
});



function spawnmob() {
  if (pause != true) {
    const mob = document.createElement('div');
    mob.id = `mob${mobCount}`;

    //mob spawn in random place
    const gameContainerRect = document.body.getBoundingClientRect();
    const randomX = Math.ceil(Math.random() * (window.innerWidth + 100));
    const randomY = Math.ceil(Math.random() * (window.innerHeight + 100));

    mob.style.top = `${randomY}px`;
    mob.style.left = `${randomX}px`;

    let borderWidth = Math.ceil(Math.random() * 10);
    mob.style.borderWidth = borderWidth + "px";


    let moblvl = Math.ceil(Math.random() * 1000);
    if (moblvl < 300) {
      mob.className = "mob";
      mob.classList.add("mobanimation");
      setTimeout(function() { mob.classList.remove("mobanimation") }, 500)
      mobs = document.querySelectorAll('.mob');
      mobs.forEach(obj => {
        if (damage(obj, mob) == true) {
          if (obj.style.backgroundColor == "red") {
            red++;
          }
          else if (obj.style.backgroundColor == "#00e1ff") {
            blue++;
          }
          else {
            green++;
          }
          if (red > blue && red > green) {
            let aaa = Math.ceil(Math.random() * 100);
            if (aaa < 96) {
              mob.style.backgroundColor = "red";
            }
            else {

            }
          }
          else if (blue > red && blue > green) {
            let aaa = Math.ceil(Math.random() * 100);
            if (aaa < 96) {
              mob.style.backgroundColor = "#00e1ff";
            }
            else {

            }
          }
          else if (green > red && green > blue) {
            let aaa = Math.ceil(Math.random() * 100);
            if (aaa < 96) {
              mob.style.backgroundColor = "#aeff00";
            }
            else {

            }
          }
          else {

          }
        }
        else {

        }


      });
    }
    else if (moblvl >= 300 && moblvl < 600) {
      mob.className = "mob";
      mob.classList.add("mob2");
      mob.classList.add("mobanimation");
      setTimeout(function() { mob.classList.remove("mobanimation") }, 500)
      mobs = document.querySelectorAll('.mob');
      mobs.forEach(obj => {
        if (damage(obj, mob) == true) {
          if (obj.style.backgroundColor == "red") {
            red++;
          }
          else if (obj.style.backgroundColor == "#00e1ff") {
            blue++;
          }
          else {
            green++;
          }
          if (red > blue && red > green) {
            let aaa = Math.ceil(Math.random() * 100);
            if (aaa < 96) {
              mob.style.backgroundColor = "red";
            }
            else {

            }
          }
          else if (blue > red && blue > green) {
            let aaa = Math.ceil(Math.random() * 100);
            if (aaa < 96) {
              mob.style.backgroundColor = "#00e1ff";
            }
            else {

            }
          }
          else if (green > red && green > blue) {
            let aaa = Math.ceil(Math.random() * 100);
            if (aaa < 96) {
              mob.style.backgroundColor = "#aeff00";
            }
            else {

            }
          }
          else {

          }
        }
        else {

        }


      });
    }

    else if (moblvl >= 600 && moblvl < 700) {
      mob.className = "mob";
      mob.classList.add("mob4");
      mob.classList.add("mobanimation");
      setTimeout(function() { mob.classList.remove("mobanimation") }, 500)
      mobs = document.querySelectorAll('.mob');
    }
    else if (moblvl >=860 && moblvl <870){
      mob.className = "mob";
      mob.classList.add("mob5");
      mob.classList.add("mobanimation");
      setTimeout(function() { mob.classList.remove("mobanimation") }, 500)
      mobs = document.querySelectorAll('.mob');
      mob.style.borderWidth = "10px";
    }
      else if (moblvl == 880){
        mob.className = "mob";
        mob.classList.add("mob6");
        mob.classList.add("mobanimation");
        setTimeout(function() { mob.classList.remove("mobanimation") }, 500)
        mobs = document.querySelectorAll('.mob');
        mob.style.borderWidth = "10px";
      }
    else {
      mob.className = "mob";
      mob.classList.add("mob3");
      mob.classList.add("mobanimation");
      setTimeout(function() { mob.classList.remove("mobanimation") }, 500)
      mobs = document.querySelectorAll('.mob');
      mobs.forEach(obj => {
        if (damage(obj, mob) == true) {
          if (obj.style.backgroundColor == "red") {
            red++;
          }
          else if (obj.style.backgroundColor == "#00e1ff") {
            blue++;
          }
          else {
            green++;
          }
          if (red > blue && red > green) {
            let aaa = Math.ceil(Math.random() * 100);
            if (aaa < 96) {
              mob.style.backgroundColor = "red";
            }
            else {

            }
          }
          else if (blue > red && blue > green) {
            let aaa = Math.ceil(Math.random() * 100);
            if (aaa < 96) {
              mob.style.backgroundColor = "#00e1ff";
            }
            else {

            }
          }
          else if (green > red && green > blue) {
            let aaa = Math.ceil(Math.random() * 100);
            if (aaa < 96) {
              mob.style.backgroundColor = "#aeff00";
            }
            else {

            }
          }
          else {

          }
        }
        else {

        }


      });
    }

    //adding mob
    document.getElementById("gamecontainer").appendChild(mob);
    mobCount++;
  }
}


var player = document.getElementById("player");
let playerY = parseInt(window.getComputedStyle(player).getPropertyValue("top"));
let playerX = parseInt(window.getComputedStyle(player).getPropertyValue("left"));
R = Math.floor(255 * (localStorage.getItem("totalp") / 5000));
G = Math.floor(215 * (localStorage.getItem("totalp") / 5000));
if (R > 255) {
  R = 255;
}
if (G > 215) {
  G = 215;
}

player.style.backgroundColor = "rgb(" + R + ", " + G + ",0)";


var mouseX = 0;
var mouseY = 0;
document.body.onclick= function() {
    
    mobs = document.querySelectorAll('.mob');
    mobs.forEach(mob => {
      
      if (damage(player,mob)){
        
        
        if (mob.classList.contains("mob5")){
        
        
        gold.play();
       
        mob.classList.add("popanimation");
       
        setTimeout(function() {

          mob.classList.remove("popanimation");

          document.getElementById("gamecontainer").removeChild(mob);

          //adding session pops
          
            gold.play();
            sessionp+= 50;
          document.getElementById("sessionp").innerHTML = sessionp;
          //adding totalpops
          localStorage.setItem("totalp", parseInt(localStorage.getItem("totalp")) + 50);
          document.getElementById("totalp").innerHTML = localStorage.getItem("totalp");
      
         

          /*
          "rgba(204, 102, 153, " + ratio / 2 + ")";
          black: rgba(0,0,0);
          gold: rgba(255,215,0)
          
          ratio = localStorage.getItem("totalp")/10000;
          
          */

          let popsound = Math.ceil(Math.random() * 8);


          if (popsound == 1) {
            p1.play();
          }
          else if (popsound == 2) {
            p2.play();
          }
          else if (popsound == 3) {
            p6.play();
          }
          else if (popsound == 4) {
            p4.play();
          }
          else if (popsound == 5) {
            p5.play();
          }
          else if (popsound == 6) {
            p6.play();
          }
          else if (popsound == 7) {
            p7.play();
          }
          else {
            p2.play();
          }


        }, 125);

      
      }
        if (mob.classList.contains('mob6')){
          bomb.play();
       
          mob.classList.add("popanimation");
       
        setTimeout(function() {
          sessionp+= 15;
          document.getElementById("sessionp").innerHTML = sessionp;
          //adding totalpops
          localStorage.setItem("totalp", parseInt(localStorage.getItem("totalp")) + 15);
          document.getElementById("totalp").innerHTML = localStorage.getItem("totalp");
          mob.classList.remove("popanimation");

          document.getElementById("gamecontainer").removeChild(mob);

          //adding session pops
          sessionp+= 10;
          document.getElementById("sessionp").innerHTML = sessionp;
          //adding totalpops
          localStorage.setItem("totalp", parseInt(localStorage.getItem("totalp")) + 10);
          document.getElementById("totalp").innerHTML = localStorage.getItem("totalp");

          
        }, 125);
        document.getElementById("spawnspeeds").value = 100;
        clearInterval(spawnMOBSInterval);
        spawnSpeed = parseInt(document.getElementById("spawnspeeds").value);
        spawnMOBSInterval = setInterval(spawnmob, parseInt(spawnSpeed));
        mobs.forEach(obj => {
         
          let randomtime = 0;
          if (mobCount < 500) {
            randomtime = Math.ceil(Math.random() * 500);
          }
          else if (mobCount < 1500 && mobCount >= 500) {
            randomtime = Math.ceil(Math.random() * 1500);
          }
          else {
    
            randomtime = Math.ceil(Math.random() * 3000);
    
          }
          setTimeout(function() {
            obj.classList.add("popanimation");
            
            sessionp++;
            document.getElementById("sessionp").innerHTML = sessionp;
            //adding totalpops
            localStorage.setItem("totalp", parseInt(localStorage.getItem("totalp")) + 1);
            document.getElementById("totalp").innerHTML = localStorage.getItem("totalp");
            R = Math.floor(255 * (localStorage.getItem("totalp") / 5000));
          G = Math.floor(215 * (localStorage.getItem("totalp") / 5000));
          if (R > 255) {
            R = 255;
          }
          if (G > 215) {
            G = 215;
          }

          player.style.backgroundColor = "rgb(" + R + ", " + G + ",0)";
            
            setTimeout(function() {
              obj.classList.remove("popanimation");
              document.getElementById("gamecontainer").removeChild(obj);
              let popsound = Math.ceil(Math.random() * 8);
    
    
              if (popsound == 1) {
                p1.play();
              }
              else if (popsound == 2) {
                p2.play();
              }
              else if (popsound == 3) {
                p6.play();
              }
              else if (popsound == 4) {
                p4.play();
              }
              else if (popsound == 5) {
                p5.play();
              }
              else if (popsound == 6) {
                p6.play();
              }
              else if (popsound == 7) {
                p7.play();
              }
              else {
                p2.play();
              }
            
    
            }, 125);
    
          }, randomtime);
  
          
    });
          
        
        }
      }
    });
  
};

if ('ontouchstart' in window || navigator.maxTouchPoints) {

  document.addEventListener('touchstart', handleTouchStart, false);
  document.addEventListener('touchmove', handleTouchMove, false);
  var touchx = 0;
  var touchy = 0;


  function handleTouchStart(event) {
    event.preventDefault();
    var touch = event.touches[0];

    if (pause != true) {
      // Get the coordinates
      touchx = touch.clientX;
      touchy = touch.clientY;
    }
  }
  function handleTouchMove(event) {
    // Prevent default behavior
    event.preventDefault();

    // Get the touch object
    var touch = event.touches[0];

    if (pause != true) {
      // Get the coordinates
      touchx = touch.clientX;
      touchy = touch.clientY;
      mouseX = touchx;
      mouseY = touchy;

    }
  }


}

window.onmousemove = function() {
  mouseX = event.clientX
  mouseY = event.clientY
}

updatePlayerPosition();

function lerp(value, target, speed) {
  return value + (target - value) * speed;
}

function updatePlayerPosition() {
  /*if ('ontouchstart' in window || navigator.maxTouchPoints) {
   
    playerX = lerp(playerX, touchx, 0.1);
    playerY = lerp(playerY, touchy, 0.1);
  }
  else{*/
  if (pause != true) {
    playerX = lerp(playerX, mouseX, 0.1);
    playerY = lerp(playerY, mouseY, 0.1);


    player.style.left = `${playerX}px`;
    player.style.top = `${playerY}px`;



  }
  mobs = document.querySelectorAll('.mob');
  mobs.forEach(obj => {

    if (damage(player, obj) == true) {
      if (obj.classList.contains("popanimation") || obj.classList.contains("mobanimation") || obj.classList.contains("mob5") || obj.classList.contains("mob6")) {

        if (obj.classList.contains("mob5") && obj.classList.contains("goldan") != true){
          obj.classList.add("goldan");
          
        }
        else  if (obj.classList.contains("mob6") && obj.classList.contains("goldan") != true)   {
           obj.classList.add("goldan");
        }
      }
      else {
        
        obj.classList.add("popanimation");
        setTimeout(function() {

          obj.classList.remove("popanimation");

          document.getElementById("gamecontainer").removeChild(obj);

          //adding session pops
          sessionp++;
          document.getElementById("sessionp").innerHTML = sessionp;
          //adding totalpops
          localStorage.setItem("totalp", parseInt(localStorage.getItem("totalp")) + 1);
          document.getElementById("totalp").innerHTML = localStorage.getItem("totalp");

          /*
          "rgba(204, 102, 153, " + ratio / 2 + ")";
          black: rgba(0,0,0);
          gold: rgba(255,215,0)
          
          ratio = localStorage.getItem("totalp")/10000;
          
          */
          R = Math.floor(255 * (localStorage.getItem("totalp") / 5000));
          G = Math.floor(215 * (localStorage.getItem("totalp") / 5000));
          if (R > 255) {
            R = 255;
          }
          if (G > 215) {
            G = 215;
          }

          player.style.backgroundColor = "rgb(" + R + ", " + G + ",0)";

          let popsound = Math.ceil(Math.random() * 8);


          if (popsound == 1) {
            p1.play();
          }
          else if (popsound == 2) {
            p2.play();
          }
          else if (popsound == 3) {
            p6.play();
          }
          else if (popsound == 4) {
            p4.play();
          }
          else if (popsound == 5) {
            p5.play();
          }
          else if (popsound == 6) {
            p6.play();
          }
          else if (popsound == 7) {
            p7.play();
          }
          else {
            p2.play();
          }


        }, 125);

      }
    }
    else{
      if (obj.classList.contains("mob5")){
          obj.classList.remove("goldan");
        }
      else if (obj.classList.contains("mob6")){
        obj.classList.remove("goldan");
      }
    }
  });

  requestAnimationFrame(updatePlayerPosition);

}




function damage(player, mob) {


  hitbox1 = player.getBoundingClientRect();
  hitbox2 = mob.getBoundingClientRect();
  return !(
    hitbox1.top > hitbox2.bottom ||
    hitbox1.right < hitbox2.left ||
    hitbox1.bottom < hitbox2.top ||
    hitbox1.left > hitbox2.right
  );


}

        

      