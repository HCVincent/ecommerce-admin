app\(dashboard)\[storeId]\(routes)\categories\[categoryId]\components\category-form.tsx
patch(`/api/${params.storeId}/categories/${params.categoryId}`,data);
post(`/api/${params.storeId}/categories`, data);
delete(`/api/${params.storeId}/categories/${params.categoryId}`);