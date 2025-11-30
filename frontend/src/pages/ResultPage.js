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
        <h1 className="header-title">上机编程认证科目-iLearning（入门级，Java）</h1>
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
              别灰心呦，失败乃成功之母，再考一次就过啦！
            </div>
          </div>

          {/* 右侧结果信息 */}
          <div className="result-section">
          {/* Fail 印章 */}
          <div className="stamp">
            <div className="stamp-inner">
              <span className="stamp-text">Fail</span>
            </div>
          </div>

          {/* 结果标题 */}
          <h3 className="result-heading">未通过，继续努力吧~</h3>

          {/* 详细信息 */}
          <div className="result-details">
            <div className="detail-row">
              <span className="detail-label">是否通过：</span>
              <span className="detail-value failed">未通过</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">编程题数：</span>
              <span className="detail-value">2</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">考试用时：</span>
              <span className="detail-value">43分钟 / 125分钟</span>
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

