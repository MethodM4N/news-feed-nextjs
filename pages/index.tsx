import { NextPage } from 'next';

import { Post } from '../components/Post/Post';
import { MainLayout } from '../layouts/MainLayout';

interface HomeProps {
  //@ts-ignore
  posts: PostItem[];
}

const Home: NextPage<HomeProps> = ({ posts }) => {
  return (
    <MainLayout>
      {/*       {posts.map((obj) => (
        <Post key={obj.id} id={obj.id} title={obj.title} description={obj.description} />
      ))} */}
    </MainLayout>
  );
};

export default Home;
