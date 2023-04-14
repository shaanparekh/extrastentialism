import MainLayout from '@/components/layout';
import AdvicePosts from '@/components/sections/advicePosts';
import CTA from '@/components/sections/cta';
import { getAdvicePosts, getAllPosts } from 'lib/mdx';
import { IPostMeta } from 'types';
import { NextPageWithLayout } from '../page';

interface IHome {
  postsMeta: IPostMeta[];
}

const Home: NextPageWithLayout<IHome> = ({ postsMeta }) => {
  return (
    <>
      <AdvicePosts postsMeta={postsMeta} />
      <CTA />
    </>
  );
};
export default Home;

Home.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export async function getStaticProps() {
  const postsMeta = getAdvicePosts()
    .slice(0, 9)
    .map((post) => post.meta);

  return { props: { postsMeta } };
}
