import React from 'react';
import './ResultPage.css';
import personIllustration from '../images/person_illustration.png';

function ResultPage() {
  const handleExit = () => {
    alert('退出功能');
  };

  const handleReport = () => {
    alert('查看考试报告');
  };

  return (
    <div className="result-page">
      {/* 顶部标题栏 */}
      <header className="header">
        <h1 className="header-title">上机编程认证科目-iLearning（工作级， Python）</h1>
        <button className="exit-button" onClick={handleExit}>退出</button>
      </header>

      {/* 中心内容卡片 */}
      <div className="content-card">
        {/* 标题行 */}
        <div className="title-row">
          <h2 className="page-title">考试结果</h2>
          <p className="student-info">考生：王宇庭 00937128</p>
        </div>

        {/* 主要内容区 */}
        <div className="main-content">
          {/* 左侧插图 */}
          <div className="illustration-section">
            <div className="illustration-wrapper">
              <img src={personIllustration} alt="工作中的人物" className="person-image" />
            </div>
            <div className="encouragement">
              阅卷中，请耐心等待
            </div>
          </div>

          {/* 右侧结果信息 */}
          <div className="result-section">
          {/* 结果标题 */}
          <h3 className="result-heading">考试结束，阅卷中</h3>

          {/* 详细信息 */}
          <div className="result-details">
            
            <div className="detail-row">
              <span className="detail-label">考试用时：</span>
              <span className="detail-value">43分钟 / 185分钟</span>
            </div>
          </div>

          {/* 考试报告按钮 */}
          <button className="report-button" onClick={handleReport}>
            考试报告
          </button>
        </div>
        </div>
      </div>

      {/* 水印背景 */}
      <div className="watermark-layer">
        <div className="watermark-text">王宇庭 00937128</div>
        <div className="watermark-text">王宇庭 00937128</div>
        <div className="watermark-text">王宇庭 00937128</div>
        <div className="watermark-text">王宇庭 00937128</div>
        <div className="watermark-text">王宇庭 00937128</div>
        <div className="watermark-text">王宇庭 00937128</div>
        <div className="watermark-text">王宇庭 00937128</div>
        <div className="watermark-text">王宇庭 00937128</div>
        <div className="watermark-text">王宇庭 00937128</div>
        <div className="watermark-text">王宇庭 00937128</div>
        <div className="watermark-text">王宇庭 00937128</div>
        <div className="watermark-text">王宇庭 00937128</div>
        <div className="watermark-text">王宇庭 00937128</div>
        <div className="watermark-text">王宇庭 00937128</div>
        <div className="watermark-text">王宇庭 00937128</div>
        <div className="watermark-text">王宇庭 00937128</div>
        <div className="watermark-text">王宇庭 00937128</div>
        <div className="watermark-text">王宇庭 00937128</div>
        <div className="watermark-text">王宇庭 00937128</div>
        <div className="watermark-text">王宇庭 00937128</div>
        <div className="watermark-text">王宇庭 00937128</div>
        <div className="watermark-text">王宇庭 00937128</div>
        <div className="watermark-text">王宇庭 00937128</div>
        <div className="watermark-text">王宇庭 00937128</div>
      </div>
    </div>
  );
}

export default ResultPage;

