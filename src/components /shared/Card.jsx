import PropTypes from "prop-types";
import { useContext } from "react";
import FeedbackContext from "../../context/FeedbackContext";

function Card({ children, reverse, item }) {
  const { feedbackEdit } = useContext(FeedbackContext);

  return (
    <div
      className={`card ${reverse && "reverse"} ${
        feedbackEdit.item.id &&
        (feedbackEdit.item.id === item?.id ? "update" : "")
      }`}
    >
      {children}
    </div>
  );
}

Card.defaultProps = {
  reverse: false,
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool,
};
export default Card;
