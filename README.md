# Idle Champions Seat Viewer

A small [Next.js](https://nextjs.org/) application that fetches hero data from the Idle Champions API and displays champions grouped by their seat. Heroes are colour coded based on whether you own them and if they are currently in a formation.

## Getting Started

1. Install dependencies
   ```bash
   npm install
   ```
2. Run the development server
   ```bash
   npm run dev
   ```

Open <http://localhost:3000> in your browser to see the page.

## Configuration

Idle Champions credentials are loaded from environment variables.

### Obtaining your credentials

Launch the game and look for the authentication request to `authenticatesteamuser`.
The JSON response includes `internal_user_id` and `hash` fields.
Use the value from `internal_user_id` as `USER_ID` and the value from `hash`
as `USER_HASH` when configuring the application.

### Local setup

Create a `.env` (or `.env.local`) file in the project root containing:

```bash
USER_ID=your-id
USER_HASH=your-hash
```

### Vercel deployment

In the Vercel dashboard, add `USER_ID` and `USER_HASH` as Environment Variables
under **Project Settings**.

## Building for Production

Generate an optimized build with:

```bash
npm run build
```

Then start the server:

```bash
npm start
```

## Linting

Run ESLint with:

```bash
npm run lint
```

## Type Checking

Verify TypeScript types using:

```bash
npm run type-check
```

## Testing

Run project tests with:

```bash
npm test
```

## Notes

This project relies on the public Idle Champions endpoints and may break if those APIs change.
