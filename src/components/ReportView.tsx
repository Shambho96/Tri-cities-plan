import { useState } from 'react';
import type { TabId, PlanGoal } from '../types';
import { PLAN_OVERVIEW, PLAN_GOALS } from '../data/planData';
import { MpoLogo } from './MpoLogo';
import { 
  ArrowRight, 
  ShieldAlert, 
  Leaf, 
  Bike, 
  TrendingUp, 
  Wrench, 
  ChevronRight
} from 'lucide-react';

interface ReportViewProps {
  onNavigateTab: (tab: TabId) => void;
  onSelectGoal: (goal: PlanGoal) => void;
}

export const ReportView: React.FC<ReportViewProps> = ({ onNavigateTab, onSelectGoal }) => {
  const [hoveredGoal, setHoveredGoal] = useState<string | null>(null);

  const renderGoalIcon = (id: string) => {
    switch (id) {
      case 'safety':
        return (
          <div className="goal-icon-circle safety">
            <ShieldAlert size={26} className="goal-svg-icon" />
          </div>
        );
      case 'environment':
        return (
          <div className="goal-icon-circle environment">
            <Leaf size={26} className="goal-svg-icon" />
          </div>
        );
      case 'equity':
        return (
          <div className="goal-icon-circle equity">
            <Bike size={26} className="goal-svg-icon" />
          </div>
        );
      case 'connectivity':
        return (
          <div className="goal-icon-circle connectivity">
            <TrendingUp size={26} className="goal-svg-icon" />
          </div>
        );
      case 'repair':
        return (
          <div className="goal-icon-circle repair">
            <Wrench size={26} className="goal-svg-icon" />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="report-view-container animate-fade-in">
      <div className="report-grid">
        {/* Left Column: Overview and Chapter Links */}
        <div className="report-left-col">
          <div className="overview-card">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
              <MpoLogo variant="card" size="sm" />
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 700, letterSpacing: '0.05em' }}>
                REGIONAL HORIZON 2050
              </span>
            </div>
            <h2 className="overview-title">{PLAN_OVERVIEW.title}</h2>
            
            <p className="overview-lead-text">
              {PLAN_OVERVIEW.leadParagraph}
            </p>

            {/* Regional Metrics Quick Strip */}
            <div className="overview-quick-metrics">
              {PLAN_OVERVIEW.keyStats.map((stat, idx) => (
                <div key={idx} className="quick-metric-item">
                  <div className="metric-val">{stat.value}</div>
                  <div className="metric-lbl">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Chapters Navigation List */}
            <div className="chapter-nav-list">
              <button 
                className="chapter-btn primary-explore-btn"
                onClick={() => onNavigateTab('introduction')}
              >
                <span>Explore Chapters</span>
                <ArrowRight size={18} className="arrow-slide" />
              </button>

              <button 
                className="chapter-btn"
                onClick={() => onNavigateTab('introduction')}
              >
                <span className="chapter-label">Chapter 1: Introduction</span>
                <ChevronRight size={18} className="arrow-slide" />
              </button>

              <button 
                className="chapter-btn"
                onClick={() => onNavigateTab('trends')}
              >
                <span className="chapter-label">Chapter 2: Trends and Forecasts</span>
                <ChevronRight size={18} className="arrow-slide" />
              </button>

              <button 
                className="chapter-btn"
                onClick={() => onNavigateTab('today')}
              >
                <span className="chapter-label">Chapter 3: System Today</span>
                <ChevronRight size={18} className="arrow-slide" />
              </button>

              <button 
                className="chapter-btn"
                onClick={() => onNavigateTab('tomorrow')}
              >
                <span className="chapter-label">Chapter 4: System Tomorrow</span>
                <ChevronRight size={18} className="arrow-slide" />
              </button>

              <button 
                className="chapter-btn"
                onClick={() => onNavigateTab('funding')}
              >
                <span className="chapter-label">Chapter 5: Funding</span>
                <ChevronRight size={18} className="arrow-slide" />
              </button>

              <button 
                className="chapter-btn"
                onClick={() => onNavigateTab('appendices')}
              >
                <span className="chapter-label">Appendices</span>
                <ChevronRight size={18} className="arrow-slide" />
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Visual Showcase Graphic */}
        <div className="report-right-col">
          <div className="showcase-graphic-card">
            {/* Official Adopted PLAN2050 Document Cover Image */}
            <div className="official-report-cover-wrapper">
              <img 
                src="/assets/plan2050-report-cover.png" 
                srcSet="/assets/plan2050-report-cover.png 1x, /assets/plan2050-report-cover-2x.png 2x"
                alt="Tri-Cities Area MPO (TCAMPO) Long-Range Transportation Plan (PLAN2050) Official Cover" 
                className="official-report-cover-img"
              />
              <div className="report-cover-badge-pill">
                <span className="badge-pulse-dot" />
                <span>Adopted Plan Document</span>
              </div>
            </div>

            {/* Goals Interactive Strip */}
            <div className="goals-sidebar-area">
              <div className="goals-banner-ribbon">
                <span className="ribbon-sparkle">✦</span>
                <span className="ribbon-text">PLAN2050 GOALS</span>
                <span className="ribbon-sub">Click for Benchmarks</span>
              </div>

              <div className="goals-items-stack">
                {PLAN_GOALS.map((goal) => {
                  const isHovered = hoveredGoal === goal.id;
                  return (
                    <div
                      key={goal.id}
                      className={`goal-row-card ${isHovered ? 'hovered' : ''}`}
                      onMouseEnter={() => setHoveredGoal(goal.id)}
                      onMouseLeave={() => setHoveredGoal(null)}
                      onClick={() => onSelectGoal(goal)}
                      title={`Click to inspect Goal #${goal.number}: ${goal.title}`}
                    >
                      <div className="goal-icon-container">
                        {renderGoalIcon(goal.id)}
                      </div>

                      <div className="goal-text-content">
                        <p className="goal-desc-line">{goal.description}</p>
                        <div className="goal-hover-indicator">
                          <span>View targets & metrics</span>
                          <ArrowRight size={12} />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Curved "PLAN2050 GOALS" stylized badge arc from screenshot */}
              <div className="curved-goals-watermark">
                <svg viewBox="0 0 300 120" className="curved-text-svg">
                  <path id="curvePath" d="M 30,110 Q 150,20 280,110" fill="transparent" />
                  <text className="curved-svg-text">
                    <textPath href="#curvePath" startOffset="50%" textAnchor="middle">
                      PLAN2050 GOALS
                    </textPath>
                  </text>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
