import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  locale: string;
};

export default function PageLayout({ children }: Props) {
  return (
    <div>
      <main className="relative">
        <>{children}</>
      </main>
    </div>
  );
}
