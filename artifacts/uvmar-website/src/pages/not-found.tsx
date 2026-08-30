import { Link } from "wouter";
import { AlertCircle, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background page-top-offset">
      <div className="container mx-auto px-4 py-16 text-center max-w-lg">
        <div className="w-16 h-16 bg-muted border border-border flex items-center justify-center mx-auto mb-6">
          <AlertCircle className="w-8 h-8 text-muted-foreground" />
        </div>
        <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">404</h1>
        <p className="text-xl text-muted-foreground mb-8">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Button asChild className="rounded-none bg-foreground text-background hover:bg-primary transition-colors font-bold uppercase tracking-wider h-12 px-8">
          <Link href="/">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
          </Link>
        </Button>
      </div>
    </div>
  );
}
