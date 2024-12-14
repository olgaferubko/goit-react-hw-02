import s from "./Options.module.css";

export default function Options({ onUpdate = () => {}, feedbackItems = {}, keepFeedback = 0 }) {
  return (
    <div className={s.optionsContainer}>
      {feedbackItems && typeof feedbackItems === "object" &&
        Object.keys(feedbackItems).map((title, id) => (
          <button onClick={() => onUpdate(title)} className={s.option} key={id}>
            {title}
          </button>
        ))}
      {keepFeedback > 0 && (
        <button className={s.option} onClick={() => onUpdate()}>
          reset
        </button>
      )}
    </div>
  );
}
