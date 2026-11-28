type ButtonProps = {
    children: React.ReactNode;
    variant?: "primary" | "secondary";
};

export default function Button({ children, variant }: ButtonProps) {
    let classes = "bg-accent cursor-pointer hover:bg-accent-hover text-on-accent py-2 px-4 rounded-card focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-text";
    if (variant === "secondary") {
        classes = "bg-surface-2 cursor-pointer hover:bg-border text-text py-2 px-4 rounded-card focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-text border border-border";
    }
    return (
        <button type="button" className={classes}>
            {children}
        </button>
    );
}