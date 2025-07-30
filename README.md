# Idle Champions Seat Viewer

A small [Next.js](https://nextjs.org/) application that fetches hero data from the Idle Champions API and displays champions grouped by their seat. Heroes are colour coded based on whether you own them and if they are currently in a formation.

## Getting Started

1. Install dependencies
   ```bash
   npm install
   ```
2. Create a `.env.local` file and set `USER_ID` and `USER_HASH` to your credentials.
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

## Deployment

Deploy the app to Vercel and configure your custom domain, e.g.
`idle-champions-ivory.vercel.app`, in the Vercel project settings.

## Notes

This project relies on the public Idle Champions endpoints and may break if those APIs change.
