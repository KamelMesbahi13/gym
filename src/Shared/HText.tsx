type Props = {
  children: React.ReactNode;
};

const HText = ({ children }: Props) => {
  return (
    <div>
      <h1 className="text-3xl font-bold basis-3/5 font-montserrat">
        {children}
      </h1>
    </div>
  );
};

export default HText;
