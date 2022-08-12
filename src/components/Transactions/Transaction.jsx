import styles from './TransactionHistory.module.css';

const Transaction = ({ type, amount, currency }) => {
    return (
        <>
            <td className={styles.itemType}>{type}</td>
            <td className={styles.itemAmount}>{amount}</td>
            <td className={styles.itemCurrency}>{currency}</td>
        </>
    );
};

export default Transaction;
