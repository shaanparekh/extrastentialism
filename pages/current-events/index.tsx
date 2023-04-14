import MainLayout from '@/components/layout';
import CTA from '@/components/sections/cta';
import CurrentPosts from '@/components/sections/currentPosts';
import { getCurrentPosts } from 'lib/mdx';
import { IPostMeta } from 'types';
import { NextPageWithLayout } from '../page';

interface IHome {
  postsMeta: IPostMeta[];
}

const Home: NextPageWithLayout<IHome> = ({ postsMeta }) => {
  return (
    <>
      <CurrentPosts postsMeta={postsMeta} />
      <CTA />
    </>
  );
};
export default Home;

Home.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export async function getStaticProps() {
  const postsMeta = getCurrentPosts()
    .slice(0, 9)
    .map((post) => post.meta);

  return { props: { postsMeta } };
}
