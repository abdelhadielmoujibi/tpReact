# TP React - Application Mes Tâches

Projet réalisé dans le cadre du TP React portant sur l'apprentissage des bases de React (composants, props, state, formulaires et effets).

L'application est un gestionnaire de tâches (To-Do List) interactif développé avec React et Vite.

## Fonctionnalités

- **Gestion des tâches** : ajout via formulaire contrôlé, suppression, et validation (cocher/décocher).
- **Filtres** : possibilité de filtrer l'affichage (Toutes, À faire, Terminées).
- **Statistiques** : calcul automatique du nombre total de tâches, terminées et restantes.
- **Horloge** : affichage de l'heure en temps réel avec mise à jour chaque seconde.
- **Compteur** : petit module de compteur avec boutons +1, -1 et remise à zéro.
- **Chargement initial** : récupération des tâches de départ depuis un fichier JSON (`taches.json`) avec gestion du chargement et des erreurs réseau.
- **Titre d'onglet dynamique** : mise à jour du titre de la page avec le nombre de tâches en attente.

## Structure du code

Le projet est découpé en plusieurs composants dans le dossier `src/components/` :

- `Carte.jsx` : conteneur réutilisable pour chaque section de la page.
- `Entete.jsx` et `Pied.jsx` : en-tête et pied de page.
- `Horloge.jsx` : composant utilisant un timer (`setInterval` nettoyé dans `useEffect`).
- `Compteur.jsx` : gestion d'un compteur avec `useState`.
- `FormulaireAjout.jsx` : champ texte contrôlé pour la création de tâches.
- `Filtres.jsx` : sélection du filtre actif.
- `ListeTaches.jsx` et `Tache.jsx` : affichage des éléments de la liste.
- `Statistiques.jsx` : affichage des chiffres calculés à partir de la liste principale.
- `App.jsx` : composant parent qui centralise l'état des tâches et des filtres.

## Lancer le projet

1. Installer les dépendances :
```bash
npm install
```

2. Démarrer le serveur de développement :
```bash
npm run dev
```

3. Vérifier le code :
```bash
npm run lint
```
