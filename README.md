# 💬 React Discussion Forum

Une plateforme de discussion moderne et réactive, développée en **React (Vite)**. Ce projet simule un environnement de forum complet avec authentification, gestion de sujets et panneau d'administration.

> **Note :** Ce projet est une démonstration Front-End ("Serverless"). La persistance des données est gérée via le **LocalStorage** du navigateur, permettant de conserver les utilisateurs et les messages sans base de données externe.

## ✨ Fonctionnalités

### 👤 Gestion Utilisateur
* **Inscription & Connexion :** Système d'authentification sécurisé (simulation).
* **Profil :** Page de profil utilisateur personnalisée.
* **Persistance :** Les sessions restent actives même après rafraîchissement de la page.

### 🗣️ Espace Forum
* **Création de Sujets :** Éditeur pour lancer de nouvelles discussions.
* **Flux d'actualité :** Affichage dynamique des derniers topics postés.
* **Protection des Routes :** Redirection automatique si un utilisateur non connecté tente d'accéder au forum.

### 🛡️ Administration (Back-office)
* **Compte Admin :** Accès privilégié pour la modération.
* **Gestion des Membres :** Possibilité de bannir des utilisateurs irrespectueux.
* **Visualisation :** Liste complète des inscrits.

## 🛠 Stack Technique

* **Core :** [React 18](https://react.dev/)
* **Build Tool :** [Vite](https://vitejs.dev/) (pour des performances optimales)
* **Routing :** [React Router Dom](https://reactrouter.com/) (Gestion de la navigation SPA)
* **Style :** CSS3 Moderne (Flexbox/Grid layout)
* **State Management :** React Hooks (`useState`, `useEffect`) + LocalStorage API

## 🚀 Installation et Lancement

Cloner le projet et installer les dépendances :

```bash
# 1. Cloner le repo
git clone https://github.com/AYMNR92/react-discussion-forum.git

# 2. Entrer dans le dossier
cd react-discussion-forum

# 3. Installer les paquets (Node.js requis)
npm install

# 4. Lancer le serveur de développement
npm run dev
```
Ouvrez votre navigateur sur l'adresse indiquée (généralement `http://localhost:5173`).

## 🔑 Comptes de Démonstration

Pour tester les fonctionnalités d'administration sans créer de compte, vous pouvez utiliser le compte par défaut généré automatiquement :

* **Email :** `admin@admin.com`
* **Mot de passe :** `admin`

## 📂 Structure du Projet

```text
src/
├── components/      # Composants UI réutilisables (Navbar, Forum, Login...)
├── App.jsx          # Logique centrale et Routing
├── main.jsx         # Point d'entrée de l'application
└── App.css          # Styles globaux