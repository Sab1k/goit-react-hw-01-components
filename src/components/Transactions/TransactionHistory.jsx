import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';
import Transaction from './Transaction';

const TransactionHistory = ({ items }) => {
    return (
        <table className={styles.table}>
            <thead>
                <tr className={styles.tableHead}>
                    <th className={styles.tableHead}>Type</th>
                    <th className={styles.tableHead}>Amount</th>
                    <th className={styles.tableHead}>Currency</th>
                </tr>
            </thead>

            <tbody>
                {items.map(item => (
                    <tr className={styles.tableRow} key={item.id}>
                        <Transaction
                            type={item.type}
                            amount={item.amount}
                            currency={item.currency}
                        />
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        })
    ),
};

export default TransactionHistory;
