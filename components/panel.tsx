import clsx from "clsx";

export function Panel({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <section className={clsx("panel rounded-[1.75rem] p-5 md:p-6", className)}>{children}</section>;
}
