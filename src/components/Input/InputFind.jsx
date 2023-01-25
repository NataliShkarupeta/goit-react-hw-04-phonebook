import { Input } from './inputName.styled';
import { Label } from './inputName.styled';
import { Wrap } from 'components/DefaultStylse.styled';
import PropTypes from 'prop-types';


export const InputFind = ({ find, filter }) => {
  return (
    <Wrap>
      <Label>
        Find contact by name
        <Input type="text" name="filter" value={filter} onChange={find} />
      </Label>
    </Wrap>
  );
};


InputFind.propTypes = {
  find: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};
