
import { Cliente, Pedido, Nota, Pagamento, Comissao, User, UserRole } from '../types';
import { CLIENTES, PEDIDOS, NOTAS, PAGAMENTOS, COMISSOES, USERS } from '../data/mock.ts';

const LATENCY = 500; // ms

// In-memory data stores
let clientes: Cliente[] = [...CLIENTES];
let pedidos: Pedido[] = [...PEDIDOS];
let notas: Nota[] = [...NOTAS];
let pagamentos: Pagamento[] = [...PAGAMENTOS];
let comissoes: Comissao[] = [...COMISSOES];
let users: User[] = [...USERS];

const simulateRequest = <T,>(data: T): Promise<T> => {
    return new Promise(resolve => {
        setTimeout(() => resolve(data), LATENCY);
    });
};

export const apiService = {
    // GETTERS
    getUsers: () => simulateRequest(users),
    getClientes: () => simulateRequest(clientes),
    getPedidos: () => simulateRequest(pedidos),
    getNotas: () => simulateRequest(notas),
    getPagamentos: () => simulateRequest(pagamentos),
    getComissoes: () => simulateRequest(comissoes),

    // Can add mutations later if needed, e.g., createCliente, updatePedido, etc.
    // For this example, we'll focus on reads and calculations.
};
