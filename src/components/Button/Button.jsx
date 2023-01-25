import { But } from './Button.styled';
import PropTypes from 'prop-types';

export const Button = ({ onClicked, text, disabled }) => {
  return (
    <But type="button" onClick={onClicked} disabled={disabled}>
      {text}
    </But>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClicked: PropTypes.func.isRequired,
};
