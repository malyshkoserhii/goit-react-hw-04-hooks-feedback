import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={s.wrapper}>
      {options.map((el, idx) => (
        <div key={idx}>
          <button className={s.feedbackBtn} onClick={() => onLeaveFeedback(el)}>
            {el}
          </button>
        </div>
      ))}
    </div>
  );
};

FeedbackOptions.protoTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
