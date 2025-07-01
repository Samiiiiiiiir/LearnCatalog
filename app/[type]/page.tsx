import { firstLevelCategories } from '@/helpers';

interface TypeProps {
  params: Promise<{ type: string }>;
}

export default async function Type({ params }: TypeProps) {
  const { type } = await params;

  return <div>Page: {type}</div>;
}

export async function generateStaticParams() {
  const paths = firstLevelCategories.map((c) => ({
    type: c.route,
  }));

  return paths;
}
