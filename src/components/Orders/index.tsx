import { Order } from "../../types/Order"
import { OrdersBoard } from "../OrdersBoard"
import { Container } from "./styles"

const orders: Order[] = [
	{
		"_id": "6387a6b8e9378c1efe6b557d",
		"table": "123",
		"status": "WAITING",
		"products": [
			{
				"product": {
					"name": "Pizza Quatro Queijos",
					"imagePath": "1669760819372-quatro-queijos.png",
					"price": 40,
				},
				"quantity": 3,
				"_id": "6387a6b8e9378c1efe6b557e"
			},
			{
				"product": {
					"name": "Coca Cola ",
					"imagePath": "1669833650893-coca-cola.png",
					"price": 7,
				},
				"quantity": 2,
				"_id": "6387a6b8e9378c1efe6b557f"
			}
		]
	}
]

export function Orders() {
	return (
		<Container>
			<OrdersBoard
				icon="🕛"
				title="Fila de Espera!"
				orders={orders}
			/>
			<OrdersBoard
				icon="👨‍🍳"
				title="Em Preparo!"
				orders={[]}
			/>
			<OrdersBoard
				icon="✅"
				title="Pronto!"
				orders={[]}
			/>
		</Container>
	)
}
