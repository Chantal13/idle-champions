This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Environment Variables

Create a `.env.local` file based on `.env.example` and provide your `USER_ID` and `USER_HASH` values. These credentials are required for fetching Idle Champions data and should never be committed to version control.

## Scripts

Useful npm scripts are defined in `package.json`:

```bash
npm run lint        # Check code style with ESLint
npm run type-check  # Run the TypeScript compiler in noEmit mode
npm run build       # Create an optimized production build
npm test            # Run project tests
```

## Data Structures

Hero and seat data returned from the API follow these interfaces:

```ts
interface Hero {
  id: number;
  name: string;
  game_instance_id?: number;
  graphic_id: number;
  portrait_graphic_id: number;
  character_sheet_details: {
    full_name: string;
    class: string;
    race: string;
    age: number;
    alignment: string;
    ability_scores: {
      str: number;
      dex: number;
      con: number;
      int: number;
      wis: number;
      cha: number;
    };
  };
  owned: boolean;
  seat_id: number;
  tags: string[];
}

interface Seat {
  id: number;
  heroes: Hero[];
}
```
