export default function AboutPage() {
  return (
    <main className="flex min-h-[calc(100vh-80px)] items-center justify-center px-6">
      <div className="max-w-lg text-center">
        <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
          Coming Soon
        </span>

        <h1 className="mt-6 text-4xl font-bold tracking-tight">
          About Us
        </h1>

        <p className="mt-4 text-muted-foreground">
          We're working on this page to share our story, mission, and the team
          behind the Virtual Interview Platform.
        </p>
      </div>
    </main>
  );
}