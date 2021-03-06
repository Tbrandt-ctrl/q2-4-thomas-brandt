import Head from "next/head";

import { useState } from "react";

const question3 = () => {
  const [current, setCurrent] = useState(0);

  const [messages, setMessages] = useState([]);

  const addresses = [
    {
      rue: "2192 rue Ontario Ouest",
      ville: "Montreal",
      province: "QC",
      codePostal: "H2X 1Y8",
    },

    {
      rue: "646 rue Parc",
      ville: "Sherbrooke",
      province: "QC",
      codePostal: "J1H 5M7",
    },

    {
      rue: "4451 rue de la Gauchetière",
      ville: "Montreal",
      province: "QC",
      codePostal: "H3B 2M3",
    },
  ];

  return (
    <>
      <Head>
        <title>Question 4 -Examen Final de DAW - Thomas Brandt</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="container mt-5">
          <div className="row justify-content-center">
            <div className="col-10">
              {/* 				<!-- Table des adresses existantes --> */}
              <h5>Adresses sauvegardées</h5>
              <table className="table">
                <thead>
                  <tr>
                    <th>Description</th>
                    <th className="text-center">Sélectionnée</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody id="corps-table-adresses">
                  {addresses.map((addresse, index) => {
                    {
                      /*    Je m'étais dis que de créer un composant me simplifierais la vie mais bon le prop-drilling n'aide pas */
                    }

                    return (
                      <Row
                        addresse={addresse}
                        index={index}
                        current={current}
                        setCurrent={setCurrent}
                        key={index}
                      />
                    );
                  })}
                </tbody>
              </table>
              <hr />
              {/* 				<!-- Section pour expédier le colis à l'adresse sélectionner -->
               */}
              <h5 className="mt-5">
                Appuyez sur le bouton ci-dessous pour expédier le colis
              </h5>
              <button
                className="btn btn-info"
                onClick={() =>
                  setMessages([
                    ...messages,
                    `Le colis a été livré au: ${addresses[current].rue}, ${addresses[current].ville}, ${addresses[current].province}, ${addresses[current].codePostal}`,
                  ])
                }
              >
                Expédier un nouveau colis!
              </button>
              <ul id="livraison-colis" className="list-group mt-3">
                {messages &&
                  messages.map((message) => {
                    return <li className="list-group-item">{message}</li>;
                  })}
              </ul>
              <hr />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default question3;

const Row = ({ addresse, index, current, setCurrent }) => {
  const { rue, ville, province, codePostal } = addresse;
  return (
    <tr>
      <td>
        {rue}, {ville}, {province} ,{codePostal}
      </td>
      <td id="etat-adresse-0" className="text-center etat-adresse">
        {index === current && "X"}
      </td>
      <td>
        {index !== current && (
          <button
            className="btn btn-primary btn-sm btn-selectionner"
            onClick={() => {
              setCurrent(index);
            }}
          >
            Sélectionner
          </button>
        )}
      </td>
    </tr>
  );
};
