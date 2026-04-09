import React from 'react';
import { EditorialIssueMapSection } from '../types';

interface EditorialIssueMapProps {
  items: EditorialIssueMapSection[];
  activeTarget?: string;
  isDesktop: boolean;
  onSelect: (item: EditorialIssueMapSection) => void;
  sticky?: boolean;
  className?: string;
}

export const EditorialIssueMap: React.FC<EditorialIssueMapProps> = ({
  items,
  activeTarget,
  isDesktop,
  onSelect,
  sticky = false,
  className = '',
}) => {
  const stickyClass = sticky ? 'md:sticky md:top-24 md:z-20' : '';

  return (
    <div className={`${stickyClass} ${className}`.trim()}>
      <div className="border-y border-white/10 bg-[#090909]/90 px-3 py-3 backdrop-blur-md md:px-4">
        <div className="no-scrollbar flex gap-2 overflow-x-auto md:flex-wrap md:gap-3">
          {items.map((item) => {
            const isActive = activeTarget === item.target;

            return (
              <button
                key={`${item.context}-${item.id}`}
                onClick={() => onSelect(item)}
                className={`shrink-0 border px-3 py-2 text-[10px] font-bold uppercase tracking-[0.24em] transition-colors ${
                  isActive
                    ? 'border-[#FF3530] bg-[#FF3530]/10 text-white'
                    : 'border-white/10 text-white/65 hover:border-[#FF3530] hover:text-white'
                }`}
                title={item.description}
              >
                {item.label}
              </button>
            );
          })}
        </div>
        {!isDesktop ? null : (
          <div className="mt-3 grid grid-cols-2 gap-2 xl:grid-cols-4">
            {items
              .filter((item) => item.description)
              .slice(0, 4)
              .map((item) => (
                <button
                  key={`${item.context}-${item.id}-detail`}
                  onClick={() => onSelect(item)}
                  className="border border-white/10 px-3 py-3 text-left transition-colors hover:border-[#FF3530]"
                >
                  <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.24em] text-[#FF3530]">
                    {item.label}
                  </span>
                  <p className="text-xs leading-relaxed text-gray-500">{item.description}</p>
                </button>
              ))}
          </div>
        )}
      </div>
    </div>
  );
};
