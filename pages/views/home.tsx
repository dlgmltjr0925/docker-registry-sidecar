import { useRouter } from 'next/dist/client/router';
import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'reducers';
import { signOut } from 'reducers/auth';
import styled from 'styled-components';

interface HomePageProps {}

const HomePage: FC<HomePageProps> = () => {
  const auth = useSelector(({ auth }: RootState) => auth);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogOut = () => {
    dispatch(signOut());
  };

  if (!auth.accessToken) return null;

  return (
    <Container>
      {`home ${auth.user?.username || ''}`}
      <button onClick={handleLogOut}>Logout</button>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
`;

export default HomePage;
