# Project Overview

This web application is an **Apartment Search** platform that enables users to browse, filter, and view detailed apartment listings, as well as post new listings. The architecture follows a **MERN**-inspired stack:

* **Frontend:** React-based single-page application (SPA) using React Router for navigation.
* **Backend:** Node.js with Express providing a RESTful API for authentication, listings management, and file uploads.
* **Database:** MongoDB (e.g., MongoDB Atlas free tier) accessed via Mongoose for data storage.
* **Image Storage:** Local `uploads/` directory (or future integration with cloud).

The codebase is organized into two main directories (`client/` and `server/`), plus shared configuration and documentation at the project root.

---

The project has been set up using Vite, using the React framework and the Typescript variant.

```bash
npm create vite@latest
```

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
# Start Vite dev server
cd client && npm run dev

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
# Build client for production (Vite)
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

This section outlines the primary user interface screens for the FlataMi flat‑sharing app. Each screen is described in terms of its purpose, key components, and user interactions.

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

* **List Items:** Card-style entries showing:

  * Headline (e.g., "2BR in Trastevere, €800/mo")
  * Thumbnail image
  * Number of occupants, bedrooms, and monthly rent icons
* **Infinite Scroll:** Loads more results as you scroll.
* **Pull-to-Refresh:** Reloads the list.

**Primary Interactions:**

* Scroll through apartment cards; tap to navigate to the Apartment Offer Page.

### 6. Offers List — Flatmate Profiles

**Purpose:**

Provide a scrollable list of flatmate-seeking profiles, each showing user preferences.

**Key Components:**

* **List Items:** Card-style entries showing:

  * Headline (e.g., "Looking for roommate in Prati")
  * Thumbnail image of user/profile
  * Maximum rent willing to pay and desired area icons
* **Infinite Scroll:** Loads more results as you scroll.
* **Pull-to-Refresh:** Reloads the list.

**Primary Interactions:**

* Scroll through profile cards; tap to navigate to the Flatmate Offer Page.

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

## 9. Encouraged Use of Radix UI

