import { InternalLink } from 'Presentation/Core/Atom/InternalLink';
import { PageLayout } from 'Presentation/Core/Molecule/Layout/PageLayout';
import { PageNavbar } from 'Presentation/Organism/Core/PageNavbar';
import { PagePath } from 'Presentation/Routing/PagePath';
import { useTranslation } from 'Presentation/Translation/useTranslation';
import type { FunctionComponent } from 'react';

const HomePage: FunctionComponent = () => {
  const { translate } = useTranslation();
  return (
    <PageLayout
      navbar={<PageNavbar />}
      heading={translate('core.home.title')}
      content={
        <InternalLink to={PagePath.userOverview}>
          {translate('user.overview.title')}
        </InternalLink>
      }
    />
  );
};

export default HomePage;
