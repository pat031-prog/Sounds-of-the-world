import React from 'react';
import ReactDOM from 'react-dom/client';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const renderBootFailure = (title: string, details: string) => {
  rootElement.innerHTML = `
    <div style="min-height:100vh;display:flex;align-items:center;justify-content:center;background:#050505;color:#EDEDED;font-family:'DM Sans',sans-serif;padding:24px;">
      <div style="max-width:720px;width:100%;border:1px solid rgba(255,255,255,0.1);background:#0d0d0d;padding:32px;box-shadow:0 20px 60px rgba(0,0,0,0.45);">
        <div style="display:inline-block;padding:6px 10px;background:#FF3530;color:#000;font-size:11px;font-weight:700;letter-spacing:0.22em;text-transform:uppercase;margin-bottom:18px;">Boot Error</div>
        <h1 style="margin:0 0 16px 0;font-family:'Playfair Display',serif;font-size:44px;line-height:0.95;">${title}</h1>
        <p style="margin:0 0 18px 0;color:#b8b8b8;font-size:16px;line-height:1.7;">La app no termino de montar. El detalle del error queda visible aca para no dejar una pantalla vacia durante deploy.</p>
        <pre style="margin:0;white-space:pre-wrap;word-break:break-word;background:#080808;border:1px solid rgba(255,255,255,0.08);padding:18px;color:#FF8C89;font-size:13px;line-height:1.6;overflow:auto;">${details}</pre>
      </div>
    </div>
  `;
};

class AppRuntimeBoundary extends React.Component<
  { children: React.ReactNode },
  { error: Error | null }
> {
  state = {
    error: null as Error | null,
  };

  static getDerivedStateFromError(error: Error) {
    return { error };
  }

  componentDidCatch(error: Error) {
    console.error('App runtime boundary caught an error:', error);
  }

  render() {
    if (this.state.error) {
      return (
        <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#050505', color: '#EDEDED', fontFamily: "'DM Sans', sans-serif", padding: '24px' }}>
          <div style={{ maxWidth: '720px', width: '100%', border: '1px solid rgba(255,255,255,0.1)', background: '#0d0d0d', padding: '32px', boxShadow: '0 20px 60px rgba(0,0,0,0.45)' }}>
            <div style={{ display: 'inline-block', padding: '6px 10px', background: '#FF3530', color: '#000', fontSize: '11px', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', marginBottom: '18px' }}>Runtime Error</div>
            <h1 style={{ margin: '0 0 16px 0', fontFamily: "'Playfair Display', serif", fontSize: '44px', lineHeight: 0.95 }}>The app crashed while rendering.</h1>
            <p style={{ margin: '0 0 18px 0', color: '#b8b8b8', fontSize: '16px', lineHeight: 1.7 }}>Se capturó el error del árbol principal para evitar la pantalla vacía.</p>
            <pre style={{ margin: 0, whiteSpace: 'pre-wrap', wordBreak: 'break-word', background: '#080808', border: '1px solid rgba(255,255,255,0.08)', padding: '18px', color: '#FF8C89', fontSize: '13px', lineHeight: 1.6, overflow: 'auto' }}>
              {`${this.state.error.name}: ${this.state.error.message}\n${this.state.error.stack ?? ''}`}
            </pre>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

window.addEventListener('error', (event) => {
  const message =
    event.error instanceof Error
      ? `${event.error.name}: ${event.error.message}\n${event.error.stack ?? ''}`
      : event.message;
  renderBootFailure('Runtime exception during boot', message);
});

window.addEventListener('unhandledrejection', (event) => {
  const reason = event.reason instanceof Error
    ? `${event.reason.name}: ${event.reason.message}\n${event.reason.stack ?? ''}`
    : String(event.reason);
  renderBootFailure('Unhandled promise rejection during boot', reason);
});

const bootstrap = async () => {
  try {
    const { default: App } = await import('./App');
    const root = ReactDOM.createRoot(rootElement);
    root.render(
      <React.StrictMode>
        <AppRuntimeBoundary>
          <App />
        </AppRuntimeBoundary>
      </React.StrictMode>,
    );
  } catch (error) {
    const details = error instanceof Error ? `${error.name}: ${error.message}\n${error.stack ?? ''}` : String(error);
    renderBootFailure('Failed to import application shell', details);
  }
};

void bootstrap();
