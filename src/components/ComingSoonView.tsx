import { useState } from 'react';
import { Bell, CheckCircle, ShieldCheck, Car, Bus, Footprints, Layers } from 'lucide-react';
import type { TabId } from '../types';

interface ComingSoonViewProps {
  onNavigateTab: (tab: TabId) => void;
  onDownloadChapter?: (filename: string) => void;
}

export const ComingSoonView: React.FC<ComingSoonViewProps> = ({ onNavigateTab }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [activePreview, setActivePreview] = useState<'roads' | 'bridges' | 'transit' | 'trails'>('roads');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
    }
  };

  return (
    <div className="chapter-page-container animate-fade-in">
      {/* Chapter Top Hero Banner */}
      <div className="chapter-hero-banner">
        <div className="hero-banner-img-wrap">
          <img 
            src="/assets/transit_banner.jpg" 
            alt="Chapter 3: Our Transportation System Today" 
            className="hero-banner-img"
          />
          <div className="hero-banner-overlay" />
        </div>

        <div className="hero-banner-content">
          <div className="chapter-number-pill">CHAPTER 03 • SYSTEM AUDIT</div>
          <h2 className="chapter-hero-title">Chapter 3: Our Transportation System Today</h2>
          <p className="chapter-hero-subtitle">
            Comprehensive Asset Inventory, Pavement Ratings, Bridge Evaluations, and Transit Operations
          </p>
        </div>
      </div>

      {/* Main Status Update Card (Exact match to Screenshot 5) */}
      <div className="coming-soon-wrapper">
        <div className="coming-soon-card">
          <div className="status-badge-pulse">
            <span className="pulsing-radar-dot" />
            <span className="status-badge-text">STATUS UPDATE</span>
          </div>

          <h3 className="coming-soon-heading">Coming Soon!</h3>

          <p className="coming-soon-body">
            The Tri-Cities MPO PLAN2050 Chapter 3: Our Transportation System Today content is currently being finalized. Please check back soon.
          </p>

          {/* Interactive Email Notification Module */}
          <div className="notify-box">
            {!subscribed ? (
              <form onSubmit={handleSubscribe} className="notify-form">
                <input
                  type="email"
                  className="notify-input"
                  placeholder="Enter your email for Chapter 3 publication alert..."
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                />
                <button type="submit" className="notify-submit-btn">
                  <Bell size={16} /> Notify Me
                </button>
              </form>
            ) : (
              <div className="notify-success">
                <CheckCircle size={20} className="check-icon" />
                <span>You're subscribed! We'll notify you as soon as Chapter 3 is released.</span>
              </div>
            )}
          </div>

          {/* Interactive Sneak-Peek Data Teaser */}
          <div className="sneak-peek-section">
            <div className="peek-header">
              <Layers size={16} />
              <span>Preview Chapter 3 Inventory Metrics:</span>
            </div>

            <div className="peek-pills">
              <button 
                className={`peek-pill ${activePreview === 'roads' ? 'active' : ''}`}
                onClick={() => setActivePreview('roads')}
              >
                <Car size={14} /> Centerline Miles
              </button>
              <button 
                className={`peek-pill ${activePreview === 'bridges' ? 'active' : ''}`}
                onClick={() => setActivePreview('bridges')}
              >
                <ShieldCheck size={14} /> Bridge Conditions
              </button>
              <button 
                className={`peek-pill ${activePreview === 'transit' ? 'active' : ''}`}
                onClick={() => setActivePreview('transit')}
              >
                <Bus size={14} /> Transit Routes
              </button>
              <button 
                className={`peek-pill ${activePreview === 'trails' ? 'active' : ''}`}
                onClick={() => setActivePreview('trails')}
              >
                <Footprints size={14} /> Active Trails
              </button>
            </div>

            <div className="peek-content-display">
              {activePreview === 'roads' && (
                <div className="preview-stat-row">
                  <div className="stat-unit">
                    <span className="stat-num">1,480+</span>
                    <span className="stat-desc">Centerline Miles of Public Roadways across 6 Member Jurisdictions</span>
                  </div>
                  <div className="stat-unit">
                    <span className="stat-num">3 Interstates</span>
                    <span className="stat-desc">I-95, I-85, and I-295 Tri-Cities Crossways</span>
                  </div>
                </div>
              )}
              {activePreview === 'bridges' && (
                <div className="preview-stat-row">
                  <div className="stat-unit">
                    <span className="stat-num">184 Bridges</span>
                    <span className="stat-desc">93.5% Classified in Good or Fair Condition (2024 VDOT Audit)</span>
                  </div>
                  <div className="stat-unit">
                    <span className="stat-num">2 Signature</span>
                    <span className="stat-desc">Major Crossings over the James & Appomattox Rivers</span>
                  </div>
                </div>
              )}
              {activePreview === 'transit' && (
                <div className="preview-stat-row">
                  <div className="stat-unit">
                    <span className="stat-num">11 Routes</span>
                    <span className="stat-desc">Fixed-Route Service operated by Petersburg Area Transit (PAT)</span>
                  </div>
                  <div className="stat-unit">
                    <span className="stat-num">1.2M</span>
                    <span className="stat-desc">Annual Transit Passengers Served across Urban Hubs</span>
                  </div>
                </div>
              )}
              {activePreview === 'trails' && (
                <div className="preview-stat-row">
                  <div className="stat-unit">
                    <span className="stat-num">48 Miles</span>
                    <span className="stat-desc">Existing Paved Multi-Use Trails & Protected Bike Lanes</span>
                  </div>
                  <div className="stat-unit">
                    <span className="stat-num">Fall Line Trail</span>
                    <span className="stat-desc">Connecting Colonial Heights, Petersburg & Greater Richmond</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="coming-soon-actions">
            <button 
              className="cs-nav-btn"
              onClick={() => onNavigateTab('trends')}
            >
              ← Previous: Chapter 2 (Trends)
            </button>
            <button 
              className="cs-nav-btn next"
              onClick={() => onNavigateTab('tomorrow')}
            >
              Next: Chapter 4 (System Tomorrow) →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
