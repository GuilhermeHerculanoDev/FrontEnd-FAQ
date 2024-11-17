import { deletequestion } from "@/app/api/questions/deletequestion";
import { editionquestion } from "@/app/api/questions/editionquestions";
import Image from "next/image";
import { useState } from "react";

export default function EdiDeleteControls(value: any) {
    const [showScreenDelete, SetShowScreenDelete] = useState(false);
    const [showScreenEdition, SetShowScreenEdition] = useState(false);
    const [ messageError ,SetmessageError] = useState<string | null>(null)

    async function editQuestion(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        const data = {
            id_questions: value.value,
            title: formData.get("InputTitle"),
            description: formData.get("InputDescription"),
        };

        const filteredData = Object.fromEntries(
            Object.entries(data).filter(([_, value]) => value !== "" && value !== null)
        );

        if (Object.keys(filteredData).length === 1 && filteredData.id) {
            return SetmessageError("Preença pelo menos um campo.");
        }

        const edition = await editionquestion(filteredData);

        alert(edition);

        SetShowScreenEdition(false);

        location.reload();
    }

    return (
        <div className="flex gap-3">
            <button onClick={() => SetShowScreenEdition(true)}>
                <Image src="/icon-lapis.png" alt="Image icon-lapis" width={15} height={15} />
            </button>
            <button onClick={() => SetShowScreenDelete(true)}>
                <Image src="/lixeira.png" alt="Image lixeira" width={15} height={15} />
            </button>

            {showScreenDelete && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full text-center flex flex-col justify-center gap-8">
                        <p>Você deseja deletar essa pergunta?</p>
                        { messageError &&
                            <p>{messageError}</p>
                        }
                        <div className="flex gap-5 justify-center">
                            <button onClick={() => SetShowScreenDelete(false)} className="bg-blue-500 text-white px-4 py-2 rounded">
                                Cancelar
                            </button>
                            <button onClick={() => deletequestion(value.value)} className="bg-blue-500 text-white px-4 py-2 rounded">
                                Deletar
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {showScreenEdition && (
                <form className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center" onSubmit={editQuestion}>
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full text-center flex flex-col justify-center gap-8">
                        <div className="flex flex-col items-center gap-6">
                            <input
                                className="w-[300px] bg-white border border-black rounded-md text-black pl-2.5 p-1 outline-none"
                                name="InputTitle"
                                placeholder="Edite o titulo da Pergunta"
                                type="text"
                            />

                            <input
                                className="w-[300px] bg-white border border-black rounded-md text-black pl-2.5 p-1 outline-none"
                                name="InputDescription"
                                placeholder="Edite a descrição da pergunta"
                                type="text"
                            />
                        </div>
                        <div className="flex gap-5 justify-center">
                            <button onClick={() => SetShowScreenEdition(false)} className="bg-blue-500 text-white px-4 py-2 rounded">
                                Cancelar
                            </button>
                            <input type="submit" className="bg-blue-500 text-white px-4 py-2 rounded" value="Editar" />
                        </div>
                    </div>
                </form>
            )}
        </div>
    );
}
