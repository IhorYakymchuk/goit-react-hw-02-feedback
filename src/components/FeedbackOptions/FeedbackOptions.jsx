import PropTypes from 'prop-types';
import { Button, OptionsList } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const [typeGood, typeNeutral, typeBad] = options;
  return (
    <OptionsList>
      <Button type="button" onClick={() => onLeaveFeedback(typeGood)}>
        Good
      </Button>
      <Button type="button" onClick={() => onLeaveFeedback(typeNeutral)}>
        Neutral
      </Button>
      <Button type="button" onClick={() => onLeaveFeedback(typeBad)}>
        Bad
      </Button>
    </OptionsList>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;