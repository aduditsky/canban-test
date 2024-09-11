import { NextPage } from 'next';
import { HomePageContainer, HomeTitle } from '@/styles/home.page';
import dynamic from 'next/dynamic';
import ThemeButton from '@/components/buttons/theme';
import Head from 'next/head';

const DragAndDrop = dynamic(() => import('@/components/kanban'), {
  ssr: false,
  loading: () => <div>Загрузка...</div>,
});

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Канбан с Товарами</title>
        <meta name='description' content='Made by A. Duditskii' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <HomePageContainer>
        <HomeTitle>Канбан Доска</HomeTitle>
        <ThemeButton />

        <DragAndDrop />
      </HomePageContainer>
    </>
  );
};

export default Home;
