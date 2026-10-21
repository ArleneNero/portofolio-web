import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { MediaAsset } from '../../types/project';
import { clampIndex, formatCount } from '../../utils/projects';
import { SmartImage } from '../ui/SmartImage';

export function ProjectGallery({ media, index, onIndex }: { media: MediaAsset[]; index: number; onIndex: (index: number) => void }) {
  const total = media.length;
  const active = clampIndex(index, total);
  const item = media[active];
  const step = (direction: number) => onIndex(clampIndex(active + direction, total));

  return (
    <div className="gallery" role="region" aria-label="Project screenshots" tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === 'ArrowLeft') { event.preventDefault(); step(-1); }
        if (event.key === 'ArrowRight') { event.preventDefault(); step(1); }
      }}>
      <div className="gallery-media" aria-live="polite" aria-atomic="true">
        <div className="gallery-media-inner" key={item?.src || 'placeholder'}>
          <SmartImage src={item?.src} alt={item?.alt || 'Project screenshot missing'} className="gallery-image" eager />
        </div>
      </div>
      <div className="gallery-bottom">
        <span className="gallery-caption">{item?.caption || 'Project screenshot'}</span>
        <div className="gallery-pager">
          <button type="button" onClick={() => step(-1)} aria-label="Previous screenshot" disabled={active <= 0}><ChevronLeft size={19}/></button>
          <span className="gallery-count">{formatCount(total === 0 ? 0 : active + 1)} / {formatCount(total)}</span>
          <button type="button" onClick={() => step(1)} aria-label="Next screenshot" disabled={total <= 1 || active >= total - 1}><ChevronRight size={19}/></button>
        </div>
      </div>
    </div>
  );
}
