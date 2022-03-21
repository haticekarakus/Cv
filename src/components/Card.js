import "./Card.css";
function Card(props) {
  const classes = "Card " + props.className;
  return (
    <div className={classes}>
      <table>
              {props.children}
          </table>
    </div>
  );
}
export default Card;
