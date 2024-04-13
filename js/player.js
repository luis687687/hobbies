const player = document.querySelector(".player")
const mensagem = document.querySelector("#mensagem")
isThereSomeAnimation = false
last_animation_duration = 0
const player_animation = {
        iteration_sprite: {
            idle: 0, run: 0, walk: 0, shot: 0, recharge: 0
        },
        time_to_change: 1,
        interval: {
            idle: 500,
            walk: 200,
            run: 0,
            shot: 100,
            recharge: 100
        },
       
        animation_controller: {
            idle: null,
            walk: null,
            run: null,
            shot: null,
            recharge: null
            
        },
        animated: {
            recharge: "../assets/player/Recharge_cuts/recharge.gif",
            walk: "../assets/player/Walk_cuts/walk.gif",
            run: "../assets/player/Run_cuts/run.gif",
            idle: "../assets/player/Idle_cuts/idle.gif",
            shot: '../assets/player/Shot_2_cuts/shot.gif'
        },
        sprites: {

            idle: [
            "../assets/player/Idle_cuts/image_0-0.png",
            "../assets/player/Idle_cuts/image_0-1.png ",
            "../assets/player/Idle_cuts/image_0-2.png ",
            "../assets/player/Idle_cuts/image_0-3.png "
            ],
            walk: [
                "../assets/player/Walk_cuts/image_0-0.png",
                "../assets/player/Walk_cuts/image_0-1.png",
                "../assets/player/Walk_cuts/image_0-2.png",
                "../assets/player/Walk_cuts/image_0-3.png",
                "../assets/player/Walk_cuts/image_0-4.png",
                "../assets/player/Walk_cuts/image_0-5.png",
                "../assets/player/Walk_cuts/image_0-6.png",
            ],
            run : [
                "../assets/player/Run_cuts/image_0-0.png",
                "../assets/player/Run_cuts/image_0-1.png",
                "../assets/player/Run_cuts/image_0-2.png",
                "../assets/player/Run_cuts/image_0-3.png",
                "../assets/player/Run_cuts/image_0-4.png",
                "../assets/player/Run_cuts/image_0-5.png",
                "../assets/player/Run_cuts/image_0-6.png",
                "../assets/player/Run_cuts/image_0-7.png",
            ],
            shot: [
                "../assets/player/Shot_1_cuts/image_0-0.png",
                "../assets/player/Shot_1_cuts/image_0-1.png",
                "../assets/player/Shot_1_cuts/image_0-2.png",
                "../assets/player/Shot_1_cuts/image_0-3.png",
            ],
            shot2: [
                "../assets/player/Shot_2_cuts/image_0-0.png",
                "../assets/player/Shot_2_cuts/image_0-1.png",
                "../assets/player/Shot_2_cuts/image_0-2.png",
                "../assets/player/Shot_2_cuts/image_0-3.png"
            ],
            dead: [
                "../assets/player/Dead_cuts/image_0-0.png",
                "../assets/player/Dead_cuts/image_0-1.png",
                "../assets/player/Dead_cuts/image_0-2.png",
                "../assets/player/Dead_cuts/image_0-3.png",
            ],
            recharge: Array(13).fill().map(
                (element, index) => `../assets/player/Recharge_cuts/image_0-${index}.png`
            )
        },
        sounds: {
            shot: '../sounds/shot.mp3'
        }
    
}




//codigo da respiração!
const playerIdle = _ => {
    soundShotStop()
    isThereSomeAnimation = true
    last_animation_duration = 0
    mensagem.innerText = "Soldado Respirando ... "+player_animation.iteration_sprite.idle
    //  player_animation.animation_controller.idle = setInterval(
    //     _ => {
            
    //         player.setAttribute("src", player_animation.sprites.idle[player_animation.iteration_sprite.idle])
    //         player_animation.iteration_sprite.idle = player_animation.sprites.idle.length - 1 > player_animation.iteration_sprite.idle ? player_animation.iteration_sprite.idle + 1 : 0
    
    //     }, 
    //     player_animation.interval.idle
    // )

    player.setAttribute("src", player_animation.animated.idle)
    console.log("idle")
}


//Codigo do andamento
const playerWalk = _=> {
    isThereSomeAnimation = true

    soundShotStop()
    last_animation_duration = player_animation.interval.walk*player_animation.sprites.walk.length
    mensagem.innerText = "Soldado andando.... "+ player_animation.iteration_sprite.walk
    player.setAttribute("src", player_animation.animated.walk)

   
}

//correndo

const playerRun = _ => {
    soundShotStop()
    isThereSomeAnimation = true
    last_animation_duration = 0
    mensagem.innerText = "Soldado correndo.... "+ player_animation.iteration_sprite.run
    // player.setAttribute("src", player_animation.sprites.run[player_animation.iteration_sprite.run])
    // player_animation.iteration_sprite.run = player_animation.sprites.run.length - 1 > player_animation.iteration_sprite.run ? player_animation.iteration_sprite.run + 1 : 0
   // console.log(player_animation.iteration_sprite.run, player_animation.sprites.run.length - 1)
   player.setAttribute("src", player_animation.animated.run)


}



//Atirando...
const playerShot = _ => {
    soundShotPlay()
    isThereSomeAnimation = true
    last_animation_duration = player_animation.interval.shot
    mensagem.innerText = "Soldado atirando.... "+ player_animation.iteration_sprite.shot
    // const control = setInterval(
    //     () => {
            
            
    //         player.setAttribute("src", player_animation.sprites.shot2[player_animation.iteration_sprite.shot])
            
    //         if(player_animation.sprites.shot2.length - 1 > player_animation.iteration_sprite.shot)
    //             player_animation.iteration_sprite.shot =  player_animation.iteration_sprite.shot + 1
    //         else{
    //             stopPlayerShot()
    //             clearInterval(control)
                

    //         }
            
             
    //     }, player_animation.interval.shot
    // )
        
    player.setAttribute("src", player_animation.animated.shot)
}



//Carregar

const playerRecharge = _ => {
    soundShotStop()
    isThereSomeAnimation = true
    last_animation_duration = player_animation.interval.recharge*50
    mensagem.innerText = "Soldado carregar arma.... "+ player_animation.iteration_sprite.recharge

    player.setAttribute("src", player_animation.animated.recharge)
    
   
}

const soundShotPlay = _ => {
    const sound = document.querySelector("#sound_shot")
    sound.play()

}

const soundShotStop = _ => {
    const sound = document.querySelector("#sound_shot")
    sound.pause()

}
playerIdle()







