import styles from './Frase.module.css'

function Frase() {
    return (
        <div className={styles.fraseContainer}>
            <p className={styles.fraseContent}>
                Este é o componente de uma classe
            </p>
        </div>
    )
}
export default Frase    