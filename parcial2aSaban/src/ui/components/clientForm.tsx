import { useState } from 'react';

export default function ClientForm() {
    const [nameClient, setNameClient] = useState('');
    const [debt, setDebt] = useState('');


    const addClientSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!nameClient.trim() || !debt.trim()) return;

    setNameClient('');
    setDebt('');
}

    return (
        <div>
            <form onSubmit={addClientSubmit} className="w-full flex flex-col sm:flex-row gap-4 mb-6">
                <input
                    type="text"
                    value={nameClient}
                    placeholder="Ingrese Nombre del deudor"
                    onChange={(e) => setNameClient(e.target.value)}
                    className="border border-gray-300 rounded px-3 py-2 flex-grow"
                />

                <input
                    type="text"
                    value={debt}
                    placeholder="Ingrese Monto de deuda"
                    onChange={(e) => setDebt(e.target.value)}
                    className="border border-gray-300 rounded px-3 py-2 flex-grow"
                />

            <button
                type="submit"
                className="bg-yellow-500 text-white rounded px-4 py-2">
                Guardar Deudor
            </button>
            </form>
        </div>
    )
}















