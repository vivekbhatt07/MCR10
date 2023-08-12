const Card = (props) => {
  return (
    <article className="flex flex-col items-center border-2 p-4 gap-3">
      <span className="text-2xl">{props.children}</span>
      <span>{props.label}</span>
    </article>
  );
};

export default Card;
