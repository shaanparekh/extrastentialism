import MainLayout from '@/components/layout';
import CTA from '@/components/sections/cta';
import FeaturedPost from '@/components/sections/featuredPost';
import LatestPosts from '@/components/sections/latestPosts';
import { getAllPosts } from 'lib/mdx';
import { IPostMeta } from 'types';
import { NextPageWithLayout } from './page';

interface IHome {
  postsMeta: IPostMeta[];
}

const Home: NextPageWithLayout<IHome> = ({ postsMeta }) => {
  return (
    <>
      <FeaturedPost />
      <LatestPosts postsMeta={postsMeta} />
      <CTA />
    </>
  );
};
export default Home;

Home.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export async function getStaticProps() {
  const postsMeta = getAllPosts()
    .slice(0, 9)
    .map((post) => post.meta);

  return { props: { postsMeta } };
}