To ensure accessibility, consistency, and robust UI behavior across your application, we recommend using [Radix UI](https://www.radix-ui.com/) for headless component primitives. Radix UI provides unstyled but fully accessible building blocks—such as dialogs, tooltips, tabs, and menus—that seamlessly integrate with Tailwind CSS (v4) for styling. Key benefits:

* **Built‑in Accessibility:** ARIA roles, focus management, and keyboard navigation out of the box.
* **Unopinionated Styling:** Apply Tailwind utility classes (or your preferred CSS-in-JS) to achieve design consistency without overriding default styles.
* **Lightweight & Flexible:** Small bundle size with granular imports, allowing you to pick only the components you need.

### Example: Styled Dialog with Radix UI and Tailwind CSS

```tsx
import * as Dialog from '@radix-ui/react-dialog';

export function MyModal() {
  return (
    <Dialog.Root>
      <Dialog.Trigger className="px-4 py-2 bg-indigo-600 text-white rounded-md">
        Open Modal
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50" />
        <Dialog.Content className="fixed top-1/2 left-1/2 w-96 p-6 bg-white rounded-lg shadow-lg -translate-x-1/2 -translate-y-1/2">
          <Dialog.Title className="text-lg font-semibold">Payment Successful</Dialog.Title>
          <Dialog.Description className="mt-2 text-sm text-gray-600">
            Your payment has been processed.
          </Dialog.Description>
          <Dialog.Close className="mt-4 px-3 py-2 bg-gray-200 rounded hover:bg-gray-300">
            Got it, thanks!
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
```

---

## 10. Styling & Conventions

* **Tailwind Tokens:** All components consume design tokens from `tailwind.config.js`.
* **Naming:** Use PascalCase for components and pages.
* **Folder Structure:** Group by feature, e.g. `src/pages`, `src/components`, `src/components/shared`.
* **Props & Events:** Keep props focused (avoid passing large objects), and name event handlers `onXxx` (e.g., `onSelectOffer`).

---

# Server Backend – AGENTS.md

This document specifies the **backend (server)** for the FlataMi flat‑sharing app. It follows a **MERN** architecture, focusing on Express, MongoDB (Mongoose), JWT auth (with optional Social Login), file uploads, filtering, and pagination.

---

## Project Overview

* **API Layer:** Node.js + Express REST API
* **Database:** MongoDB (Atlas/local) with Mongoose
* **Auth:** Email/password with JWT; optional Google/Facebook via Passport OAuth 2.0
* **Uploads:** Local `uploads/` via Multer (future‑ready for S3/Cloudinary)
* **Search:** Query parameters for filters (rent, location, availability), pagination
* **Style:** MVC-ish separation (routes/controllers/models/middlewares)

**Repo layout (server side):**

```
server/
├─ src/
│  ├─ config/          # env + db connection + passport strategies
│  ├─ controllers/     # route handlers (business logic)
│  ├─ models/          # mongoose schemas
│  ├─ routes/          # express routers (users, auth, listings)
│  ├─ middlewares/     # auth, error handler, multer setup
│  ├─ utils/           # helpers (token, validators, etc.)
│  ├─ app.ts           # express app
│  └─ server.ts        # bootstrap + listen
├─ uploads/            # local file storage (gitignored)
├─ .env                # environment variables (gitignored)
├─ package.json
└─ tsconfig.json / jsconfig.json
```

---

## Build & Commands

All commands are run from `server/` unless stated otherwise.

### Setup

```bash
# install deps
npm install

# copy env template
cp .env.example .env
```

### Development

```bash
# run dev server with auto-reload (ts-node-dev or nodemon)
npm run dev
```

### Testing

```bash
# run unit/integration tests (Jest + Supertest recommended)
npm test
```

### Production

```bash
# compile TS (if using TS) and start
npm run build
npm start
```

**Example scripts (package.json):**

```json
{
  "scripts": {
    "dev": "nodemon --watch src --exec ts-node src/server.ts",
    "build": "tsc -p .",
    "start": "node dist/server.js",
    "test": "jest"
  }
}
```

---

## Environment Variables

Create `.env` (never commit). Example:

```bash
PORT=5000
NODE_ENV=development
MONGO_URI=mongodb://localhost:27017/flatami
CORS_ORIGIN=http://localhost:5173
JWT_SECRET=change_this_in_prod
JWT_EXPIRES_IN=1d
# Social login (optional)
GOOGLE_OAUTH_CLIENT_ID=...
GOOGLE_OAUTH_CLIENT_SECRET=...
GOOGLE_OAUTH_CALLBACK=/auth/google/callback
FACEBOOK_APP_ID=...
FACEBOOK_APP_SECRET=...
FACEBOOK_CALLBACK=/auth/facebook/callback
```

**Config bootstrap:**

```ts
// src/config/env.ts
import 'dotenv/config';
export const env = {
  port: Number(process.env.PORT) || 5000,
  nodeEnv: process.env.NODE_ENV || 'development',
  mongoUri: process.env.MONGO_URI!,
  corsOrigin: process.env.CORS_ORIGIN || '*',
  jwt: {
    secret: process.env.JWT_SECRET!,
    expiresIn: process.env.JWT_EXPIRES_IN || '1d',
  },
  oauth: {
    google: {
      clientId: process.env.GOOGLE_OAUTH_CLIENT_ID,
      clientSecret: process.env.GOOGLE_OAUTH_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_OAUTH_CALLBACK,
    },
    facebook: {
      appId: process.env.FACEBOOK_APP_ID,
      appSecret: process.env.FACEBOOK_APP_SECRET,
      callbackURL: process.env.FACEBOOK_CALLBACK,
    },
  },
};
```

---

## App Initialization

```ts
// src/app.ts
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import path from 'path';
import { env } from './config/env';
import { router as userRouter } from './routes/user.routes';
import { router as authRouter } from './routes/auth.routes';
import { router as listingRouter } from './routes/listing.routes';
import { errorHandler, notFound } from './middlewares/error';

export const app = express();
app.use(cors({ origin: env.corsOrigin, credentials: true }));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static(path.join(process.cwd(), 'uploads')));

app.use('/api/users', userRouter);
app.use('/api/auth', authRouter);
app.use('/api/listings', listingRouter);

app.use(notFound);
app.use(errorHandler);
```

```ts
// src/server.ts
import { app } from './app';
import { connectDB } from './config/mongo';
import { env } from './config/env';

(async () => {
  await connectDB();
  app.listen(env.port, () => {
    console.log(`API listening on http://localhost:${env.port}`);
  });
})();
```

---

## Database (Mongoose)

```ts
// src/config/mongo.ts
import mongoose from 'mongoose';
import { env } from './env';

