import "./ListTask.css";

export default function ListTask() {
  return (
    <section id="list-task">
      <article className="task">
        <p>
          Com a brisa suave do litoral pernambucano, a melodia dos pássaros se
          mistura ao doce aroma das frutas tropicais, enquanto o sol beija a
          areia dourada, convidando a alma a relaxar e sentir a magia deste
          lugar encantador.
        </p>

        <p id="timestamp">10h18 - 19 de Maio de 2025</p>

        <div id="div-buttons">
          <button className="button-check-task">Feito</button>
          <button className="button-edit-task">Editar</button>
          <button className="button-delete-task">Deletar</button>
        </div>
      </article>
    </section>
  );
}
