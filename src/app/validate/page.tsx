import React, { Suspense } from 'react';
import ValidateClient from './ValidateClient';

export default function Page() {
  // This is a server component that provides the Suspense boundary
  // for the nested client component that uses `useSearchParams()`.
  return (
    <Suspense fallback={<div>Cargando información...</div>}>
      <ValidateClient />
    </Suspense>
  );
}