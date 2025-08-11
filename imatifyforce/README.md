# Kanzforce (IMATIFY Starter)

This is a starter project for **IMATIFY / Kanzforce** — a React + Tailwind + Firebase (auth) frontend skeleton with a minimal Express backend and demo question JSONs.

**What’s included**
- `/frontend` — React app (Tailwind CSS ready), Firebase placeholders for auth.
- `/backend` — Node.js + Express API skeleton with secure middleware placeholders.
- `/questions` — Demo JSON files (2 sample questions per bank + 2 sample mocks).
- `.gitignore`, deploy notes.

**How to use**
1. Unzip and open the `kanzforce` folder.
2. Frontend:
   - `cd frontend`
   - `npm install`
   - Add your Firebase config in `frontend/.env.local` (see `.env.example`)
   - `npm run dev` (or `npm start` depending on the template)
3. Backend:
   - `cd backend`
   - `npm install`
   - Set environment variables as described in `backend/.env.example`
   - `node server.js` or `npm start`

See each folder README for more details.

This is a lightweight starter intended for you or your developer to extend. It includes demo question JSONs so the quiz UI can be connected quickly.
