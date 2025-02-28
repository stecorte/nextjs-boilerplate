# Next.js Boilerplate
This is a Next.js boilerplate with
- React: 19
- NextJS version: 15.1.7
- next-intl: 3.26.5

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Internationalization

This project uses [`next-intl`](https://next-intl.dev/) for multi-language support.  
It is configured for App Router and without i18n routing.  

To change the app locale, set the `x-locale` cookie value with a valid language 2-digit code.  
The default language is the browser's one, if present in the list of enabled languages. 

See logic inside `src/i18n/request.ts` file.

## ESLint
ESLint is configured. Default tab size is 4 spaces for the majority of the file extensions of this codebase. 
If you are using VSCode, please remember to set this settigs with the following values:
```json
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.


## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
