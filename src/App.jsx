import { useState, useEffect } from 'react'
import Entete from './components/Entete.jsx'
import Horloge from './components/Horloge.jsx'
import Compteur from './components/Compteur.jsx'
import FormulaireAjout from './components/FormulaireAjout.jsx'
import Filtres from './components/Filtres.jsx'
import ListeTaches from './components/ListeTaches.jsx'
import Statistiques from './components/Statistiques.jsx'
import Carte from './components/Carte.jsx'
import Pied from './components/Pied.jsx'

function App() {
  const [taches, setTaches] = useState([])
  const [filtre, setFiltre] = useState('toutes')
  const [chargement, setChargement] = useState(true)
  const [erreur, setErreur] = useState(null)

  // Étape 5 - Partie B : Charger les tâches depuis public/taches.json
  useEffect(() => {
    let annule = false

    fetch('/taches.json')
      .then((reponse) => {
        if (!reponse.ok) throw new Error(`Erreur HTTP ${reponse.status}`)
        return reponse.json()
      })
      .then((donnees) => {
        if (!annule) setTaches(donnees)
      })
      .catch((err) => {
        if (!annule) setErreur(err.message)
      })
      .finally(() => {
        if (!annule) setChargement(false)
      })

    return () => {
      annule = true
    }
  }, [])

  // Étape 5 - Partie C : Synchroniser le titre de l'onglet
  const restantes = taches.filter((tache) => !tache.terminee).length

  useEffect(() => {
    document.title = `(${restantes}) Mes tâches`
  }, [restantes])

  function basculerTache(id) {
    setTaches(
      taches.map((tache) =>
        tache.id === id ? { ...tache, terminee: !tache.terminee } : tache,
      ),
    )
  }

  function supprimerTache(id) {
    setTaches(taches.filter((tache) => tache.id !== id))
  }

  function ajouterTache(titre) {
    setTaches([...taches, { id: Date.now(), titre, terminee: false }])
  }

  const tachesVisibles =
    filtre === 'actives'
      ? taches.filter((tache) => !tache.terminee)
      : filtre === 'terminees'
        ? taches.filter((tache) => tache.terminee)
        : taches

  return (
    <div className="app">
      <Entete titre="Mes tâches" sousTitre="Mon premier projet React" />

      <Carte titre="Heure actuelle">
        <Horloge />
      </Carte>

      <Carte titre="Compteur">
        <Compteur />
      </Carte>

      <Carte titre="Nouvelle tâche">
        <FormulaireAjout onAjouter={ajouterTache} />
      </Carte>

      <Carte titre="Ma liste">
        <Filtres filtre={filtre} onChanger={setFiltre} />
        {chargement && <p className="vide">Chargement des tâches…</p>}
        {erreur && <p className="erreur">{erreur}</p>}
        {!chargement && !erreur && (
          <ListeTaches
            taches={tachesVisibles}
            onBasculer={basculerTache}
            onSupprimer={supprimerTache}
          />
        )}
      </Carte>

      <Carte titre="Statistiques">
        <Statistiques taches={taches} />
      </Carte>

      <Pied auteur="Abdel" />
    </div>
  )
}

export default App
