app\(dashboard)\[storeId]\billboards\[billboardId]\components\billboard-form.tsx
patch(`/api/${params.storeId}/billboards/${params.billboardId}`,data);
post(`/api/${params.storeId}/billboards`, data);
delete(`/api/${params.storeId}/billboards/${params.billboardId}`);

