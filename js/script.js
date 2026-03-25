// Déblocage automatique de la page 03:17
function checkTime() {
    const now = new Date();
    if(now.getHours()===3 && now.getMinutes()===17){
        const secret = document.getElementById('timeline');
        if(secret) secret.classList.remove('hidden');
    }
}
setInterval(checkTime, 10000);

// Déblocage via bouton ou chat
function revealFragment(keyword){
    const frag = document.getElementById(keyword);
    if(frag) frag.classList.remove('hidden');
}
