import { PageLayout } from 'Presentation/Core/Molecule/Layout/PageLayout';
import { PageNavbar } from 'Presentation/Organism/Core/PageNavbar';
import type { FunctionComponent } from 'react';

const HomePage: FunctionComponent = () => {
  return <PageLayout navbar={<PageNavbar />} heading={'Home Page'} />;
};

export default HomePage;
