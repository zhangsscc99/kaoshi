import React from 'react';
import './GradingPage.css';
import gradingImage from '../images/exam_grading.png';

function GradingPage() {
  return (
    <div className="grading-page">
      <img src={gradingImage} alt="考试阅卷中" className="grading-image" />
    </div>
  );
}

export default GradingPage;

