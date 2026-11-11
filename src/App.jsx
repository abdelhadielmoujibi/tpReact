import { useState } from 'react'
import Entete from './components/Entete.jsx'
import Compteur from './components/Compteur.jsx'
import FormulaireAjout from './components/FormulaireAjout.jsx'
import Filtres from './components/Filtres.jsx'
import ListeTaches from './components/ListeTaches.jsx'
import Statistiques from './components/Statistiques.jsx'
import Carte from './components/Carte.jsx'
import Pied from './components/Pied.jsx'

const TACHES_INITIALES = [
  { id: 1, titre: 'Installer Node.js et Vite', terminee: true },
  { id: 2, titre: 'Comprendre les composants', terminee: true },
  { id: 3, titre: 'Passer des données avec les props', terminee: false },
  { id: 4, titre: "Gérer l'état avec useState", terminee: false },
]

function App() {
  const [taches, setTaches] = useState(TACHES_INITIALES)
  const [filtre, setFiltre] = useState('toutes')

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

  // État dérivé (calculé, aucun useState pour tachesVisibles)
  const tachesVisibles =
    filtre === 'actives'
      ? taches.filter((tache) => !tache.terminee)
      : filtre === 'terminees'
        ? taches.filter((tache) => tache.terminee)
        : taches

  return (
    <div className="app">
      <Entete titre="Mes tâches" sousTitre="Mon premier projet React" />

      <Carte titre="Compteur">
        <Compteur />
      </Carte>

      <Carte titre="Nouvelle tâche">
        <FormulaireAjout onAjouter={ajouterTache} />
      </Carte>

      <Carte titre="Ma liste">
        <Filtres filtre={filtre} onChanger={setFiltre} />
        <ListeTaches
          taches={tachesVisibles}
          onBasculer={basculerTache}
          onSupprimer={supprimerTache}
        />
      </Carte>

      <Carte titre="Statistiques">
        <Statistiques taches={taches} />
      </Carte>

      <Pied auteur="Abdel" />
    </div>
  )
}

export default App
