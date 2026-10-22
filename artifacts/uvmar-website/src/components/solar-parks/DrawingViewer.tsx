import { useEffect, useState } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Download, ExternalLink, Minus, Plus, RotateCcw, X } from "lucide-react";
import { Dialog, DialogDescription, DialogOverlay, DialogPortal, DialogTitle } from "@/components/ui/dialog";
import { asset } from "@/lib/utils";
import type { Drawing } from "@/data/solar-parks";

const ZOOMS = [1, 1.5, 2, 3, 4];

export function DrawingViewer({ drawing, onOpenChange }: { drawing: Drawing | null; onOpenChange: (open: boolean) => void }) {
  const [z, setZ] = useState(0);
  useEffect(() => setZ(0), [drawing?.id]);
  const scale = ZOOMS[z];

  return (
    <Dialog open={!!drawing} onOpenChange={onOpenChange}>
      <DialogPortal>
        <DialogOverlay className="bg-secondary/90 backdrop-blur-sm" />
        <DialogPrimitive.Content
          className="fixed inset-0 sm:inset-6 z-50 flex flex-col bg-background border border-border shadow-2xl outline-none data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95"
          data-testid="dialog-drawing-viewer"
        >
          {drawing && (
            <>
              <div className="flex flex-wrap items-center gap-3 justify-between border-b border-border px-4 sm:px-6 py-3 bg-card">
                <div className="min-w-0">
                  <DialogTitle className="font-display text-lg sm:text-xl font-medium truncate">
                    {drawing.title} <span className="text-primary">/ {drawing.kind}</span>
                  </DialogTitle>
                  <DialogDescription className="text-xs text-muted-foreground truncate">
                    {drawing.facts.join(" · ")}
                  </DialogDescription>
                </div>
                <div className="flex items-center gap-1">
                  <button aria-label="Zoom out" disabled={z === 0} onClick={() => setZ(z - 1)} className="viewer-btn" data-testid="button-zoom-out"><Minus className="w-4 h-4" /></button>
                  <span className="w-12 text-center text-xs font-bold tabular-nums" aria-live="polite">{Math.round(scale * 100)}%</span>
                  <button aria-label="Zoom in" disabled={z === ZOOMS.length - 1} onClick={() => setZ(z + 1)} className="viewer-btn" data-testid="button-zoom-in"><Plus className="w-4 h-4" /></button>
                  <button aria-label="Reset zoom" onClick={() => setZ(0)} className="viewer-btn" data-testid="button-zoom-reset"><RotateCcw className="w-4 h-4" /></button>
                  <a href={asset(drawing.pdf)} target="_blank" rel="noopener noreferrer" className="viewer-btn hidden sm:inline-flex w-auto px-3 gap-2 text-[10px] uppercase tracking-widest font-bold" data-testid="link-viewer-open-pdf">
                    <ExternalLink className="w-4 h-4" /> PDF
                  </a>
                  <a href={asset(drawing.pdf)} download aria-label="Download PDF" className="viewer-btn" data-testid="link-viewer-download"><Download className="w-4 h-4" /></a>
                  <DialogPrimitive.Close aria-label="Close viewer" className="viewer-btn bg-secondary text-secondary-foreground hover:bg-secondary/90 ml-1" data-testid="button-close-viewer">
                    <X className="w-4 h-4" />
                  </DialogPrimitive.Close>
                </div>
              </div>
              <div className="flex-1 overflow-auto overscroll-contain bg-muted/60 structural-grid" tabIndex={0} aria-label="Drawing preview, scroll to pan">
                <div className="p-3 sm:p-6" style={{ width: `${scale * 100}%`, minWidth: "100%" }}>
                  <img src={asset(drawing.image)} alt={drawing.alt} className="w-full h-auto bg-card border border-border shadow-sm" style={scale === 1 ? { maxHeight: "calc(100dvh - 9rem)", objectFit: "contain" } : undefined} />
                </div>
              </div>
              <div className="sm:hidden border-t border-border px-4 py-3 flex gap-2 bg-card">
                <a href={asset(drawing.pdf)} target="_blank" rel="noopener noreferrer" className="flex-1 inline-flex items-center justify-center gap-2 h-11 bg-primary text-primary-foreground text-xs uppercase tracking-widest font-bold">
                  <ExternalLink className="w-4 h-4" /> Open original PDF
                </a>
              </div>
            </>
          )}
        </DialogPrimitive.Content>
      </DialogPortal>
    </Dialog>
  );
}
