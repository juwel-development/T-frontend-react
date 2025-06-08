import { describe, it } from 'node:test';
import { filesOfProject } from 'tsarch';

describe('Architecture ', () => {
  describe('Cycles', () => {
    it('should be cycle free', async () => {
      const rule = filesOfProject()
        .matchingPattern('.*')
        .should()
        .beFreeOfCycles();

      const violations = await rule.check();
      const errorMessage = violations
        .map((violation) => {
          const v = violation as {
            cycle: { sourceLabel: string; targetLabel: string }[];
          };
          return `${v.cycle.map((c) => `${c.sourceLabel} -> ${c.targetLabel}`).join(', ')}`;
        })
        .join('\n');

      if (violations.length > 0) {
        throw new Error(
          `Architecture violation, Cycle found:\n${errorMessage}`,
        );
      }
    });
  });

  describe('Dependencies', () => {
    const restrictions = [
      { folder: 'Application', shouldNotDependOn: 'Presentation' },
      { folder: 'Domain', shouldNotDependOn: 'Application' },
      { folder: 'Domain', shouldNotDependOn: 'Infrastructure' },
      { folder: 'Domain', shouldNotDependOn: 'Presentation' },
      { folder: 'Infrastructure', shouldNotDependOn: 'Application' },
      { folder: 'Infrastructure', shouldNotDependOn: 'Presentation' },
      { folder: 'Presentation', shouldNotDependOn: 'Domain' },
      { folder: 'Presentation', shouldNotDependOn: 'Infrastructure' },
      {
        folder: 'Presentation/Core',
        shouldNotDependOn: 'Presentation/Organism',
      },
      {
        folder: 'Presentation/Core',
        shouldNotDependOn: 'Presentation/Page',
      },
      {
        folder: 'Presentation/Core/Atom',
        shouldNotDependOn: 'Presentation/Core/Molecule',
      },
      {
        folder: 'Presentation/Core/Atom',
        shouldNotDependOn: 'Presentation/Organism',
      },
      {
        folder: 'Presentation/Core/Atom',
        shouldNotDependOn: 'Presentation/Page',
      },
      {
        folder: 'Presentation/Core/Molecule',
        shouldNotDependOn: 'Presentation/Organism',
      },
      {
        folder: 'Presentation/Core/Molecule',
        shouldNotDependOn: 'Presentation/Page',
      },
      {
        folder: 'Presentation/Organism',
        shouldNotDependOn: 'Presentation/Page',
      },
    ];

    for (const restriction of restrictions) {
      it(`${restriction.folder} should not depend on ${restriction.shouldNotDependOn}`, async () => {
        const rule = filesOfProject()
          .inFolder(restriction.folder)
          .shouldNot()
          .dependOnFiles()
          .inFolder(restriction.shouldNotDependOn)
          .matchingPattern('^((?!Module).)*$');

        const violations = (await rule.check())
          .map((violation) => {
            const v = violation as {
              dependency: { sourceLabel: string; targetLabel: string };
            };
            return {
              dependency: {
                sourceLabel: v.dependency.sourceLabel,
                targetLabel: v.dependency.targetLabel,
              },
            };
          })
          .filter(
            (violation) =>
              !violation.dependency.sourceLabel.endsWith('Module.ts'), // exception is the module configuration, where the modules are registered
          );

        const errorMessage = violations
          .map((v) => {
            return `${v.dependency.sourceLabel} -> ${v.dependency.targetLabel}`;
          })
          .join('\n');

        if (violations.length > 0) {
          throw new Error(
            `Architecture violation: ${restriction.folder} should not depend on ${restriction.shouldNotDependOn}:\n${errorMessage}`,
          );
        }
      });
    }
  });
});
