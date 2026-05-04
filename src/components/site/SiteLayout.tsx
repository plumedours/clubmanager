import React from 'react';
import Layout from '@theme/Layout';
import SiteHeader from './SiteHeader';
import SiteFooter from './SiteFooter';

type Props = {
  title: string;
  description: string;
  children: React.ReactNode;
};

export default function SiteLayout({title, description, children}: Props): React.ReactNode {
  return (
    <Layout title={title} description={description} wrapperClassName="marketing-layout" noFooter>
      <SiteHeader />
      <main className="site-main">{children}</main>
      <SiteFooter />
    </Layout>
  );
}
