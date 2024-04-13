class Zombie{

   life = 10;
    speed = 1;
    hurt = 4;
    src = "../assets/zombie/idle.gif"
    element = null
    right = 0
    bottom = 0
    father
    isWalking = false
    asset = "zombie"
    last_assets_state = ""
    isRunning = false
    sound
    dead = false


    constructor(right,bottom, father, asset="zombie"){
        this.right = right
        this.bottom = bottom
        this.father = father
        this.element = document.createElement("img")
        this.element.style.right = this.right+"px"
        this.element.style.bottom = this.bottom+"px"
        this.asset = asset
        this.src = `../assets/${asset}/idle.gif`
        
        this.element.classList.add("zombie")
        this.setImg(this.src)

        this.sound = document.createElement("audio")
        this.sound.setAttribute("class", "sound_zombie")
        this.sound.setAttribute("loop","true")
        this.sound.setAttribute("src", "../sounds/zombie.wav")
        this.sound.volume = 0.01

        setTimeout(
            _ => {
                this.sound.play()
            }, Math.round(Math.random()*2000+2000*Math.random()+5000)
        )
        

        document.body.appendChild(this.sound)
       

        this.draw(father)
        
    }
    getImg = function(){
        return this.src
    }
    setImg = function(src){
       this.src = src
        this.element.setAttribute("src", src)
    }

    walk = function() {

        
        if(!this.isWalking){
            this.last_assets_state = `../assets/${this.asset}/walk.gif`
            this.setImg(`../assets/${this.asset}/walk.gif`)
            this.element.classList.add("move")
        }

        this.isWalking = true
       
        this.element.style.animationPlayState = "running"
        
        
       
    }
    run = function() {
      
        if(!this.isRunning){
            this.last_assets_state = `../assets/${this.asset}/run.gif`
            
            this.setImg(`../assets/${this.asset}/run.gif`)
           
            this.element.classList.add("move")
        }

        this.isRunning = true
        
        this.element.style.animationPlayState = "running"
        this.element.style.animationDuration = "5s"
       
        
       
    }
    takeShot = function(fire){
       
        
        if(this.life >= 0){
            this.setImg(`../assets/${this.asset}/hurt.gif`)
            this.element.style.animationPlayState = "paused"
            this.life -= fire
        }
            
        else{
            if(!this.dead)
                this.die()
        }

        
    }
    die = function(){
       
        if(this.life < 1){
            this.dead = true
            this.setImg(`../assets/${this.asset}/dead.gif`)
            setTimeout( _ => {
                this.father.removeChild(this.element)
                this.element = null
                document.body.removeChild(this.sound)
            }, 1220)
            return true
        }
        return false
    }
    isDead = () => {
        return this.dead
            
    }

    draw = function(father){
        if(father){
         
            
            father.appendChild(this.element)
        }
    }
    
}