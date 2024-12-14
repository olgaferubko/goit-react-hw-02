import { useState, useEffect } from "react";
import "./App.css";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";

function App() {
  const basicFeedback = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  const [options, setOptions] = useState(() => {
    const reviews = localStorage.getItem("reviews");
    return reviews ? JSON.parse(reviews) : basicFeedback;
  });

  useEffect(() => {
    localStorage.setItem("reviews", JSON.stringify(options));
  }, [options]);

  const updateFeedback = (feedbackType) => {
    setOptions((prev) => ({
      ...prev,
      [feedbackType]: prev[feedbackType] + 1,
    }));
  };

  const resetFeedback = () => {
    setOptions(basicFeedback);
  };

  const totalFeedback = Object.values(options).reduce((total, value) => total + value, 0);

  const positiveFeedback = totalFeedback
    ? Math.round((options.good / totalFeedback) * 100)
    : 0;

  return (
    <>
      <Description />
      <Options
        onUpdate={updateFeedback}
        onReset={resetFeedback}
        feedbackItems={options}
        keepFeedback={totalFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          feedbackItems={options}
          total={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;
