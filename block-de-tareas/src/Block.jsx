import { Card } from "./Notes";

export function SectionBlock() {

    const iconPlus = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
        <path fill-rule="evenodd" d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd" />
    </svg>

    const dataNotes = [
        { nota: "hola como estas1", fecha: "30/07/24"},
        { nota: "hola como estas2", fecha: "30/07/24"}
    ];

    return (
        <div className="container-block">
            <div className="header-block">
                <h1>Notas del día</h1>
                <a href="" className="header-button"><i>{iconPlus}</i>Nueva Nota</a>
            </div>
            <div className="card-block">
                {dataNotes.map(({ nota, fecha}) => (
                    <Card
                        notes={nota}
                        fech={fecha}
                    />
                ))}
            </div>
        </div>
    );
}