import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-muted-foreground mb-6">
        The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link 
        href="/" 
        className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90"
      >
        Return Home
      </Link>
    </div>
  );
} 
