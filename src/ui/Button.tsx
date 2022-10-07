import React from 'react';

export default function Button({ title, type, style }: { title: string; type: 'outline' | 'full', style: React.CSSProperties }) {
  return (
    <button
      style={{
        ...(style),
        padding: '10px 20px',
        ...(type === 'outline'
          ? { border: '1px solid black' }
          : { background: 'black', color: 'white' })
      }}
    >
      {title}
    </button>
  );
}
