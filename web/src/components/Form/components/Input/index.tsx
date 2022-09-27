import { InputHTMLAttributes } from "react";

type InputProps = {
  id: string;
  label?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export function Input({ label, id, ...rest }: InputProps) {
  if (!label) {
    return <input {...rest} id={id} className="p-2 bg-zinc-900" />;
  }

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id}>{label}</label>
      <input {...rest} id={id} className="p-2 bg-zinc-900" />
    </div>
  );
}
