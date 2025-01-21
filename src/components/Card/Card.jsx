import s from "./Card.module.scss";

export const Card = ({ key, img, title, text, children }) => {
  return (
    <div key={key}>
      <img src={img} alt={title} />
      <p>{title}</p>
      <p>{text}</p>
      <div>{children}</div>
    </div>
  );
};
