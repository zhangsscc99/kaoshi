import React from 'react';
import './GradingPageNew.css';

function GradingPageNew() {
  return (
    <div className="grading-page-new">
      {/* 左上角标题 */}
      <div className="page-header">
        <h1 className="header-title">考试结果</h1>
      </div>

      {/* 中心内容 */}
      <div className="center-content">
        {/* 加载动画点点 */}
        <div className="loading-animation">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>

        {/* 主标题 */}
        <h2 className="main-title">考试结束，阅卷中</h2>

        {/* 插图 */}
        <div className="illustration">
          <svg width="450" height="400" viewBox="0 0 450 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* 背景圆形装饰 */}
            <ellipse cx="225" cy="340" rx="140" ry="18" fill="#E1E1E8" opacity="0.5"/>
            
            {/* 椅子 */}
            <rect x="130" y="260" width="190" height="90" rx="12" fill="#E1E1E8"/>
            <rect x="140" y="248" width="170" height="22" rx="11" fill="#CBCBD8"/>
            
            {/* 椅背 */}
            <rect x="90" y="180" width="15" height="100" rx="7" fill="#CBCBD8"/>
            
            {/* 台灯 */}
            <g transform="translate(80, 170)">
              <rect x="0" y="0" width="4" height="80" fill="#B8B8C8"/>
              <ellipse cx="2" cy="80" rx="8" ry="3" fill="#B8B8C8"/>
              <path d="M-15,-5 L20,-5 L15,0 L-10,0 Z" fill="#D8D8E5"/>
            </g>

            {/* 笔记本电脑 */}
            <g transform="translate(160, 230) rotate(-8)">
              {/* 电脑底座 */}
              <rect x="0" y="35" width="130" height="8" rx="2" fill="#A8A8B8"/>
              {/* 电脑屏幕 */}
              <rect x="0" y="0" width="130" height="80" rx="4" fill="#C8C8D8"/>
              <rect x="5" y="5" width="120" height="65" rx="2" fill="#FFFFFF"/>
              {/* 屏幕高光 */}
              <rect x="10" y="10" width="50" height="30" rx="2" fill="#F0F0F5" opacity="0.7"/>
            </g>

            {/* 人物 - 鞋子 */}
            <ellipse cx="195" cy="345" rx="20" ry="10" fill="#7A7A8C"/>
            <ellipse cx="235" cy="345" rx="20" ry="10" fill="#7A7A8C"/>
            
            {/* 裤子 */}
            <ellipse cx="200" cy="285" rx="24" ry="48" fill="#8A8A9C"/>
            <ellipse cx="230" cy="285" rx="24" ry="48" fill="#8A8A9C"/>
            
            {/* 上衣主体 */}
            <ellipse cx="215" cy="220" rx="42" ry="52" fill="#FFB8B8"/>
            
            {/* 外套 */}
            <path d="M180 210 Q215 195 250 210 L245 270 Q215 280 185 270 Z" fill="#FFA5A5"/>
            
            {/* 背包 */}
            <ellipse cx="258" cy="215" rx="28" ry="38" fill="#FFB8B8"/>
            <rect x="245" y="200" width="26" height="40" rx="8" fill="#FF9999"/>
            <rect x="250" y="210" width="16" height="12" rx="2" fill="#FF8585"/>
            
            {/* 左手臂 */}
            <ellipse cx="175" cy="235" rx="14" ry="38" fill="#FFA5A5" transform="rotate(-35 175 235)"/>
            {/* 左手 */}
            <ellipse cx="158" cy="265" rx="11" ry="13" fill="#FFB8B8"/>
            
            {/* 右手臂 - 在电脑上 */}
            <ellipse cx="255" cy="240" rx="14" ry="40" fill="#FFA5A5" transform="rotate(30 255 240)"/>
            {/* 右手 */}
            <ellipse cx="275" cy="270" rx="11" ry="13" fill="#FFB8B8" transform="rotate(15 275 270)"/>
            
            {/* 头部 */}
            <circle cx="215" cy="170" r="32" fill="#FFB8B8"/>
            
            {/* 脖子 */}
            <rect x="205" y="195" width="20" height="12" rx="3" fill="#FFB8B8"/>
            
            {/* 头发 */}
            <ellipse cx="215" cy="155" rx="34" ry="28" fill="#6B5D54"/>
            <path d="M185 160 Q215 145 245 160 L245 172 Q215 155 185 172 Z" fill="#6B5D54"/>
            
            {/* 刘海 */}
            <ellipse cx="200" cy="165" rx="12" ry="15" fill="#6B5D54"/>
            <ellipse cx="215" cy="162" rx="12" ry="16" fill="#6B5D54"/>
            <ellipse cx="230" cy="165" rx="12" ry="15" fill="#6B5D54"/>
            
            {/* 脸部 - 眼睛 */}
            <ellipse cx="203" cy="172" rx="3" ry="4" fill="#000000"/>
            <ellipse cx="227" cy="172" rx="3" ry="4" fill="#000000"/>
            
            {/* 嘴巴 - 专注表情 */}
            <path d="M208 185 L222 185" stroke="#000000" strokeWidth="2" strokeLinecap="round"/>
            
            {/* 耳朵 */}
            <ellipse cx="186" cy="170" rx="6" ry="10" fill="#FFB8B8"/>
            <ellipse cx="244" cy="170" rx="6" ry="10" fill="#FFB8B8"/>
          </svg>
        </div>

        {/* 考试用时 */}
        <div className="exam-time">
          <span className="time-label">考试用时：</span>
          <span className="time-value">0分钟</span>
        </div>

        {/* 底部提示文字 */}
        <div className="bottom-text">
          闭卷中，请耐心等待
        </div>
      </div>
    </div>
  );
}

export default GradingPageNew;

