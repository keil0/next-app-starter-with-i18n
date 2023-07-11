import PageLayout from "@/components/PageLayout/PageLayout";
import { Metadata } from "next";

type Props = {
  params: { locale: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: `[${params.locale}] metadata title`,
    description: `[${params.locale}] metadata description`,
  };
}

export default function IndexPage({ params }: Props) {
  return (
    <PageLayout locale={params.locale}>
      <div className="h-screen flex flex-col gap-y-2 justify-center items-center">
        <h1 className="text-3xl">Hello World</h1>
        <h2>Locale : {params.locale}</h2>
      </div>
    </PageLayout>
  );
}
