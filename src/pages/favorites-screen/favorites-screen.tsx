import { JSX } from 'react';
import { Offers } from '../../mocks/types';
import { getNewStr, getRoundNumber } from '../../utils';

type FavoritesScreen = {
  offers: Offers;
}

export default function FavoritesScreen({offers}: FavoritesScreen): JSX.Element {
  const showCards = offers.filter((item) => item.isFavorite);

  return (
    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <ul className="favorites__list">
            <li className="favorites__locations-items">
              <div className="favorites__locations locations locations--current">
                <div className="locations__item">
                  <a className="locations__item-link" href="#">
                    <span>Amsterdam</span>
                  </a>
                </div>
              </div>
              <div className="favorites__places">

                {showCards.map((item) =>
                  (
                    <article className="favorites__card place-card" key={item.id}>
                      <div className="place-card__mark">
                        <span>Premium</span>
                      </div>
                      <div className="favorites__image-wrapper place-card__image-wrapper">
                        <a href="#">
                          <img className="place-card__image" src={item.images[0]} width="150" height="110" alt="Place image" />
                        </a>
                      </div>
                      <div className="favorites__card-info place-card__info">
                        <div className="place-card__price-wrapper">
                          <div className="place-card__price">
                            <b className="place-card__price-value">&euro;{item.price}</b>
                            <span className="place-card__price-text">&#47;&nbsp;night</span>
                          </div>
                          <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
                            <svg className="place-card__bookmark-icon" width="18" height="19">
                              <use xlinkHref="#icon-bookmark"></use>
                            </svg>
                            <span className="visually-hidden">In bookmarks</span>
                          </button>
                        </div>
                        <div className="place-card__rating rating">
                          <div className="place-card__stars rating__stars">
                            <span style={{width: `${getRoundNumber(item.rating)}0%`}}></span>
                            <span className="visually-hidden">Rating</span>
                          </div>
                        </div>
                        <h2 className="place-card__name">
                          <a href="#">Nice, cozy, warm big bed apartment</a>
                        </h2>
                        <p className="place-card__type">{getNewStr(item.type)}</p>
                      </div>
                    </article>
                  )
                )}

              </div>
            </li>

          </ul>
        </section>
      </div>
    </main>
  );
}

