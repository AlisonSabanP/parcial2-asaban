import type { Client } from "../../domain/client.type"

type Props = {
    client: Client
    onPaid: (id: string, debt: number) => void;
}

export default function clientItem({client, onPaid}: Props) {

    return (
        <div className="flex items-center justify-between p-2 bg-primary-content">
            <div className="flex items-center">
                {
                client.paid ? (
                    <span className="text-gray-800 line-through">{client.nameClient} {client.debt}</span>
                ) : (
                    <span className="text-gray-800">{client.nameClient} {client.debt}</span>
                )
                }
            </div>
            <button 
                type="button" 
                onClick={() => onPaid(client.id, 0)}
                className="bg-yellow-200  p-4 text-gray-500">
                PAGADO
            </button>
        </div>
    )
}
