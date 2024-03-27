import PropTypes from 'prop-types'

import "./Button.css";

function Button({ id, text, action }) {
  const handleAction = (e) => {
    action(e);
  };

  return (
    <button id={id} onClick={handleAction}>
      {text}
    </button>
  );
}

Button.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired
}

export default Button;
