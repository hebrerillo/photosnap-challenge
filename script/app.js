class App
{
    #mainHeader;
    #openMenu;
    #closeMenu;
    #menuBackground;
    #togglePriceBox;
    constructor()
    {
        this.#mainHeader = document.querySelector('.main-header');
        this.#openMenu = this.#mainHeader.querySelector('.open-menu');
        this.#closeMenu = this.#mainHeader.querySelector('.close-menu');
        this.#menuBackground = this.#mainHeader.querySelector('.header__nav_background');
        this.togglePriceBox = document.querySelector('.toggler-box');
        this.setEvents();
    }
    
    setEvents()
    {
        this.#openMenu.addEventListener('click', this.showNavigationMenu.bind(this));
        this.#mainHeader.addEventListener('transitionend', this.navigationMenuTransitionEnd.bind(this));

        /* Setting the same function to close the modal menu for those elements that can close the modal menu. */
        [this.#closeMenu, this.#menuBackground].forEach(closeMenuItem => {
            closeMenuItem.addEventListener('click', this.closeNavigationMenu.bind(this));
        });
        
        this.togglePriceBox?.addEventListener('click', this.togglePrice.bind(this));
    }

    /**
     * Toggles between monthly and yearly plans.
     */
    togglePrice()
    {
        this.togglePriceBox?.closest('.plans').classList.toggle('yearly');
    }
    
    /**
     * Shows the navigation menu on mobile.
     */
    showNavigationMenu()
    {
        this.#mainHeader.style.transition = 'none';
        this.#mainHeader.classList.add('header__nav--display');
        this.#mainHeader.style.transition = '';
        this.#mainHeader.offsetHeight;
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
     * 
     * @param {Event} event The event generated in the transition end.
     */
    navigationMenuTransitionEnd(event)
    {
        const navMenu = event.target.closest('.header__nav');
        if (!navMenu)
        {
            return;
        }

        if (!this.#mainHeader.classList.contains('header__nav--fade-in'))
        {
            this.#mainHeader.classList.remove('header__nav--display');
        }
    }
}

let app = new App();
