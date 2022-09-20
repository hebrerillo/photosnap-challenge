class App
{
    #mainHeader;
    #navigationMenu;
    #openMenu;
    #closeMenu;
    constructor()
    {
        this.#mainHeader = document.querySelector('.main-header');
        this.#navigationMenu = this.#mainHeader.querySelector('.header__nav');
        this.#openMenu = this.#mainHeader.querySelector('.open-menu');
        this.#closeMenu = this.#mainHeader.querySelector('.close-menu');
        this.setEvents();
    }
    
    setEvents()
    {
        this.#openMenu.addEventListener('click', this.showNavigationMenu.bind(this));
        this.#closeMenu.addEventListener('click', this.closeNavigationMenu.bind(this));
        this.#navigationMenu.addEventListener('transitionend', this.navigationMenuTransitionEnd.bind(this));
    }
    
    /**
     * Shows the navigation menu on mobile.
     */
    showNavigationMenu()
    {
        this.#navigationMenu.style.transition = 'none';
        this.#navigationMenu.classList.add('header__nav--display');
        this.#navigationMenu.style.transition = '';
        this.#navigationMenu.offsetHeight;
        this.#mainHeader.classList.add('header__nav--fade-in');
    }
    
    /**
     * Closes the navigation menu on mobile.
     */
    closeNavigationMenu()
    {
        this.#mainHeader.classList.remove('header__nav--fade-in');
    }
    
    /**
     * Handles the transition end event for the navigation menu.
     */
    navigationMenuTransitionEnd()
    {
        if (!this.#mainHeader.classList.contains('header__nav--fade-in'))
        {
            this.#navigationMenu.classList.remove('header__nav--display');
        }
    }
}

let app = new App();
