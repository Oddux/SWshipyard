import './App.css';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';

const httpLink = createHttpLink({
  uri: '/graphql',
});
const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
});
function App() {
  return (
    <>
      <ApolloProvider client={apolloClient}>
      </ApolloProvider>
    </>
  );
}

export default App;