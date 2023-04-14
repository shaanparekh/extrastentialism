import Logo from '@/components/brand/logo';
import ThemeToggle from '@/components/ui/theme-toggle';
import Link from 'next/link';

const menuItems = [
  { label: 'Home', link: '/' },
  { label: 'Current Events', link: '/current-events' },
  { label: 'Advice Column', link: '/advice' },
  { label: 'Submit Letter', link: '/'},
  { label: 'About', link: '/'}
];

const Header = () => {
  return (
    <section className="brand-white border-b-2 border-slate-200 dark:border-slate-600">
      <div className="container mx-auto flex flex-wrap items-center justify-between p-4">
        <Logo />

        {/* menu */}
        <div className="flex items-center space-x-4">
          <div className="hidden lg:flex items-center border-r-2">
            {menuItems.map((item, i) => (
              <div className="mr-2" key={i}>
                <Link href={item.link} prefetch={false}>
                  <a className="inline-block px-4 text-md font-medium no-underline rounded-md dark:text-gray-200 hover:text-primary focus:text-primary">
                    {item.label}
                  </a>
                </Link>
              </div>
            ))}
          </div>

          <div className="flex items-center space-x-2">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
