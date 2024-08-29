'use client';

// import Button from '@/app/components/button';
import React from 'react';

export interface GlobalErrorProps {
  error: Error;
  reset: () => void;
}

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  return (
    <html>
      <body>
        <div>
          <p>{`Something globally went wrong`}</p>
        </div>
      </body>
    </html>
  );
}
