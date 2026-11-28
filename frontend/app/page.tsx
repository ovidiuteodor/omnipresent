import Button from "@/components/Button";
import Card from "@/components/Card";

export default function Home() {
  return (
    <main className="flex flex-1 items-center justify-center p-4">
      <Card>
        <h1 className="text-2xl font-semibold">Omnipresent</h1>
        <p className="text-text-muted">Website to keep track of your media.</p>
        <Button>Get started</Button>
        <Button variant="secondary">Add to list</Button>
      </Card>
    </main>
  );
}