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

## Usage

1. Obtain your Idle Champions `USER_ID` and `USER_HASH`. The easiest way is to inspect a network request to `getuserdetails` while the game is running and copy the values from the query string.
2. Edit `utils/getHeroes.ts` and replace the `USER_ID` and `USER_HASH` constants with your values.
3. Run `npm run dev` and open <http://localhost:3000>.
4. The page displays every champion grouped by their seat.
   - Owned champions appear with a dark border.
   - Champions in a formation are highlighted in yellow.
   - Unowned champions are greyed out.
5. Scroll horizontally to browse all of the seats.



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
