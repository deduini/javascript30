function playSound(e) {

    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); //
    /*
    @param animation
    */
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) {
        return; // stop function from running all keyboard letters
    }
    audio.currentTime = 0; //when we click button, the sound starts again 
    audio.play();
    key.classList.add('playing'); // animation added, but didn't go away

}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return; //skip if it's not a transform
    // console.log(e.propertyName);
    // console.log(this);
    this.classList.remove('playing');
}

/* @param removing animation */
const keys = document.querySelectorAll('.key'); //step 1: selecting every key
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);