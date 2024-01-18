export default function Coreconcepts({ image, title, description }) {
  console.log("hello worldd");
  return (
    <li>
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
    </li>
  );
}
