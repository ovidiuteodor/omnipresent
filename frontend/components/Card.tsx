type CardProps = {
    children: React.ReactNode;
};

export default function Card({ children }: CardProps) {
    const classes = "bg-surface border-border border rounded-card p-6 max-w-sm flex flex-col gap-4";
    return (
        <div className={classes}>
            {children}
        </div>
    );
}