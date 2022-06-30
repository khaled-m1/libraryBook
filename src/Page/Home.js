import Header from '../components/Home/Header';
import Forms from '../components/Home/Forms';
import Card from '../components/Home/Card';

const Home = ({ onChange, search, searchBook, bookData }) => {
  return (
    <>
      <Header />
      <Forms onChange={onChange} search={search} searchBook={searchBook} />
      <Card bookData={bookData} />
    </>
  );
};

export default Home;
