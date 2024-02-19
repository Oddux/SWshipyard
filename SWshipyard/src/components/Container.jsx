import '../styles/Container.css';
import Card from './Card';
import useAllShips from '../utils/hooks';

function Container() {
    const { loading, error, data } = useAllShips();
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
    console.log(data);
    const { allStarships } = data;

    return (
        <div className="container">
            {allStarships.starships.map((ship) => (
                <Card key={ship.id}
                ship={ship} />
            ))}
        </div>
    );
}

export default Container;