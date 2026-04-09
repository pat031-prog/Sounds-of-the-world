import React from 'react';
import { Loader2 } from 'lucide-react';

export const Loader: React.FC<{ text?: string }> = ({ text = "Cargando..." }) => {
  return (
    <div className="flex flex-col items-center justify-center p-8 space-y-4 animate-in fade-in duration-500">
      <div className="bg-[#2A2A2A] p-4 rounded-full border border-white/10">
        <Loader2 className="w-8 h-8 animate-spin text-[#FF3530]" />
      </div>
      <p className="text-sm font-medium text-gray-400 tracking-wide">{text}</p>
    </div>
  );
};
