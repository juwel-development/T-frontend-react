import { Navbar } from 'Presentation/Core/Atom/Layout/Navbar';
import { PageLayout } from 'Presentation/Core/Molecule/Layout/PageLayout';
import type { FunctionComponent } from 'react';

const HomePage: FunctionComponent = () => {
  return <PageLayout navbar={<Navbar.Root />} heading={'Home Page'} />;
};

export default HomePage;
