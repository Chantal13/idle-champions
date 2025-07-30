# Idle Champions Seat Viewer

A small [Next.js](https://nextjs.org/) application that fetches hero data from the Idle Champions API and displays champions grouped by their seat. Heroes are colour coded based on whether you own them and if they are currently in a formation.

## Getting Started

1. Install dependencies
   ```bash
   npm install
   ```
2. (Optional) Update the `USER_ID` and `USER_HASH` constants in `utils/getHeroes.ts` with your own credentials.
3. Run the development server
   ```bash
   npm run dev
   ```

Open <http://localhost:3000> in your browser to see the page.

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

## Notes

This project relies on the public Idle Champions endpoints and may break if those APIs change.
