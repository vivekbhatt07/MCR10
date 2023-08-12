const Card = ({ children, label, color }) => {
  return (
    <article
      className="flex flex-col items-center p-4 gap-3 rounded-md min-h-[150px] bg-[#eee]"
      style={{
        boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;",
      }}
    >
      {children && (
        <span className="text-3xl font-extrabold" style={{ color: color }}>
          {children}
        </span>
      )}
      <span className="text-2xl">{label}</span>
    </article>
  );
};

export default Card;
