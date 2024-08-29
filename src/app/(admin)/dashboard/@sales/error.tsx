'use client';

import React from 'react';

export interface ErrorComponentProps {
  error: Error;
  reset: () => void;
}

export default function ErrorComponent({}: ErrorComponentProps) {
  return <div>unexpected error inside slot sales</div>;
}
