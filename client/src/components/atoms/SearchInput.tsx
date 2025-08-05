import React from 'react';

export function SearchInput(
  props: React.InputHTMLAttributes<HTMLInputElement>,
) {
  return (
    <input
      type='text'
      {...props}
      className={`flex-1 bg-transparent outline-none placeholder:text-slate-400 ${
        props.className ?? ''
      }`}
    />
  );
}