export async function connectDB() {
  await mongoose.connect(env.mongoUri);
  console.log('MongoDB connected');
}
```

**User model:**

```ts
// src/models/User.ts
import { Schema, model } from 'mongoose';

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    passwordHash: { type: String }, // set when using email/password
    googleId: { type: String },     // social login optional
    facebookId: { type: String },
    avatarUrl: { type: String },
  },
  { timestamps: true }
);

export const User = model('User', userSchema);
```

**Listing model:**

```ts
// src/models/Listing.ts
import { Schema, model, Types } from 'mongoose';

const listingSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    rent: { type: Number, required: true },
    location: { type: String, required: true },
    available: { type: Boolean, default: true },
    availableFrom: { type: Date },
    images: [String],
    postedBy: { type: Types.ObjectId, ref: 'User', required: true },
  },
  { timestamps: true }
);

listingSchema.index({ title: 'text', description: 'text' });
export const Listing = model('Listing', listingSchema);
```

---

## Authentication

### Password Hashing & JWT

```ts
// src/utils/password.ts
import bcrypt from 'bcryptjs';
export const hash = (plain: string) => bcrypt.hash(plain, 10);
export const compare = (plain: string, hashed: string) => bcrypt.compare(plain, hashed);
```

```ts
// src/utils/jwt.ts
import jwt from 'jsonwebtoken';
import { env } from '../config/env';
export function signToken(payload: object) {
  return jwt.sign(payload, env.jwt.secret, { expiresIn: env.jwt.expiresIn });
}
export function verifyToken<T>(token: string) {
  return jwt.verify(token, env.jwt.secret) as T;
}
```

```ts
// src/middlewares/auth.ts
import { Request, Response, NextFunction } from 'express';
import { verifyToken } from '../utils/jwt';

export function requireAuth(req: Request, res: Response, next: NextFunction) {
  const header = req.headers.authorization; // Bearer <token>
  const token = header?.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'No token' });
  try {
    const decoded = verifyToken<{ userId: string }>(token);
    (req as any).user = decoded;
    next();
  } catch {
    return res.status(403).json({ message: 'Invalid/expired token' });
  }
}
```

### Auth Routes & Controllers

```ts
// src/routes/auth.routes.ts
import { Router } from 'express';
import { login, register, me } from '../controllers/auth.controller';
import { requireAuth } from '../middlewares/auth';
export const router = Router();
router.post('/register', register);
router.post('/login', login);
router.get('/me', requireAuth, me);
```

```ts
// src/controllers/auth.controller.ts
import { Request, Response } from 'express';
import { User } from '../models/User';
import { hash, compare } from '../utils/password';
import { signToken } from '../utils/jwt';

export async function register(req: Request, res: Response) {
  const { name, email, password } = req.body;
  const exists = await User.findOne({ email });
  if (exists) return res.status(409).json({ message: 'Email in use' });
  const passwordHash = await hash(password);
  const user = await User.create({ name, email, passwordHash });
  const token = signToken({ userId: user.id });
  res.status(201).json({ token });
}

