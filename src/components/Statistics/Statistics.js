import PropTypes from 'prop-types';
import s from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div>
      <p className={s.feedback}>good: {good}</p>
      <p className={s.feedback}>neutral: {neutral}</p>
      <p className={s.feedback}>bad: {bad}</p>
      <p className={s.feedback}>total: {total}</p>
      <p className={s.feedback}>positive feedback: {positivePercentage}%</p>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
