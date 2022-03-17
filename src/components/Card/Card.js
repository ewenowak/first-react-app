import styles from './Card.module.scss';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { toggleFavoriteCart } from '../../redux/cardsRedux';
import { removeCard } from '../../redux/cardsRedux';

const Card = props => {
   
    const dispatch = useDispatch();

    const changeClass = (cardId) => {
        dispatch(toggleFavoriteCart(cardId))
    };

    const removedCard = (cardId) => {
        dispatch(removeCard(cardId))
    };

    return (
        <li className={styles.card}>{props.title}
            <div>
                <button type="button" onClick={() => changeClass(props.id, props.isFavorite)} className={clsx(styles.button, props.isFavorite && styles.active) }>
                    <span className='fa fa-star-o' />
                </button>
                <button type="button" onClick={() => removedCard(props.id)} className={styles.button}>
                    <span className='fa fa-trash' />
                </button>
            </div>
        </li>
    );
};

export default Card;