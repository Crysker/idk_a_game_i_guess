let audioGuns = new Audio('./data/guns.mp3');
let audiods1 = new Audio('./data/dead1.mp3');


function changeBackground(imgPath){
    const background = document.getElementById("background");
    background.style.backgroundImage = `url(${imgPath})`;   
}


function startGame(){
    
    
    changeBackground("./data/sleep.png");
    let sleeping = confirm("zzzzZZZZzzzZZZZ");
    let i = 0;
    for( i=0; i<5;i++){
        
        changeBackground("./data/sleep.png");
        audiods1.pause();
        audiods1.currentTime = 0;
        let choice1= +prompt("Do you want to wake up? 1(Yes) 2(No)");
        
        switch(choice1){
            case 1:
                changeBackground("./data/awake.png");
                alert("You wake up and see a stranger with a knife in his hand.")
                i=5;
                break;
                case 2:
                    audiods1.play();
                    changeBackground("./data/maxresdefault.jpg");
                    alert("You died in your sleep. Try again")
                    break;
                    
                    default:
                        alert("Press either 1 or 2 if you want to play");
                        break;
                        
                    }
                    
                }
                
                
                if(i===5){
                    alert("You died to often. But god tells you if you press F5 you restart");
                }else{
                    let i = 0;
                    for(i=0; i<5;i++){
                        
                        audioGuns.pause();
                        audioGuns.currentTime = 0;
                        
                        audiods1.pause();
                        audiods1.currentTime = 0;
                        
                        let choice2 = +prompt(`You can try and running away, fighting or give up. 
                        1(Fight)
                        2 (Run)
                        3 (Give up)`);
                        
                        switch(choice2){
                            
                            case 1:
                                changeBackground("./data/fight.png");
                                alert("Fighting the guy.")  
                                i=5;
                                break;
                                
                                case 2:
                                    audioGuns.play();
                                    alert("You managed to escape the intruder, but outside where three armed guys who shot you right away. Try again");
                                    break;
                                    
                                    case 3:
                                        audiods1.play();
                                        changeBackground("./data/maxresdefault.jpg");
                                        alert("He Killed you. Try again")
                                        break;
                                        
                                        default:
                                            alert("Press 1,2 or 3 if you want to play");  
                                            break;
                                        }
                                        
                                    }
                                    
                                }if(i===5){
                                    alert("You died to often. But god tells you if you press F5 you restart");
                                }else{
                                    let i = 0;
                                    for(i=0; i<5;i++){
                                        
                                        audiods1.pause();
                                        audiods1.currentTime = 0;
                                        changeBackground("./data/deadguys.png");
                                        let choice3 = +prompt(`You are stronger, and faster than the intruder. You managed to get his knife and kill him. However you hear noises outside. What will you do?
                     
             1(Fight)
             2 (Destroy a window and tell the guys, that the target ran away)
             3 (Become an imposter)`);
                                        
                                        switch(choice3){
                                            case 1:
                                                audiods1.play();
                                                changeBackground("./data/maxresdefault.jpg");
                                                alert("You fight them and die.")
                                                
                                                break;
                                                
                                                case 2:
                                                    changeBackground("./data/maxresdefault.jpg");
                                                    alert("The intruders didnt belive the lie and killed you right away")
                                                    audiods1.play();
                                                    
                                                    break;
                                                    case 3:
                                                        changeBackground("./data/killer.png");
                                                        alert("You switch clothes with the intruder and backstab everyone. Good Job, you managed to escape")
                    i=5;
                    break;
                    
                    default:
                        alert("Press 1,2 or 3 if you want to play");  
                        break;
                        
                    }
                    
                }
            }if(i===5){
                alert("You died to often. But god tells you if you press F5 you can restart");
            }else{
                let i = 0
                audiods1.pause();
                audiods1.currentTime = 0;
                
                alert(`You are curious and want to know who these guys were. So you try to identify them`)
                changeBackground("./data/bar.png");
                alert(`After looking at each intruder, you recognize one of the poker-players in your local bar`)
                for(i=0; i<5;i++){
                    let choice4 = +prompt(`You can go to the bar to get more information or hide the rest of the day.
                    1 (Go bar)
                    2 (Hide)`);
                    
                    switch(choice4){
                        case 1:
                            
                            alert("You went to the Bar and heard someone talk about four people trying to kill a guy and destroying his house")
                            i=5;
                            break;
                            
                            case 2:
                                audiods1.play();
                                changeBackground("./data/maxresdefault.jpg");
                                alert("You tried hiding in your house but it exploded")
                                break;
                                
                                default:
                                    alert("Press 1 or 2 if you want to play");  
                                    break;
                                }
                                
                            }
                        }if(i===5){
                            alert("You died to often. But god tells you if you press F5 you can restart");
                        }else{
                            let i = 0
                            for(i=0; i<5;i++){
                                audioGuns.pause();
                              audioGuns.currentTime = 0;
                            
                                
                                alert(`After hearing that you are furious and get mad and wait until that one guys who talked about the intruders leaves the bar`);
                                alert(`He leaves the bar and you follow him`);
                                alert(`You finally caught him and threatend him with a gun to tell who send the four intruders`);
                                alert(`The guys nearly pissing him self and begging for his life, tells you it was Mike`);
                                alert("Mike is part of the Mafia in your town");
                                changeBackground("./data/gunshelf.png");
                                alert(`After hearing that you go to your secret garage where you have guns`);
                                
                                let choice5 = +prompt(`You can decide to kill Mike or let it be and leave the country
                                     1 (Kill)
                                     2 (Leave country)`);
                                    
                                    switch(choice5){
                                        case 1:
                                            changeBackground("./data/house.png");
                                            alert("You went to Mikes house and rang his dorbell.")
                                                 audioGuns.play();
                                            alert("One of his subordinates opened and you shot him right away.")
                                                audioGuns.pause();
                                                audioGuns.currentTime = 0;
                                                audioGuns.play();
                                            alert("One guy tried to call someone but you were to slow and he told someone that you are still alive")
                                            alert("Anywas you finaly meet Mike and ask him, why he did that.")
                                            
                                            changeBackground("./data/mikekill.png");
                                                 audioGuns.play();
                                            alert("He only smiles and says they will find you and kill you. After saying that Mike shot himself in the head.")
                                            alert("You leave his house but somehow you dont feel happy you are more concerned about the future.")
                                            changeBackground("./data/end.png");
                                            alert("The end?")
                                            i=5;
                                            break;
                                            
                                            case 2:
                                                
                                                alert("You decided to leave the country and visit your family in Russia")
                                                changeBackground("./data/ivan.png");
                                                alert("You start a new life in Russia as Ivan")
                                                i = 5
                                                break;
                                                
                                                default:
                                                    alert("Press 1 or 2 if you want to play");  
                                                    break;
                                                }
                                                
                                                
                                            }
                                        }
                                        
                                    }
                                    
                                    
                                    
                                
