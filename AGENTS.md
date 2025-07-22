# Project Overview

This web application is an **Apartment Search** platform that enables users to browse, filter, and view detailed apartment listings, as well as post new listings. The architecture follows a **MERN**-inspired stack:

* **Frontend:** React-based single-page application (SPA) using React Router for navigation.
* **Backend:** Node.js with Express providing a RESTful API for authentication, listings management, and file uploads.
* **Database:** MongoDB (e.g., MongoDB Atlas free tier) accessed via Mongoose for data storage.
* **Image Storage:** Local `uploads/` directory (or future integration with cloud).

The codebase is organized into two main directories (`client/` and `server/`), plus shared configuration and documentation at the project root.

---

# Build & Commands

All commands are run from the project root unless otherwise specified.

## Setup

```bash
# Install root dependencies (if any)
npm install

# Install client dependencies
cd client && npm install

# Install server dependencies
cd server && npm install
```

## Development

```bash
# Run both client and server concurrently (in project root)
npm run dev

# Alternatively:
# Start React dev server
cd client && npm start

# Start Express dev server
cd server && npm run dev   # (uses nodemon)
```

## Testing

```bash
# Run front-end tests (in client/)
cd client && npm test

# Run back-end tests (in server/)
cd server && npm test
```

## Production Build & Start

```bash
# Build React app
cd client && npm run build

# Start Express server in production mode (serves built client)
cd server && npm start
```

---

# Code Style

## Formatting Rules

* **Indentation:** 2 spaces per level in JavaScript/JSON/Markdown.
* **Line Length:** Wrap lines at **80 characters** where feasible.
* **Quotes:** Use **single quotes** (`'`) for JavaScript strings, except when the string contains a single quote.
* **Semicolons:** **Required** at the end of every statement.
* **Trailing Commas:** Use trailing commas in multiline objects and arrays.

## Naming Conventions

* **Files & Folders:**

  * Lowercase with hyphens for folders (e.g., `user-models/`, `auth-middleware/`).
  * PascalCase for React components (e.g., `ListingCard.jsx`).
  * camelCase for filenames containing logic or hooks (e.g., `useAuth.js`, `apiClient.js`).

* **Variables & Functions:**

  * **camelCase** for variables and functions in JavaScript.
  * **PascalCase** for React components and classes.
  * **UPPER\_SNAKE\_CASE** for constants and environment variables.

* **Database Models:** Singular, PascalCase (e.g., `User`, `Listing`).

## Best Practices

* **Component Structure:** Keep React components small and focused; split UI into reusable components under `src/components/`.
* **State Management:** Use React `useState` and `useEffect` hooks; consider Context API for global state (e.g., auth state).
* **Error Handling:** Always handle promise rejections (`.catch`) and display user-friendly messages in the UI.
* **Security:** Never commit secrets; use `.env` files and reference variables via `process.env`.
* **Linting:** Integrate ESLint with a shared config (e.g., Airbnb or Standard) and run lint as part of CI.
* **Formatting:** Use Prettier for consistent code formatting; format on save or as a pre-commit hook.

## Core Screens

This section outlines the primary user interface screens for the FlataMi flat-sharing app. Each screen is described in terms of its purpose, key components, and user interactions.

---

### 1. Main Screen

**Purpose:**

* Serve as the app’s entry point, guiding users toward their primary actions and authentication.

**Key Components:**

* **Header:** App logo and title.
* **Action Buttons:**

  * **`Look for Flatmate (I already have an apartment)`** — Redirects to the "Look for a Flatmate" workflow.
  * **`Look for Apartment`** — Redirects to the "Look for a Flat" workflow.
* **Authentication Controls:**

  * **Login / Sign Up** button. If already authenticated, displays user avatar and a dropdown for Profile & Logout.

**Primary Interactions:**

* Tapping an action button navigates to the corresponding search or posting screen.
* Authentication toggles between sign-in flow and user menu.

---

### 2. Profile Page

**Purpose:**

* Display personal user information and a history of the user’s posts.

**Key Components:**

* **Profile Header:**

  * First Name, Last Name
  * Profile Photo (circular avatar)
