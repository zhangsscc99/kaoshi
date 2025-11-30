import React from 'react';
import './ResultPage.css';
import resultImage from '../images/exam_result.png';

function ResultPage() {
  return (
    <div className="result-page">
      <img src={resultImage} alt="考试结果" className="result-image" />
    </div>
  );
}

export default ResultPage;

