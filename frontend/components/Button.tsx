type ButtonProps = {
  children: React.ReactNode;
};

export default function Button({ children }: ButtonProps) {
  return (
    <button type="button" className="bg-accent cursor-pointer hover:bg-accent-hover text-on-accent py-2 px-4 rounded-card focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-text">
      {children}
    </button>
  );
}