const craters = document.querySelector(".crater-area")

craters.classList.add("crater-area-animation")
craters.style.animationPlayState = "paused"
fire_power =1
isRunning = false
isWalking = false

const keyPlayerAnimation = {
    arrowright:  _ => {
      

        if(!isRunning){
            playerRun()
            isRunning = true
            setTimeout( _ => {
                craters.style.animationPlayState = "running"
            }, 70)
        }
       
        
      
    },
    s: _ => {
       
        isRunning = false
        isWalking = false
        playerIdle()
    },
    
  
    enter: _ => {
        
            playerShot()
        
    },
    w: _ => {
       
       
        if(!isWalking){
            playerWalk()
            isWalking = true

            setTimeout( _ => {
                craters.style.animationPlayState = "running"
            }, 70)
        }
        
    }
   

    

    
  
}

canChangeActualAnimation = false
count_to_change = 0

//se nenhuma tecla Está sendo pressionada retorna para animação de parado
const isThereAnyKeyPressed = time => {

    
    setTimeout( _ => {
        keyPlayerAnimation["s"]();
        craters.style.animationPlayState = "paused"
       
    }, time)

}



shotting_zombie = false

const takeFirstZombie = _ => {
    positions = zombies.map(
        (zombie, index) => zombie.right
    )

    index = positions.indexOf(Math.max(...positions))
    return index
}

//remove zombies do array, caso eles estejam mortos
just_sorted = -1
const removeNullZombies = _ => {
    zombies = zombies.filter( zombie => zombie.element != null)

    walk_or_run = Math.random()*10
    
    if(zombies[takeFirstZombie()]){
        
        if(!zombies[takeFirstZombie()].isWalking && just_sorted != takeFirstZombie()){
            console.log("removed...")
            just_sorted = takeFirstZombie()
            if(walk_or_run > 0 && walk_or_run < 5){
                zombies[takeFirstZombie()].walk()
            }else{
                zombies[takeFirstZombie()].run()
            
                
            }
        }
        }
   
}
setInterval( removeNullZombies, 100)


window.onkeydown = key => {
    
    
    const pressed = key.key.toLowerCase()
    
    
    count_to_change = 0
    canChangeActualAnimation = true

    
    if(pressed == "enter" && !shotting_zombie){ //shotting_zombie controla se ja clicou para nao actualizatr toda hora o src do zombie
        shotting_zombie = true
        console.log(zombies[takeFirstZombie()].isDead(), " aaaa")
        if(!zombies[takeFirstZombie()].isDead())
            zombies[takeFirstZombie()].takeShot(fire_power)

    }

    if(pressed == "enter" || pressed == "w" || pressed == "arrowright" || pressed == "s")
    keyPlayerAnimation[pressed]()

  
}



window.onkeyup = key => {
    const pressed = key.key.toLowerCase()
    
    if(pressed == "p"){
        playerRecharge()
        
    }
    else
    {
        //liberar zombie dos disparos
        if( pressed == "enter"){
            
            shotting_zombie = false

            if(!zombies[takeFirstZombie()].die()){
                zombies[takeFirstZombie()].setImg(zombies[takeFirstZombie()].last_assets_state)
                
                if(zombies[takeFirstZombie()].isRunning)
                    zombies[takeFirstZombie()].run()
                else
                    zombies[takeFirstZombie()].walk()
                zombies[takeFirstZombie()].element.style.animationPlayState = "running"
            }
        
        }
       
    }
    isThereAnyKeyPressed(last_animation_duration)
    
    

    
    
    
    
    
    
   
        
}

