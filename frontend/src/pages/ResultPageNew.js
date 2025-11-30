import React from 'react';
import './ResultPageNew.css';

function ResultPageNew() {
  const handleExit = () => {
    alert('退出功能');
  };

  const handleReport = () => {
    alert('查看考试报告');
  };

  return (
    <div className="result-page-new">
      {/* 顶部标题栏 */}
      <header className="header">
        <h1 className="header-title">上机编程认证科目-iLearning（入门级，Java）</h1>
        <button className="exit-button" onClick={handleExit}>退出</button>
      </header>

      {/* 主内容区域 */}
      <div className="main-container">
        {/* 左侧：考试结果标题 */}
        <div className="left-section">
          <h2 className="page-title">考试结果</h2>
        </div>

        {/* 右侧：考生信息 */}
        <div className="right-section">
          <p className="student-info">考生：王宇庭 00937128</p>
        </div>
      </div>

      {/* 中心内容卡片 */}
      <div className="content-card">
        {/* 左侧插图 */}
        <div className="illustration-section">
          <div className="illustration-wrapper">
            <svg width="380" height="380" viewBox="0 0 380 380" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* 背景方块 */}
              <rect x="40" y="90" width="200" height="230" rx="15" fill="#E8E8F5" opacity="0.5"/>
              
              {/* 黄色纸片1 */}
              <g transform="translate(280, 120) rotate(20)">
                <rect width="70" height="90" rx="4" fill="#FFD93D"/>
                <line x1="10" y1="20" x2="60" y2="20" stroke="#FFA500" strokeWidth="2"/>
                <line x1="10" y1="35" x2="60" y2="35" stroke="#FFA500" strokeWidth="2"/>
                <line x1="10" y1="50" x2="60" y2="50" stroke="#FFA500" strokeWidth="2"/>
              </g>

              {/* 橙色装饰纸片 */}
              <g transform="translate(60, 170) rotate(-15)">
                <path d="M0,0 L50,0 L45,40 L-5,40 Z" fill="#FFB366" opacity="0.7"/>
              </g>

              {/* 蓝色装饰纸片 */}
              <g transform="translate(300, 260) rotate(10)">
                <path d="M0,0 L40,10 L35,35 L-5,25 Z" fill="#B8C9E8" opacity="0.7"/>
              </g>

              {/* 人物 - 鞋子 */}
              <ellipse cx="125" cy="310" rx="22" ry="10" fill="#7A7A8C"/>
              <ellipse cx="175" cy="310" rx="22" ry="10" fill="#7A7A8C"/>
              
              {/* 裤子 */}
              <path d="M115 230 L110 310 L140 310 L143 230 Z" fill="#2E4A8C"/>
              <path d="M157 230 L160 310 L190 310 L185 230 Z" fill="#2E4A8C"/>
              
              {/* 上衣 */}
              <rect x="110" y="160" width="80" height="75" rx="8" fill="#5B8FDB"/>
              
              {/* 衣领装饰 */}
              <path d="M130 160 L140 172 L150 160" fill="#FFFFFF"/>
              <path d="M160 160 L150 172 L170 160" fill="#FFFFFF"/>
              
              {/* 左手臂 */}
              <ellipse cx="90" cy="190" rx="16" ry="45" fill="#5B8FDB" transform="rotate(-25 90 190)"/>
              <circle cx="72" cy="225" r="14" fill="#FFB8A0"/>
              
              {/* 右手臂 - 举着试卷 */}
              <ellipse cx="210" cy="185" rx="16" ry="48" fill="#5B8FDB" transform="rotate(35 210 185)"/>
              <ellipse cx="240" cy="205" rx="14" ry="16" fill="#FFB8A0" transform="rotate(25 240 205)"/>
              
              {/* 试卷 */}
              <g transform="translate(230, 150) rotate(25)">
                <rect width="50" height="70" rx="3" fill="#FFD93D"/>
                <line x1="8" y1="15" x2="42" y2="15" stroke="#FFA500" strokeWidth="2"/>
                <line x1="8" y1="28" x2="42" y2="28" stroke="#FFA500" strokeWidth="2"/>
                <line x1="8" y1="41" x2="42" y2="41" stroke="#FFA500" strokeWidth="2"/>
                <line x1="8" y1="54" x2="30" y2="54" stroke="#FFA500" strokeWidth="2"/>
              </g>
              
              {/* 头部 */}
              <circle cx="150" cy="130" r="32" fill="#FFB8A0"/>
              
              {/* 头发 */}
              <path d="M125 118 Q150 98 175 118 Q180 108 178 122 Q175 130 170 133 L130 133 Q125 130 122 122 Q120 108 125 118 Z" fill="#3D4451"/>
              
              {/* 刘海 */}
              <path d="M132 120 Q142 110 152 120" fill="#3D4451"/>
              <path d="M152 120 Q162 110 172 120" fill="#3D4451"/>
              
              {/* 眼睛 */}
              <circle cx="140" cy="130" r="2.5" fill="#000000"/>
              <circle cx="160" cy="130" r="2.5" fill="#000000"/>
              
              {/* 微笑 */}
              <path d="M140 142 Q150 147 160 142" stroke="#000000" strokeWidth="2" fill="none" strokeLinecap="round"/>
              
              {/* 左侧装饰纸片 */}
              <g transform="translate(55, 185) rotate(-20)">
                <path d="M0,0 L45,0 L40,30 L-5,30 Z" fill="#FFE5B4" opacity="0.7"/>
              </g>
            </svg>
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

      {/* 底部鼓励语 */}
      <div className="encouragement">
        别灰心呦，失败乃成功之母，再考一次就过啦！
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
      </div>
    </div>
  );
}

export default ResultPageNew;

