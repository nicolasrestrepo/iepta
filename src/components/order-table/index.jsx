import React from 'react';
import { Table } from 'react-bootstrap';

function OrderTable({ orders }) {
    return (
        <Table responsive>
            <thead>
            <tr>
                <th>Producto</th>
                <th>Precio Unidad</th>
                <th>Cantidad</th>
                <th>Precio Total</th>
            </tr>
            </thead>
            <tbody>
            {orders.map((order) => (
                <tr key={order.produxt}>
                    <td>{order.product}</td>
                    <td>{order.unitPrice}</td>
                    <td>{order.amount}</td>
                    <td>{order.totalPrice}</td>
                </tr>
            ))}
            </tbody>
        </Table>);
}

export default OrderTable;