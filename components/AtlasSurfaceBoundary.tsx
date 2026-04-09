import React from 'react';
import { ArrowUpRight, BookOpen, Globe2, TriangleAlert } from 'lucide-react';

interface AtlasSurfaceBoundaryProps {
  children: React.ReactNode;
  resetKey: string;
  surfaceName: string;
  onOpenGlobalIssue: () => void;
  onOpenEditorialHome: () => void;
}

interface AtlasSurfaceBoundaryState {
  hasError: boolean;
}

export class AtlasSurfaceBoundary extends React.Component<
  AtlasSurfaceBoundaryProps,
  AtlasSurfaceBoundaryState
> {
  state: AtlasSurfaceBoundaryState = {
    hasError: false,
  };

  static getDerivedStateFromError(): AtlasSurfaceBoundaryState {
    return {
      hasError: true,
    };
  }

  componentDidCatch(error: unknown) {
    console.error(`Atlas surface failed to render: ${this.props.surfaceName}`, error);
  }

  componentDidUpdate(prevProps: AtlasSurfaceBoundaryProps) {
    if (prevProps.resetKey !== this.props.resetKey && this.state.hasError) {
      this.setState({ hasError: false });
    }
  }

  render() {
    if (!this.state.hasError) {
      return this.props.children;
    }

    return (
      <div className="flex h-full w-full items-center justify-center bg-[#050505] px-6">
        <div className="max-w-xl border border-white/10 bg-[#0d0d0d] p-8 text-center text-white shadow-2xl">
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-[#FF3530]/30 bg-[#FF3530]/10 text-[#FF3530]">
            <TriangleAlert size={22} />
          </div>
          <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.32em] text-[#FF3530]">
            Atlas Fallback
          </p>
          <h2 className="mb-4 font-serif-display text-4xl leading-none text-white">
            {this.props.surfaceName} no cargo bien.
          </h2>
          <p className="mx-auto mb-8 max-w-lg text-sm leading-relaxed text-gray-400 md:text-base">
            La app sigue disponible. Podes entrar directo al dossier global o volver al hub
            editorial mientras se recompone la superficie visual.
          </p>
          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <button
              onClick={this.props.onOpenGlobalIssue}
              className="flex items-center justify-center gap-2 bg-[#FF3530] px-4 py-3 text-xs font-bold uppercase tracking-[0.24em] text-black transition-transform hover:scale-[1.02]"
            >
              <BookOpen size={14} />
              Open Global Issue
            </button>
            <button
              onClick={this.props.onOpenEditorialHome}
              className="flex items-center justify-center gap-2 border border-white/15 px-4 py-3 text-xs font-bold uppercase tracking-[0.24em] text-white transition-colors hover:border-[#FF3530] hover:text-[#FF3530]"
            >
              <Globe2 size={14} />
              Go Editorial Hub
              <ArrowUpRight size={14} />
            </button>
          </div>
        </div>
      </div>
    );
  }
}
