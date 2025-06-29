type Params = Promise<{ slug: string }>;

export default async function SlugRoute({ params }: { params: Params }) {
  const {slug} = await params;
  return <h1>slug: {slug}</h1>;
}
