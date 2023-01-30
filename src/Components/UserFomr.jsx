export default function UserForm({ data, updateFillHandler }) {
    return (
        <div className="alignInputs">
            <div className="groupInput">
                <label htmlFor="name">Nome:</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Digite seu nome"
                    value={data.name}
                    onChange={(e) => updateFillHandler('name', e.target.value)}
                    required />
            </div>
            <div className="groupInput">
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Digite seu email"
                    value={data.email}
                    onChange={(e) => updateFillHandler('email', e.target.value)}
                    required />
            </div>
        </div>
    )
}