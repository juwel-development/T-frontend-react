import { useSubscription } from '@juwel-development/react-observable-tools';
import { UserQuery } from 'Application/UserManagement/UserQuery';
import { PageLayout } from 'Presentation/Core/Molecule/Layout/PageLayout';
import { PageNavbar } from 'Presentation/Organism/Core/PageNavbar';
import { useTranslation } from 'Presentation/Translation/useTranslation';
import type { FunctionComponent } from 'react';
import { container } from 'tsyringe';

const UserOverviewPage: FunctionComponent = () => {
  const { translate } = useTranslation();

  const userQuery = container.resolve(UserQuery);
  const users = useSubscription(userQuery.Users$);

  if (!users) {
    return null; // TODO skeletons
  }

  console.log({ users });

  return (
    <PageLayout
      heading={translate('user.overview.title')}
      navbar={<PageNavbar />}
    />
  );
};

export default UserOverviewPage;
