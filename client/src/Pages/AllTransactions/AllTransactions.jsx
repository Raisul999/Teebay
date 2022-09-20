import TransactionsCard from '../../components/TrnsactionsCard/TransactionsCard';
import { GET_ALLTRANSACTIONS } from '../../queries/allTransactionsQueries';
import { useQuery } from '@apollo/client';
import Spinner from '../../components/Spinner/Spinner';
function AllTransactions() {
    const { data, error, loading } = useQuery(GET_ALLTRANSACTIONS);

    if (loading) {
        return <Spinner />
    }

    if (error) {
        return <p>Something went wrong</p>
    }

    return (
        <>
            <div>
                <h2 className='text-center'>All Tansactions</h2>
                {data.allTransactions.map((product, i) => (
                    <TransactionsCard
                        key={i}
                        product={product}
                    />
                ))}
            </div>

        </>
    )
}

export default AllTransactions
