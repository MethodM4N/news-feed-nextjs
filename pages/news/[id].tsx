import React from 'react';
import { GetServerSideProps, NextPage } from 'next';

import { MainLayout } from '../../layouts/MainLayout';
import { FullPost } from '../../components/FullPost/FullPost';
import { PostComments } from '../../components/PostComments/PostComments';

interface FullPostPageProps {
  // @ts-ignore
  post: PostItem;
}

const FullPostPage: NextPage<FullPostPageProps> = ({ post }) => {
  return (
    <MainLayout className="mb-50" contentFullWidth>
      <FullPost title={post.title} blocks={post.body} />
      <PostComments postId={post.id} />
    </MainLayout>
  );
};

export default FullPostPage;
