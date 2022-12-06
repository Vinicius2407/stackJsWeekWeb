import { useState } from "react";
import { Order } from "../../types/Order";
import { OrderModal } from "../OrderModal";
import { Board, OrdersContainer } from "./styles";

interface OrdersBoardProps {
	icon: string,
	title: string
	orders: Order[];
}

// Props - são os atributos passados para o componente
export function OrdersBoard({ icon, title, orders }: OrdersBoardProps) {
	const [isModalVisible, setIsModalVisible] = useState(false);
	const [selectedOrder, setSelectOrder] = useState<null | Order>(null);

	function handleOpenModal(order: Order) {
		setIsModalVisible(true);
		setSelectOrder(order);
	}

	function handleCloseModal() {
		setIsModalVisible(false);
		setSelectOrder(null);
	}
	return (


		<Board>
			<OrderModal
				visible={isModalVisible}
				order={selectedOrder}
				onClose={handleCloseModal}
			/>

				<header>
					<span>{icon}</span>
					<strong>{title}</strong>
					<span>(1)</span>
				</header>

			{
				orders.length > 0 && (
					<OrdersContainer>
						{orders.map((order) => (
							<button type="button" key={order._id} onClick={() => handleOpenModal(order)}>
								<strong>Mesa { order.table }</strong>
								<span>{ order.products.length } itens</span>
							</button>
						))}
				</OrdersContainer>
				)
			}
		</Board>
	)
}
