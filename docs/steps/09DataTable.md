https://ui.shadcn.com/docs/components/data-table

columns.tsx (client component) will contain our column definitions:
https://ui.shadcn.com/docs/components/data-table#row-actions
You can access the row data using row.original in the cell function. Use this to handle actions for your row eg. use the id to make a DELETE call to your API.

data-table.tsx (client component) will contain our <DataTable /> component.

page.tsx (server component) is where we'll fetch data and render our table.