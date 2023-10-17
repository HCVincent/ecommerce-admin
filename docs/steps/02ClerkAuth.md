https://clerk.com/docs/quickstarts/nextjs
npm install @clerk/nextjs
.env
<ClerkProvider />
middleware.ts
sign-up/[[...sign-up]]/page.tsx
sign-in/[[...sign-in]]/page.tsx
<UserButton afterSignOutUrl="/"/>

app\(auth)\(routes)\layout.tsx to control all pages in routes

setup cypress:
https://nextjs.org/docs/pages/building-your-application/optimizing/testing
npm install --save-dev cypress
package.json
npm run cypress:open
solve the issues may occur:
add baseUrl in cypress.config.ts file
change to "moduleResolution": "Node" in tsconfig.json file