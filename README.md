# JS Memory Game Project

An interactive, fast-paced memory game built using JavaScript, HTML5, and CSS3. The game includes a local user management system (registration and login), a game lobby, personal score tracking, and a challenging timer mechanism.

---

## Game Overview

The game offers an engaging experience:
1. **Login / Registration:** Log in with an existing username and password or register as a new user.
2. **Game Lobby (Loby):** A personalized welcome screen displaying the currently logged-in player's name.
3. **Game Screen (Game):**
   - A grid board of 16 boxes.
   - Clicking "Start Game" lights up 5 random boxes for about 2 seconds.
   - The player must remember the highlighted box locations and click them before the timer runs out.
   - Tracks wins and losses using `localStorage`.

---

## Technologies Used

- **HTML5:** Structuring the application pages.
- **CSS3:** Dynamic styling, Flexbox layout, neon effects (`box-shadow`), hover transitions, and responsive layout.
- **JavaScript (ES6):**
  - Core game logic, dynamic timer implementation, and DOM manipulation.
  - `localStorage` usage for preserving user credentials, passwords, and game statistics (wins/losses).
  - Sound effects integration for buttons, victory, and defeat events.

---

## Project Structure

```text
js-game-project/
│
├── HTML/
│   ├── open.html      # Login and registration page
│   ├── loby.html      # Game selection lobby
│   └── game.html      # Main game page
│
├── CSS/
│   ├── open.css      # Opening screen styling
│   ├── loby.css      # Lobby styling
│   └── game.css      # Game board & timer styling
│
├── JS/
│   ├── open.js       # User authentication & registration logic
│   ├── loby.js       # User data loading logic in lobby
│   └── game.js       # Core game logic, timer & scoring
│
├── IMG/              # Images, background assets, and GIFs
└── audio/            # Sound effects for clicks, win, and lose