export async function login(req: Request, res: Response) {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user || !user.passwordHash) return res.status(401).json({ message: 'Invalid creds' });
  const ok = await compare(password, user.passwordHash);
  if (!ok) return res.status(401).json({ message: 'Invalid creds' });
  const token = signToken({ userId: user.id });
  res.json({ token });
}

export async function me(req: Request, res: Response) {
  const userId = (req as any).user.userId;
  const user = await User.findById(userId).select('name email avatarUrl createdAt');
  res.json({ user });
}
```

### Social Login (Optional, via Passport)

```ts
// src/config/passport.ts
import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { User } from '../models/User';
import { env } from './env';

passport.use(new GoogleStrategy({
  clientID: env.oauth.google.clientId!,
  clientSecret: env.oauth.google.clientSecret!,
  callbackURL: env.oauth.google.callbackURL,
}, async (_at, _rt, profile, done) => {
  const email = profile.emails?.[0]?.value;
  if (!email) return done(null, false);
  let user = await User.findOne({ email });
  if (!user) user = await User.create({ name: profile.displayName, email, googleId: profile.id });
  return done(null, user);
}));

export { passport };
```

```ts
// src/routes/social.routes.ts (example wiring)
import { Router } from 'express';
import { passport } from '../config/passport';
import { signToken } from '../utils/jwt';
export const router = Router();

router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
router.get('/google/callback', passport.authenticate('google', { session: false, failureRedirect: '/login' }), (req: any, res) => {
  const token = signToken({ userId: req.user.id });
  // redirect to client with token (or set cookie)
  res.redirect(`${process.env.CLI_URL}/social-login?token=${token}`);
});
```

> For Facebook: replicate with `passport-facebook`.

---

## Listings: Routes, Controllers, Filtering & Pagination

```ts
// src/routes/listing.routes.ts
import { Router } from 'express';
import { requireAuth } from '../middlewares/auth';
import { createListing, getListingById, getListings } from '../controllers/listing.controller';
import { uploadSingle } from '../middlewares/upload';

export const router = Router();
router.get('/', getListings);                 // public (with filters)
router.get('/:id', getListingById);           // public
router.post('/', requireAuth, uploadSingle, createListing); // protected + upload
```

```ts
// src/controllers/listing.controller.ts
import { Request, Response } from 'express';
import { Listing } from '../models/Listing';

export async function getListings(req: Request, res: Response) {
  const { page = '1', limit = '10', minRent, maxRent, location, available, q } = req.query;
  const filter: any = {};
  if (minRent) filter.rent = { ...filter.rent, $gte: Number(minRent) };
  if (maxRent) filter.rent = { ...filter.rent, $lte: Number(maxRent) };
  if (location) filter.location = location;
  if (available) filter.available = available === 'true';
  if (q) filter.$text = { $search: String(q) }; // requires text index

  const pageN = Math.max(1, Number(page) || 1);
  const limitN = Math.min(100, Math.max(1, Number(limit) || 10));

  const [items, total] = await Promise.all([
    Listing.find(filter)
      .sort({ createdAt: -1 })
      .skip((pageN - 1) * limitN)
      .limit(limitN)
      .lean(),
    Listing.countDocuments(filter),
  ]);

  res.json({
    listings: items,
    totalPages: Math.ceil(total / limitN),
    currentPage: pageN,
    total,
  });
}

export async function getListingById(req: Request, res: Response) {
  const doc = await Listing.findById(req.params.id).populate('postedBy', 'name');
  if (!doc) return res.status(404).json({ message: 'Not found' });
  res.json(doc);
}

export async function createListing(req: Request, res: Response) {
  const userId = (req as any).user.userId;
  const body = req.body as any;
  const images = (req as any).files?.length
    ? (req as any).files.map((f: any) => f.path)
    : ((req as any).file ? [(req as any).file.path] : []);

  const doc = await Listing.create({
    title: body.title,
    description: body.description,
    rent: Number(body.rent),
    location: body.location,
    available: body.available !== 'false',
    availableFrom: body.availableFrom ? new Date(body.availableFrom) : undefined,
    images,
    postedBy: userId,
  });
  res.status(201).json(doc);
}
```

---

## File Uploads (Multer)

```ts
// src/middlewares/upload.ts
import multer from 'multer';
import path from 'path';

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => cb(null, 'uploads/'),
  filename: (_req, file, cb) => {
    const unique = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, unique + path.extname(file.originalname));
  },
});

