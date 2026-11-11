# 📝 Mes Tâches – Application React

Application de gestion de tâches développée avec **React** et **Vite**, réalisée dans le cadre du TP d'apprentissage des fondamentaux de React.

---

## 📌 Présentation du Projet

« **Mes tâches** » est une application interactive permettant de planifier et suivre ses tâches quotidiennes en temps réel. Elle illustre les concepts clés de React à travers une architecture modulaire et découplée en composants réutilisables.

---

## ✨ Fonctionnalités Principales

- 🕒 **Horloge en temps réel** : Affichage dynamique de l'heure locale, synchronisée chaque seconde via `useEffect`.
- 🔢 **Compteur interactif** : Incrémentation, décrémentation (avec protection contre les valeurs négatives) et remise à zéro.
- ➕ **Ajout de tâches** : Formulaire contrôlé avec validation empêchant les saisies vides ou constituées d'espaces.
- 📋 **Gestion des tâches** :
  - Basculement de l'état (terminée / à faire) avec mise à jour visuelle (barrée / case cochée).
  - Suppression unitaire d'une tâche.
- 🔍 **Filtrage dynamique** : Filtre instantané sur les tâches (*Toutes*, *À faire*, *Terminées*).
- 📊 **Statistiques globales** : Calcul en direct du total de tâches, des tâches complétées et des tâches restantes.
- 🌐 **Chargement asynchrone** : Récupération initiale des tâches depuis un fichier `taches.json` via l'API `fetch` avec gestion des états de chargement et d'erreur.
- 🏷️ **Titre d'onglet dynamique** : Mise à jour automatique du titre du navigateur avec le nombre de tâches restantes (`(n) Mes tâches`).

---

## 🧱 Architecture des Composants

L'application est structurée autour de **10 composants dédiés** situés dans `src/components/` :

```
src/
├── components/
│   ├── Carte.jsx           # Conteneur générique avec titre et slot (children)
│   ├── Compteur.jsx        # Gestion d'un compteur interactif (useState)
│   ├── Entete.jsx          # En-tête de l'application (titre et sous-titre via props)
│   ├── Filtres.jsx         # Barre de filtres (Toutes / À faire / Terminées)
│   ├── FormulaireAjout.jsx # Formulaire contrôlé pour la création de tâches
│   ├── Horloge.jsx         # Minuteur live avec gestion du nettoyage (useEffect + setInterval)
│   ├── ListeTaches.jsx     # Rendu de la liste avec map() et clés uniques
│   ├── Pied.jsx            # Pied de page dynamique (auteur et année courante)
│   ├── Statistiques.jsx    # Affichage des valeurs dérivées (sans état interne)
│   └── Tache.jsx           # Item individuel avec case à cocher et action de suppression
├── App.jsx                 # Composant racine orchestrant l'état global et les effets
├── index.css               # Feuille de style CSS globale
└── main.jsx                # Point d'entrée React (StrictMode)
```

---

## 🧠 Notions React mises en œuvre

1. **Composants & JSX** : Découpage modulaire et respect des syntaxes JSX (`className`, balises auto-fermantes, fragment `<>`).
2. **Props & Children** : Passage de données unidirectionnel et composition via `props.children`.
3. **Gestion d'état avec `useState`** : État local et remontée d'état (*lifting state up*) vers `App`.
4. **Immuabilité des données** : Mises à jour des tableaux et objets via le *spread operator* (`...`), `map()` et `filter()`.
5. **Formulaires contrôlés & État dérivé** : Contrôle des champs de saisie (`value` / `onChange`) et calculs dynamiques sans duplication d'état (`tachesVisibles`, statistiques).
6. **Effets de bord avec `useEffect`** :
   - Minuteurs avec fonction de nettoyage (`clearInterval`).
   - Requêtes réseau asynchrones (`fetch`) avec gestion de cycle de vie et drapeau d'annulation.
   - Synchronisation avec le DOM du navigateur (`document.title`).

---

## 🚀 Démarrage du Projet

### Prérequis
- **Node.js** (version 20 ou supérieure recommandée)
- **npm**

### Installation et exécution

1. Cloner ou ouvrir le dossier du projet :
   ```bash
   cd mes-taches
   ```

2. Installer les dépendances :
   ```bash
   npm install
   ```

3. Démarrer le serveur de développement :
   ```bash
   npm run dev
   ```

4. Ouvrir le lien affiché dans le terminal (par exemple : `http://localhost:5173/`).

### Vérification de la qualité du code
```bash
npx oxlint
```
