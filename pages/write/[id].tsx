import React from 'react';
import { GetServerSideProps, NextPage } from 'next';

import { MainLayout } from '../../layouts/MainLayout';
import { WriteForm } from '../../components/WriteForm/WriteForm';

interface WritePageProps {
  // @ts-ignore
  post: PostItem;
}

const WritePage: NextPage<WritePageProps> = ({ post }) => {
  return (
    <MainLayout className="main-layout-white" hideComments hideMenu>
      <WriteForm data={post} />
    </MainLayout>
  );
};

export default WritePage;