* **Tabs / Section Controls:**

  * **`My Flatmate Posts`** — Announcements made by the user seeking flatmates.
  * **`My Apartment Posts`** — Apartment offers posted by the user.
* **Post List:** Scrollable list of cards showing each post’s title, status (active/expired), and timestamp.
* **Edit Profile Button:** Opens modal or screen to update name, photo, and other details.

**Primary Interactions:**

* Tap a post card to view or edit its details.
* Switch between the two post categories using tabs.
* Use Edit Profile to update personal information.

---

### 3. Look for a Flat Page

**Purpose:**

* Enable users to browse available apartments or post their own profile for hosts to contact.

**Key Components:**

* **Primary Actions:**

  * **`Browse Apartment Offers`** — Leads to the Offers List (apartments).
  * **`Post Your Profile`** — Opens a form for users to create a "seeking apartment" profile.
* **Search Bar (optional):** Filter offers by location, price, or keywords.

**Primary Interactions:**

* Tap "Browse Apartment Offers" to see listings.
* Tap "Post Your Profile" to start a new profile posting flow.

---

### 4. Look for a Flatmate Page

**Purpose:**

* Allow users to browse announcements from flat owners or post their own flatmate-seeking announcement.

**Key Components:**

* **Primary Actions:**

  * **`Browse Flatmate Offers`** — Leads to the Offers List (flatmate-seeking posts).
  * **`Post Your Flat Announcement`** — Opens form for users to describe their available flat.
* **Search/Filter Controls:** Optional filters for rent range, location, or move-in date.

**Primary Interactions:**

* Tap "Browse Flatmate Offers" to view available posts.
* Tap "Post Your Flat Announcement" to create a new offer.

---



### 5. Offers List — Apartment Offers

**Purpose:**

Provide a scrollable list of apartment listings, each displaying key property details.

**Key Components:**

- **List Items:** Card-style entries showing:
  - Headline (e.g., "2BR in Trastevere, €800/mo")
  - Thumbnail image
  - Number of occupants, bedrooms, and monthly rent icons
- **Infinite Scroll:** Loads more results as the user scrolls down.
- **Pull-to-Refresh:** Reloads the list.

**Primary Interactions:**

- Scroll through apartment cards; tap to navigate to the Apartment Offer Page.


### 6. Offers List — Flatmate Profiles

**Purpose:**

Provide a scrollable list of flatmate-seeking profiles, each showing user preferences.

**Key Components:**

- **List Items:** Card-style entries showing:
  - Headline (e.g., "Looking for roommate in Prati")
  - Thumbnail image of user/profile
  - Maximum rent willing to pay and desired area icons
- **Infinite Scroll:** Loads more results as the user scrolls down.
- **Pull-to-Refresh:** Reloads the list.

**Primary Interactions:**

- Scroll through profile cards; tap to navigate to the Flatmate Offer Page.
---


### 7. Apartment Offer Page

**Purpose:**

* Show full details of a specific apartment listing.

**Key Components:**

* **Image Carousel:** Swipeable photo gallery of the apartment.
* **Title & Location:** Prominent display of neighborhood and address.
* **Rent & Availability:** Monthly rent, deposit, available from date.
* **Description:** Short text describing the lifestyle, amenities, and any house rules.
* **Contact Host Button:** Opens chat or sends a contact request.

**Primary Interactions:**

* Swipe through images.
* Scroll description for full text.
* Tap "Contact Host" to start messaging.

---


### 8. Flatmate Offer Page

**Purpose:**

* Present a detailed view of a flatmate-seeking advertisement.

**Key Components:**

* **Photo Gallery:** Swipeable images of current flat interior.
* **Post Title:** E.g., "Looking for roommate in Prati"
* **Rent Details:** Maximum willing-to-pay rent.
* **Desired Location:** Area or neighborhood name.
* **Description:** Additional preferences (e.g., non-smoker, pet-friendly).
* **Contact Flatmate Button:** Initiates chat or inquiry.

**Primary Interactions:**

* Swipe through gallery images.
* Read detailed preferences.
* Tap "Contact Flatmate" to connect.

---

*This ****`AGENT.md`**** file serves as the foundational guide. Additional sections and details will be added as the project evolves.*

