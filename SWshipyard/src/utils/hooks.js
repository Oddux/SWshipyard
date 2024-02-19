import { useQuery } from '@apollo/client';
import { getAllShips } from './queries';

const useAllShips = () => {
    const { data, loading, error } = useQuery(getAllShips);
    return { data, loading, error };};

export default useAllShips;