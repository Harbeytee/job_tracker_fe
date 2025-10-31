export default function PageHeader({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div>
      <h2 className="text-primary text-3xl font-bold">{title}</h2>
      <p className="my-4 max-w-[850px] text-lg">{description}</p>
    </div>
  );
}
