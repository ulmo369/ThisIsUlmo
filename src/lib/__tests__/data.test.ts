import {
  getProjects,
  getProjectBySlug,
  getFeaturedProjects,
  getExperience,
  getSkills,
  getContactInfo,
  getNavigation,
  getSEOMeta,
  getPersonalInfo,
  getEducation,
  getAwards,
} from '@/lib/data';

describe('Data access layer', () => {
  it('getProjects returns all projects', async () => {
    const projects = await getProjects();
    expect(Array.isArray(projects)).toBe(true);
    expect(projects.length).toBeGreaterThan(0);
  });

  it('getProjectBySlug returns a project for a valid slug', async () => {
    const projects = await getProjects();
    const first = projects[0];
    const found = await getProjectBySlug(first.slug);
    expect(found).toBeDefined();
    expect(found!.slug).toBe(first.slug);
  });

  it('getProjectBySlug returns undefined for an invalid slug', async () => {
    const found = await getProjectBySlug('nonexistent-slug-xyz');
    expect(found).toBeUndefined();
  });

  it('getFeaturedProjects returns only featured projects', async () => {
    const featured = await getFeaturedProjects();
    expect(featured.length).toBeGreaterThan(0);
    featured.forEach((p) => expect(p.featured).toBe(true));
  });

  it('getExperience returns experience entries', async () => {
    const exp = await getExperience();
    expect(Array.isArray(exp)).toBe(true);
    expect(exp.length).toBeGreaterThan(0);
  });

  it('getSkills returns skills', async () => {
    const skills = await getSkills();
    expect(Array.isArray(skills)).toBe(true);
    expect(skills.length).toBeGreaterThan(0);
  });

  it('getContactInfo returns contact info', async () => {
    const info = await getContactInfo();
    expect(info.email).toBeDefined();
    expect(info.linkedin).toBeDefined();
    expect(info.github).toBeDefined();
  });

  it('getNavigation returns navigation items', async () => {
    const nav = await getNavigation();
    expect(Array.isArray(nav)).toBe(true);
    expect(nav.length).toBeGreaterThan(0);
  });

  it('getSEOMeta returns SEO data for a known route', async () => {
    const seo = await getSEOMeta('/');
    expect(seo.title).toBeDefined();
    expect(seo.description).toBeDefined();
  });

  it('getSEOMeta falls back to / for unknown route', async () => {
    const seo = await getSEOMeta('/unknown-route');
    const rootSeo = await getSEOMeta('/');
    expect(seo.title).toBe(rootSeo.title);
  });

  it('getPersonalInfo returns personal info with music', async () => {
    const info = await getPersonalInfo();
    expect(info.sports).toBeDefined();
    expect(info.books).toBeDefined();
    expect(info.games).toBeDefined();
    expect(info.music).toBeDefined();
    expect(Array.isArray(info.music)).toBe(true);
  });

  it('getEducation returns education entries', async () => {
    const edu = await getEducation();
    expect(Array.isArray(edu)).toBe(true);
    expect(edu.length).toBe(2);
  });

  it('getAwards returns award entries', async () => {
    const aw = await getAwards();
    expect(Array.isArray(aw)).toBe(true);
    expect(aw.length).toBe(2);
  });
});
