import styles from './statistics.module.css'
import PropTypes from 'prop-types' 


const Statistics = ({title,stats}) => {
    return (
        <section className={styles.statistics }>
            <h2 className={styles.title}>{title}</h2>
        <ul className={styles.list}>
            { stats.map(Item) }                
        </ul>
        </section>
    )
}
function Item({label,percentage,id}) {
    return (
        <li key={id} className={styles.item } style={{ backgroundColor: getRandomHexColor() }}>
            <span className={styles.label }>{label}</span>
            <span className={styles.percentage }>{percentage}%</span>
        </li>
    )
}
Statistics.prototype = {
    title: PropTypes.string,
    stats: PropTypes.PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  )
}
const getRandomHexColor = () =>{
   return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

export default Statistics