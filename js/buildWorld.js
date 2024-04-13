const zombies_area =document.querySelector(".crater-area")

zombies = []
total = 0
const generatorZombies = _ => {

        total = Math.round(Math.random()*10)
        
        for( i = 0; i < total + 5; i++ ){
            x = Math.round(Math.random()*10)*100
            y = Math.round(Math.random()*10)*50

            zommbie_type = Math.random()*5
            asset = "zombie"
            if(zommbie_type >= 3)
                asset = "zombie2"
            
            zombies[i] = new Zombie(x,200, zombies_area, asset)
        }
   
}


setInterval( _ => {
    if(zombies.length == 0)
        generatorZombies()
}, 2000)



