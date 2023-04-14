import MainLayout from '@/components/layout';
import { IPostMeta } from 'types';
import { NextPageWithLayout } from '../page';

interface IHome {
    postsMeta: IPostMeta[];
  }
  
  const Home: NextPageWithLayout<IHome> = ({ postsMeta }) => {
    return (
        <section className="py-20">
        <div className="container mx-auto flex flex-col md:flex-row md:items-center gap-4 px-4 md:px-10">
            <h2 className="text-2xl font-bold">
            Want to Get Advice from an Existentialist Philosopher and be Featured on our Page?
            </h2>
          </div>
          <div className="container mx-auto flex flex-col md:flex-row md:items-center gap-4 px-4 md:px-10">
            <p>
            Send us an email at extrasentialism@info.com and detail all your woes! We&apos;ll match you to one of the world&apos;s leading existentialist philosophers and set you on the right path! Get some of the best, applicable life knowledge today, only at Extratentialist!
            </p>
          </div>
      </section>
    );
  };
  export default Home;

  Home.getLayout = (page) => <MainLayout>{page}</MainLayout>;
