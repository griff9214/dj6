$(function() {

	// Custom JS

});


document.addEventListener(
    "DOMContentLoaded", () => {
        // Fire the plugin
        const menu = new Mmenu( "#my-menu" );

        // Get the API
        const api = menu.API;

        // Invoke a method
        const panel = document.querySelector( "#my-panel" );
        api.openPanel( panel );
    }
);

