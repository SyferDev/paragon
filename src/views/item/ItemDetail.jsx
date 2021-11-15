import { faEthereum } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { items } from '../../components/items/Items';
import styles from './ItemDetail.module.scss';

export const ItemDetail = () => {
	const { id } = useParams();
	const [item, setItem] = useState(items[0]);

	useEffect(() => {
		const i = items.find(({index}) => index === parseInt(id));
		setItem(i);
	}, [id]);

	const { image, description, itemName, seller, price } = item;

	return (
		<div className={styles.itemDetail}>
			<div className={styles.content}>
				<div className={styles.itemImage}>
					<img src={image} alt="" />
				</div>
				
				<div className={styles.itemInfo}>
					<h1>{itemName}</h1>
					<span>Owned by <h3>@{seller}</h3></span>

					<div className={styles.description}>
						<h3>Description</h3>
						<hr />
						<p>{description}</p>
					</div>

					<div className={styles.sale}>
						<div className={styles.saleData}>
							<p>Sale ends on December 25, 2025</p>
							<hr />
							<p id={styles.priceLabel}>Current Price</p>
							
							<div className={styles.price}>
								<FontAwesomeIcon icon={faEthereum} />
								<h3>{price}</h3>
								<p className={styles.conversion}>(PHP {price * 236971.56})</p>
							</div>

							<div className={styles.buyNow}>
								<button>Buy now</button>
								<button className={styles.outline}>Make offer</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}