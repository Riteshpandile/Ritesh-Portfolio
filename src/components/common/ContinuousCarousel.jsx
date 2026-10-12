import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

/**
 * ContinuousCarousel
 * Reusable, hardware-accelerated continuous sliding carousel with zero deflection.
 * Supports auto-play, pause on hover, touch swipe, filter pills, and bottom indicator dots.
 */
export const ContinuousCarousel = ({
  items = [],
  renderItem,
  getAccentColor = (item) => item?.accentColor || item?.color || "#2563EB",
  autoPlayInterval = 3500,
  filterCategories = null,
  activeFilter = null,
  onFilterChange = null,
  showControls = true,
  showArrows = true,
  showDots = true,
  showStatus = true,
  className = "",
  itemKey = (item, idx) => item?.id || idx,
  isPausedExternal = false,
  statusLabel = "Auto-play",
  pausedLabel = "Paused"
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [cardStep, setCardStep] = useState(416);
  const sliderRef = useRef(null);
  const touchStartX = useRef(null);

  const N = items.length;

  // Duplicate items array for seamless continuous forward motion without deflection
  const displayItems = N > 1 ? [...items, ...items] : items;

  // Dynamically measure step (card width + gap) across screen sizes & responsive layout shifts
  useEffect(() => {
    const measureStep = () => {
      if (!sliderRef.current || !sliderRef.current.children[0]) return;
      const card0 = sliderRef.current.children[0];
      const card1 = sliderRef.current.children[1];
      if (card0 && card1) {
        const step = card1.offsetLeft - card0.offsetLeft;
        if (step > 0) {
          setCardStep(step);
          return;
        }
      }
      if (card0) {
        const computedStyle = window.getComputedStyle(sliderRef.current);
        const gap = parseFloat(computedStyle.gap) || 16;
        setCardStep(card0.offsetWidth + gap);
      }
    };

    measureStep();
    const resizeObserver = typeof ResizeObserver !== "undefined"
      ? new ResizeObserver(() => measureStep())
      : null;

    if (resizeObserver && sliderRef.current) {
      resizeObserver.observe(sliderRef.current);
    }

    window.addEventListener("resize", measureStep);
    window.addEventListener("orientationchange", measureStep);

    return () => {
      if (resizeObserver) resizeObserver.disconnect();
      window.removeEventListener("resize", measureStep);
      window.removeEventListener("orientationchange", measureStep);
    };
  }, [displayItems.length, activeFilter]);

  // Reset to first slide cleanly when active filter changes
  useEffect(() => {
    setIsTransitioning(false);
    setCurrentIndex(0);
  }, [activeFilter]);

  // Next slide handler
  const handleNext = () => {
    if (N <= 1) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  };

  // Previous slide handler
  const handlePrev = () => {
    if (N <= 1) return;
    if (currentIndex === 0) {
      // Instantly jump to clone index N, then smoothly slide left to N - 1
      setIsTransitioning(false);
      setCurrentIndex(N);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsTransitioning(true);
          setCurrentIndex(N - 1);
        });
      });
    } else {
      setIsTransitioning(true);
      setCurrentIndex((prev) => prev - 1);
    }
  };

  // Transition end handler:
  // When sliding forward reaches index N (the clone of index 0),
  // instantly swap back to index 0 using transition: none!
  // This produces 0ms of backward deflection.
  const handleTransitionEnd = () => {
    if (currentIndex >= N) {
      setIsTransitioning(false);
      setCurrentIndex(currentIndex % N);
    }
  };

  // Auto-play timer
  useEffect(() => {
    if (isHovered || isPausedExternal || N <= 1) return;

    const timer = setInterval(() => {
      setIsTransitioning(true);
      setCurrentIndex((prev) => prev + 1);
    }, autoPlayInterval);

    return () => clearInterval(timer);
  }, [isHovered, isPausedExternal, N, autoPlayInterval]);

  // Touch Swipe gestures for mobile
  const handleTouchStart = (e) => {
    setIsHovered(true);
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    setIsHovered(false);
    if (touchStartX.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    if (deltaX < -45) handleNext();
    else if (deltaX > 45) handlePrev();
    touchStartX.current = null;
  };

  // Current active dot index in [0, N-1]
  const activeDot = N > 0 ? currentIndex % N : 0;
  const currentAccent = items[activeDot] ? getAccentColor(items[activeDot]) : "#2563EB";

  return (
    <div className={`continuous-carousel-root ${className}`}>
      {/* Controls Bar (Filter pills, status indicator & Prev/Next buttons) */}
      {showControls && (
        <div className="carousel-controls-bar">
          {/* Optional Filter Pills */}
          {filterCategories && filterCategories.length > 0 && (
            <div className="carousel-filter-pills" role="tablist" aria-label="Filter items">
              {filterCategories.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  role="tab"
                  aria-selected={activeFilter === cat.id}
                  className={`carousel-filter-btn ${activeFilter === cat.id ? "active" : ""}`}
                  onClick={() => onFilterChange && onFilterChange(cat.id)}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          )}

          {/* Navigation Controls: Status Indicator & Arrow Buttons */}
          <div className="carousel-arrow-buttons">
            {showStatus && (
              <div
                className="carousel-autoplay-status"
                title={isHovered ? "Paused on hover" : `Auto-playing every ${autoPlayInterval / 1000}s`}
              >
                <span className={`autoplay-status-dot ${isHovered ? "paused" : ""}`} />
                <span className="autoplay-status-text">
                  {isHovered ? pausedLabel : statusLabel}
                </span>
              </div>
            )}

            {showArrows && (
              <>
                <button
                  type="button"
                  className="carousel-arrow-btn"
                  onClick={handlePrev}
                  aria-label="Previous card"
                  title="Previous card"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  type="button"
                  className="carousel-arrow-btn"
                  onClick={handleNext}
                  aria-label="Next card"
                  title="Next card"
                >
                  <ChevronRight size={20} />
                </button>
              </>
            )}
          </div>
        </div>
      )}

      {/* Viewport & Sliding Track with Zero Deflection */}
      <div
        className="carousel-outer-wrapper"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="projects-carousel-viewport">
          <div
            className="projects-carousel-slider"
            ref={sliderRef}
            style={{
              transform: `translateX(-${currentIndex * cardStep}px)`,
              transition: isTransitioning
                ? "transform 0.65s cubic-bezier(0.2, 0.8, 0.2, 1)"
                : "none"
            }}
            onTransitionEnd={handleTransitionEnd}
          >
            {displayItems.map((item, idx) => (
              <React.Fragment key={`${itemKey(item, idx % N)}-${idx}`}>
                {renderItem(item, idx % N, idx)}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Interactive Bottom Dots */}
        {showDots && N > 1 && (
          <div className="carousel-dots-row" role="tablist" aria-label="Cards pagination">
            {items.map((item, dotIdx) => {
              const itemAccent = getAccentColor(item);
              const isActive = activeDot === dotIdx;
              return (
                <button
                  key={itemKey(item, dotIdx)}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={`carousel-dot ${isActive ? "active" : ""}`}
                  onClick={() => {
                    setIsTransitioning(true);
                    setCurrentIndex(dotIdx);
                  }}
                  aria-label={`Scroll to item ${dotIdx + 1}`}
                  style={{
                    backgroundColor: isActive ? itemAccent : undefined,
                    boxShadow: isActive ? `0 0 12px ${itemAccent}` : undefined
                  }}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
