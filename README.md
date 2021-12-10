# Project Flash Cards 
>An application to create decks of flash cards for users to study and edit for educational purposes. <br />
 
## Screenshots 
<strong>Home</strong><br />
The Home screen is displayed at `/`<br />
- A "Create Deck" button is shown and clicking it brings the user to the Create Deck screen.<br />
- Existing decks are each shown with the deck name, the number of cards, and a “Study,” “View,” and “Delete” button.<br />
- Clicking the “Study” button brings the user to the Study screen.<br />
- Clicking the “Edit” button brings the user to the Edit Deck screen.<br />
- Clicking the “Delete” button shows a warning message before deleting the deck.<br />
<img width="700" alt="home" src="https://user-images.githubusercontent.com/87205105/145650935-b85ce5f1-ab59-4118-bb49-345cb163cd0f.png">

<strong>Delete Deck Prompt</strong><br />
When the user clicks the "Delete" button, a warning message is shown and the user can click "OK" or "Cancel". If the user clicks "OK", the deck is deleted and the deleted deck is no longer visible on the Home screen.
<img width="700" alt="delete" src="https://user-images.githubusercontent.com/87205105/145650961-c1e7d3a6-e14c-4e58-b15c-232dd0833789.png">

<strong>Study page</strong><br />
The Study screen is displayed at ```/decks/:deckId/study.```<br /><br />
The Study screen has the following features:<br />
-There is a breadcrumb navigation bar with links to home /, followed by the name of the deck being studied and finally the text Study (e.g., Home/Rendering In React/Study).<br />
-Cards are shown one at a time, front-side first and a button at the bottom of each card "flips" it to the other side.<br />
-After flipping the card, the screen shows a next button (see the "Next button" section below) to continue to the next card.<br />
-After the final card in the deck has been shown, a message (see the "Restart prompt" section below) is shown offering the user the opportunity to restart the deck.
If the user does not restart the deck, they should return to the home screen.<br />
-Studying a deck with two or fewer cards should display a "Not enough cards" message (see the "Not enough cards" section below) and a button to add cards to the deck.
<img width="700" alt="study" src="https://user-images.githubusercontent.com/87205105/145651063-7659a0af-6e22-4cb0-ab8c-f2b105200d52.png">>

<strong>Create Deck</strong><br />
The Home screen has a "Create Deck" button that brings the user to the Create Deck screen.<br /><br />
- The Create Deck screen has the following features:<br />
- There is a breadcrumb navigation bar with a link to home / followed by the text Create Deck (i.e., Home/Create Deck).
- A form is shown with the appropriate fields for creating a new deck.<br />
- If the user clicks "submit", the user is taken to the Deck screen.<br />
- If the user clicks "cancel", the user is taken to the Home screen.
<img width="700" alt="create" src="https://user-images.githubusercontent.com/87205105/145651078-057b93ce-2d60-4d38-81a9-67c744b7f8f8.png">

<strong>Deck</strong><br />
The Deck screen displays all of the information about a deck.<br /><br />
The Deck screen has the following features:<br />
-There is a breadcrumb navigation bar with a link to home / followed by the name of the deck (e.g., Home/React Router).<br />
-The screen includes the deck name (e.g., "React Router") and deck description (e.g., "React Router is a collection of navigational components that compose declaratively in your application").<br />
-The screen includes "Edit", "Study", "Add Cards", and "Delete" buttons. Each button takes the user to a different destination<br />
<img width="700" alt="decks" src="https://user-images.githubusercontent.com/87205105/145651109-e62ff1eb-9f3e-41f9-b1a0-03ee6d1af24d.png">

<strong>Delete Card Prompt</strong><br />
When the user clicks the "Delete" button associated with a card, a warning message is shown and the user can click "OK" or "Cancel". If the user clicks "OK", the card is deleted.</br>
<img width="700" alt="delete card" src="https://user-images.githubusercontent.com/87205105/145651133-74b940ef-1258-49fb-964a-189191b81718.png">

<strong>Edit Deck</strong><br />
The Edit Deck screen allows the user to modify information on an existing deck.<br /><br />
The Edit Deck screen has the following features:<br />
-There is a breadcrumb navigation bar with a link to home /, followed by the name of the deck being edited, and finally the text Edit Deck (e.g., Home/Rendering in React/Edit Deck).<br />
-It displays the same form as the Create Deck screen, except it is pre-filled with information for the existing deck.<br />
-The user can edit and update the form.<br />
-If the user clicks "Cancel", the user is taken to the Deck screen.<br />
<img width="700" alt="edit deck" src="https://user-images.githubusercontent.com/87205105/145651150-7d479a39-11be-4292-aae9-ed7640e3fd70.png">

<strong>Add Card</strong><br />
The Add Card screen allows the user to add a new card to an existing deck.<br /><br />
The Add Card screen has the following features:<br />
-There is a breadcrumb navigation bar with a link to home /, followed by the name of the deck to which the cards are being added, and finally the text Add Card (e.g., Home/React Router/Add Card).<br />
-The screen displays the "React Router: Add Card" deck title.<br />
-A form is shown with the "front" and "back" fields for a new card. Both fields use a <textarea> tag that can accommodate multiple lines of text.<br />
-If the user clicks "Save", a new card is created and associated with the relevant deck. Then the form is cleared and the process for adding a card is restarted.<br />
-If the user clicks "Done", the user is taken to the Deck screen.<br />
<img width="700" alt="add card" src="https://user-images.githubusercontent.com/87205105/145651175-606423d8-d0fe-45d3-bccd-5f5c3b27d3ab.png">
  
 <strong>Edit Card</strong><br />
The Edit Card screen allows the user to modify information on an existing card.<br /><br />
The Edit Card screen has the following features:<br />
- There is a breadcrumb navigation bar with a link to home /, followed by the name of the deck of which the edited card is a member, and finally the text Edit Card :cardId (e.g., Home/Deck React Router/Edit Card 4).<br />
- It displays the same form as the Add Card screen, except it is pre-filled with information for the existing card. It can be edited and updated.<br />
- If the user clicks on either "Save" or "Cancel", the user is taken to the Deck screen.<br />
<img width="700" alt="edit card" src="https://user-images.githubusercontent.com/87205105/145651201-3d7ac223-a9dd-4360-a3b3-e823dc9595a3.png">

## Technology
Built with:<br />
<a href="https://facebook.github.io/react/">React</a> - View Library<br />
<a href="https://getbootstrap.com/docs/5.0/getting-started/introduction/">Bootstrap</a> - View Documentation<br />
