# Exercices sur les Nombres Relatifs

Une application web interactive pour apprendre et s'entraîner aux opérations sur les nombres relatifs. Cette application est construite avec **React** et **Vite**.

## 📝 Description

Cette application pédagogique permet aux élèves de comprendre et de maîtriser les règles de calcul avec les nombres relatifs. Elle combine une section de cours théoriques avec une section d'exercices pratiques progressifs.

L'interface est divisée en deux parties :
- **Panneau de Leçons (Gauche)** : Rappelle les règles essentielles (signes, priorités, etc.).
- **Panneau d'Exercices (Droite)** : Pose des questions, vérifie les réponses et fournit des explications détaillées.

## ✨ Fonctionnalités

- **12 Niveaux de difficulté** : Progression pédagogique allant de l'addition simple aux calculs complexes avec priorités.
- **Feedback Immédiat** : Chaque réponse est corrigée instantanément.
- **Explications Détaillées** : En cas d'erreur (ou de réussite), une explication contextuelle est fournie pour renforcer l'apprentissage.
- **Suivi du Score** : Compteur de bonnes réponses pour motiver l'utilisateur.
- **Cours Intégré** : Accès permanent aux règles de calcul (Addition, Soustraction, Multiplication, Priorités).

## 🚀 Installation et Utilisation

Suivez ces instructions pour installer et lancer le projet localement.

### Prérequis
- [Node.js](https://nodejs.org/) installé sur votre machine.

### Installation

1. Clonez le dépôt (si ce n'est pas déjà fait) :
   ```bash
   git clone <URL_DU_REPO>
   cd Testopérationrelatif
   ```

2. Installez les dépendances :
   ```bash
   npm install
   ```

### Lancement

Pour démarrer le serveur de développement :

```bash
npm run dev
```

L'application sera accessible généralement à l'adresse `http://localhost:5173`.

## 📚 Niveaux Disponibles

L'application propose une progression structurée :

1.  **Niveau 1** : Addition de nombres de même signe.
2.  **Niveau 2** : Addition de nombres de signes contraires.
3.  **Niveau 3** : Soustraction (ajout de l'opposé).
4.  **Niveau 4** : Mélange Additions / Soustractions.
5.  **Niveau 5** : Multiplication (règle des signes).
6.  **Niveau 6** : Priorités (Multiplication avant Addition).
7.  **Niveau 7** : Parenthèses.
8.  **Niveau 8** : Division.
9.  **Niveau 9** : Chaîne de 3 opérations.
10. **Niveau 10** : Chaîne de 4 opérations.
11. **Niveau 11** : Chaîne de 5 opérations.
12. **Niveau 12** : Ultime (Grands nombres et structures complexes).

## 🛠 Technologies Utilisées

- **[React](https://react.dev/)** : Bibliothèque JavaScript pour l'interface utilisateur.
- **[Vite](https://vitejs.dev/)** : Outil de build rapide et serveur de développement.
- **ESLint** : Pour la qualité du code.

## 📂 Structure du Projet

```
src/
├── assets/          # Images et ressources statiques
├── components/      # Composants React
│   ├── Layout.jsx       # Structure principale de la page
│   ├── LessonPanel.jsx  # Affichage des cours
│   └── PracticePanel.jsx # Zone d'exercice et de score
├── utils/
│   └── mathLogic.js     # Logique de génération des questions et règles mathématiques
├── App.jsx          # Composant racine, gestion de l'état global (score, niveau)
└── main.jsx         # Point d'entrée de l'application
```

---
Développé pour faciliter l'apprentissage des mathématiques.
