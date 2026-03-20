// Feature: personal-portfolio, Property 3: Skill proficiency values are valid
// **Validates: Requirements 4.2**

import { getSkills } from '@/lib/data';

const VALID_PROFICIENCIES = ['core', 'experienced', 'familiar'] as const;

describe('Property 3: Skill proficiency values are valid', () => {
  it('every skill has a proficiency of core, experienced, or familiar', async () => {
    const skills = await getSkills();

    expect(skills.length).toBeGreaterThan(0);

    for (const skill of skills) {
      expect(VALID_PROFICIENCIES).toContain(skill.proficiency);
    }
  });
});
