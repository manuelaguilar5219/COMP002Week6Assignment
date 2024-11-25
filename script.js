// 1. Write code to allow visitors of the page to customize it to their liking. There is a
// form on the page that accepts a name (to be used in a greeting when the user visits
// the page) and a color picker to allow the user to choose their preferred background
// color/foreground color combination. Write the necessary code to capture these values
// when the form is submitted (prevent the default action on the form submission button to
// achieve this) and store these values in localStorage (so that it persists on the user’s
// computer and their preferences are saved indefinitely). Next, write a function to apply
// the preferences if they have been set and call it each time the page loads. You may
// also want to call this function again when the user saves their preferences to
// immediately apply them. Make sure you also notify the user somehow that the preferences
// were saved.
document.addEventListener('DOMContentLoaded', () => { // Added Event listener that waits for the entire document to load.
    const form = document.getElementById('preferences-form'); // Selects the element with the 'preferences-form' ID
    const applyPreferences = () => { // Defines a function named applyPreferences
        document.getElementById('greeting').textContent = `Welcome, ${localStorage.getItem('name') || 'Guest'}!`; // Sets the text content of the element with the ID greeting to "Welcome, [name]!" where [name] is retrieved from localStorage. If no name is stored, it defaults to "Guest".
        document.body.style.color = localStorage.getItem('foreground-color') || '#000'; // Sets the text color of the document body to the value stored in localStorage under foreground-color. If no color is stored, it defaults to black (#000).
    };

    applyPreferences(); // Calls the applyPreferences function

    form.addEventListener('submit', event => { // Adds an event listener to the form that triggers when the form is submitted.
        event.preventDefault(); // Prevents default action
        ['name', 'background-color', 'foreground-color'].forEach(id => // Begins a loop over an array containing the IDs name, background-color, and foreground-color.
            localStorage.setItem(id, document.getElementById(id).value) // For each ID in the array, stores the corresponding value from the form in localStorage.
        );
        applyPreferences(); // Calls the applyPreferences function
        alert('Preferences saved!'); // Displays an alert notifying the user that their preferences have been saved.
    });
});