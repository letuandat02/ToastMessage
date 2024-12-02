function toast({title = '', message = '', type = '', duration = 3000}){
    const main = document.getElementById('toast');
    if(main){
        const toast = document.createElement('div')

        // auto remove toast
        const autoRemoveID = setTimeout(function() {
            main.removeChild(toast);
        }, duration + 1000)

        //remove toast when click
        toast.onclick = function(e) {
            if(e.target.closest('.toast__close')){
                main.removeChild(toast);
                clearTimeout(autoRemoveID)
            }
        }
        const icons = {
            success: 'fa-circle-check',
            wraning: 'fa-triangle-exclamation',
            error: 'fa-circle-info',
        };
        const icon = icons[type];
        const delay = (duration / 1000).toFixed(2);

        toast.classList.add('toast', `toast--${type}`)
        toast.style.animation = `slideInLeft ease-in .3s, fadeOut linear 1s ${delay}s forwards`
        
        toast.innerHTML = `
            <div class="toast__icon">
                <i class="fa-solid ${icon}"></i>
            </div>
            <div class="toast__body">
                <h3 class="toast__title">${title}</h3>
                <p class="toast__msg">${message}</p>
            </div>
            <div class="toast__close">
                <i class="fa-solid fa-xmark"></i>
            </div>`;
        main.appendChild(toast)
    }
}
