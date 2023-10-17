https://ui.shadcn.com/docs/installation/next
npx create-next-app@latest my-app --typescript --tailwind --eslint
app router/ no src/ no

npx shadcn-ui@latest init
√ Would you like to use TypeScript (recommended)? ... yes  
√ Which style would you like to use? » Default  
√ Which color would you like to use as base color? » Slate  
√ Where is your global CSS file? ... app/globals.css  
√ Would you like to use CSS variables for colors? ... yes  
√ Where is your tailwind.config.js located? ... tailwind.config.js  
√ Configure the import alias for components: ... @/components  
√ Configure the import alias for utils: ... @/lib/utils  
√ Are you using React Server Components? ...  yes  
√ Write configuration to components.json. Proceed? ... yes  

docsify init ./docs  
modify index.html, add _sidebar.md, steps folder.  
change line: add either a backslash \ or two blank spaces at the end of the line  

jest testing
https://nextjs.org/docs/pages/building-your-application/optimizing/testing#quickstart-2
npm install --save-dev jest jest-environment-jsdom @testing-library/react @testing-library/jest-dom