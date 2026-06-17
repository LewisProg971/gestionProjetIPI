# Maquette Tinder-like (Fonctionnelle)

Cette application est une maquette interactive permettant de simuler deux rôles : un **Posteur** qui dépose des offres de profils, et un **Swiper** qui consulte et matche ces offres.

## 🚀 Comment lancer la maquette

Aucune installation n'est requise. Suivez simplement ces étapes :

1.  Localisez le dossier `maquette_fonctionnelle`.
2.  Ouvrez le fichier `index.html` dans votre navigateur web préféré (Chrome, Firefox, Edge, Safari, etc.).
    *   *Astuce : Vous pouvez faire un clic droit sur le fichier et choisir "Ouvrir avec..." ou simplement le glisser-déposer dans une fenêtre de navigateur ouverte.*

## 📖 Guide d'utilisation

Pour tester le flux complet, nous vous recommandons d'ouvrir deux onglets côte à côte.

### 1. Côté Posteur (poster.html)
*   Remplissez le formulaire pour ajouter une personne (URL photo, lieu, âge, etc.).
*   **Indicateur de beauté :** Utilisez le champ "Prix" (plus il est élevé, plus le profil est considéré comme "beau/belle").
*   Une fois validé, l'offre est disponible sur la plateforme.

### 2. Côté Swiper (swiper.html)
*   Les profils ajoutés par le posteur apparaissent sous forme de cartes.
*   Cliquez sur le **Cœur (❤)** pour liker ou sur la **Croix (✖)** pour passer.
*   Lorsqu'un profil est liké, une notification est envoyée (via le stockage local) au posteur.

### 3. Finalisation du Match
*   Retournez sur l'interface **Posteur**.
*   Dans la section "Matchs en attente", le profil liké apparaît.
*   Cliquez sur **Accepter**. Une fenêtre surgissante vous demandera de saisir une **adresse de rendez-vous**.
*   Une fois l'adresse saisie, le Swiper verra instantanément l'adresse s'afficher dans sa section "Matchs Confirmés".

## 🛠 Détails Techniques
*   **Stockage :** L'application utilise le `localStorage` du navigateur. Les données sont persistantes sur votre machine tant que vous ne videz pas le cache du navigateur.
*   **Communication :** La synchronisation entre les onglets est automatique (rafraîchissement toutes les 5 secondes pour les listes de matchs).
