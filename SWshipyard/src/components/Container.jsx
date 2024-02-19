import '../styles/Container.css';
import Cards from './Cards';
import useAllShips from '../utils/hooks';

function Container() {
    const { loading, error, data } = useAllShips();
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
    console.log(data);

    return (
        <div>
            <Cards ships={data} />
        </div>
    );
}

export default Container;