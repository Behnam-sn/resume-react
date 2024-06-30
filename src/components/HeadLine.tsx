interface HeadLineProps {
  title: string;
}

export const HeadLine = ({ title }: HeadLineProps) => {
  return (
    <div>
      <h2 className="text-xl border-b-2">{title}</h2>
      <div>text</div>
    </div>
  );
};

export default HeadLine;
