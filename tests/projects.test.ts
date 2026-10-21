import { describe, expect, it } from 'vitest';
import { getPublishedProjects, getProjectBySlug, getProjectMedia, clampIndex, formatCount } from '../src/utils/projects';
import { assetUrl } from '../src/utils/media';
import { safeExternalUrl } from '../src/utils/links';
import { projects } from '../src/data/projects';

describe('project data', () => {
  it('filters drafts and sorts published entries without mutating input', () => {
    const input = [{ ...projects[0]!, order: 3 }, { ...projects[1]!, order: 1 }, { ...projects[2]!, status: 'draft' as const }];
    expect(getPublishedProjects(input).map(p => p.slug)).toEqual(['notehub', 'taskflow']);
    expect(input[0]!.order).toBe(3);
    expect(getProjectBySlug(input, 'sewaqu')).toBeUndefined();
  });
  it('adding a published fourth project needs only a data object', () => {
    const four = [...projects, { ...projects[0]!, id: 'new', slug: 'new-project', title: 'New', order: 4 }];
    expect(getPublishedProjects(four)).toHaveLength(4);
    expect(getProjectBySlug(four, 'new-project')?.title).toBe('New');
  });
  it('deduplicates cover/gallery and clamps gallery index', () => {
    const media = getProjectMedia({ ...projects[0]!, gallery: [projects[0]!.cover] });
    expect(media).toHaveLength(1);
    expect(clampIndex(99, 1)).toBe(0);
    expect(clampIndex(-5, 3)).toBe(0);
    expect(clampIndex(1, 3)).toBe(1);
    expect(formatCount(4)).toBe('04');
  });
});
describe('safe paths and links', () => {
  it('supports both GitHub Pages and root base paths', () => {
    expect(assetUrl('/projects/a/cover.jpg', '/portofolio-web/')).toBe('/portofolio-web/projects/a/cover.jpg');
    expect(assetUrl('profile/cv.pdf', '/')).toBe('/profile/cv.pdf');
  });
  it('omits fake or unsafe external links', () => {
    expect(safeExternalUrl('javascript:alert(1)')).toBeUndefined();
    expect(safeExternalUrl('#')).toBeUndefined();
    expect(safeExternalUrl('https://github.com/ArleneNero')).toBe('https://github.com/ArleneNero');
  });
});
