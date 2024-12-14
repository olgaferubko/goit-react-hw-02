import s from "./Options.module.css";

export default function Options({ onUpdate, onReset, feedbackItems, keepFeedback }) {
  return (
    <div className={s.optionsContainer}>
      {Object.keys(feedbackItems).map((title, id) => (
        <button onClick={() => onUpdate(title)} className={s.option} key={id}>
          {title}
        </button>
      ))}
      {keepFeedback > 0 && (
        <button className={s.option} onClick={onReset}>
          reset
        </button>
      )}
    </div>
  );
}
