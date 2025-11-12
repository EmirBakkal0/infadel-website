import React from 'react';

export function SH({ children }) {
  return (
    <header className="mb-5 text-center">
      <h1 className="text-4xl font-bold mb-6">{children}</h1>
    </header>
  );
}

export function SH2({ children }) {
  return (
    <header className=" mt-4">
      <h2 className="text-2xl font-bold mb-4">{children}</h2>
    </header>
  );
}

export function SH3({ children }) {
  return (
    <header className=" mt-4">
      <h3 className="text-xl font-bold mb-4">{children}</h3>
    </header>
  );
}

export function SP({ children }) {
  return <p className="mb-4">{children}</p>;
}

export function STip({ children }) {
  return <strong className=" text-yellow-600 ">{children}</strong>;
}