function fileFilter(_req: any, file: Express.Multer.File, cb: multer.FileFilterCallback) {
  const ok = /jpeg|jpg|png|webp/.test(path.extname(file.originalname).toLowerCase());
  cb(ok ? null : new Error('Invalid file type'), ok);
}

export const upload = multer({ storage, fileFilter, limits: { fileSize: 5 * 1024 * 1024 } });
export const uploadSingle = upload.single('image');
export const uploadArray = upload.array('images', 8);
```

> Static serving is enabled in `app.ts` via `app.use('/uploads', express.static('uploads'))`.

---

## Validation & Error Handling

**Validation (suggested):** Use `express-validator` or `zod` for request validation.

```ts
// example with zod
import { z } from 'zod';
export const createListingSchema = z.object({
  title: z.string().min(3),
  description: z.string().optional(),
  rent: z.coerce.number().positive(),
  location: z.string().min(2),
  available: z.coerce.boolean().optional(),
  availableFrom: z.coerce.date().optional(),
});
```

**Error middleware:**

```ts
// src/middlewares/error.ts
import { Request, Response, NextFunction } from 'express';
export function notFound(_req: Request, res: Response) {
  res.status(404).json({ message: 'Route not found' });
}
export function errorHandler(err: any, _req: Request, res: Response, _next: NextFunction) {
  const status = err.status || 500;
  res.status(status).json({ message: err.message || 'Server error' });
}
```

---

## Security & CORS

* Use HTTPS in production.
* Sanitize and validate input.
* Hash passwords (bcrypt) and never store plaintext.
* Set sensible JWT expiry; rotate secrets when needed.
* Configure CORS to the frontend origin during development.

---

## Linting, Formatting, and Pre‑commit

* **ESLint** with a Node/TypeScript preset (Airbnb base optional)
* **Prettier** for formatting
* **Husky** + **lint-staged** for pre‑commit hooks

```bash
npm i -D eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin prettier eslint-config-prettier eslint-plugin-import husky lint-staged
```

---

## Minimal API Reference

**Auth**

* `POST /api/auth/register` { name, email, password } → `{ token }`
* `POST /api/auth/login` { email, password } → `{ token }`
* `GET  /api/auth/me` (Bearer) → \`{ user }

**Listings**

* `GET  /api/listings` `?page&limit&minRent&maxRent&location&available&q`
* `GET  /api/listings/:id`
* `POST /api/listings` (Bearer + multipart) fields: `title, description, rent, location, available, availableFrom` + `image|images[]`

**Users (optional)**

* `GET /api/users/me` (alias of /auth/me) or profile endpoints later.

---

## Rollout Order (Recommended)

1. **Scaffold project & env** → app, server, DB connect, error middleware
2. **User model + auth (email/password)** → register/login/me + JWT middleware
3. **Listings CRUD (basic)** → create/getById/getAll
4. **Uploads** → Multer local, static serving
5. **Filtering + Pagination** → query params, indices
6. **Social login (Google)** → Passport strategy + callback → JWT
7. **Validation & hardening** → zod/express-validator, rate limiting (optional)

---

## Future Enhancements

* Cloud storage (S3/Cloudinary) via an upload service
* Full‑text search or geo queries
* Rate limiting (express-rate-limit) and helmet hardening
* Refresh tokens / rotate JWTs
* Messaging/chat service

---

## Notes

* No role‑based access now; any authenticated user can post and search.
* Keep controllers thin; push reusable logic into services/utils as app grows.
* Document your API for the frontend (this file + a `/docs` route or Swagger later).
