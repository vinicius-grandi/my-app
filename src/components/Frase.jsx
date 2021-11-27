import styles from './Frase.module.css'

function Frase() {
    return (
        <div className={styles.fraseContainer}>
            <p className={styles.fraseContent}> Olha só são dois componentes juntos.</p>
        </div>
    )
}

export default Frase