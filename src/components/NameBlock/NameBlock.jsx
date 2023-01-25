import { H1 } from "./NameBlock.styled";
import PropTypes from 'prop-types';

export const Title = ({ text }) => {
  return <H1>{text}</H1>;
};

Title.propTypes = {
  text: PropTypes.string.isRequired,
};