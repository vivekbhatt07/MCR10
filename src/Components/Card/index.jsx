const Card = ({ children, label }) => {
  return (
    <article className="flex flex-col items-center border-2 p-4 gap-3">
      {children && <span className="text-2xl">{children}</span>}
      <span>{label}</span>
    </article>
  );
};

export default Card;
