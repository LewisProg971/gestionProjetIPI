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

## ✨ Nouvelles Fonctionnalités Premium

*   **🌙 Mode Sombre :** Basculez entre le mode clair et sombre via le bouton ☀️/🌙 dans l'en-tête.
*   **📸 Upload Multiple :** Le posteur peut désormais charger plusieurs photos directement depuis son ordinateur.
*   **🖼️ Galerie Interactive :** Dans l'interface Swiper, cliquez à gauche ou à droite de la photo pour faire défiler la galerie.
*   **⚡ Animations de Swipe :** Effets visuels fluides lors du like ou du dislike.
*   **🔍 Filtres & Tri :** Filtrez les profils par sexe, âge, et triez-les par "Indicateur de Beauté" (Prix).
*   **🔔 Notifications Push :** Recevez une notification de navigateur dès qu'un match est confirmé (si autorisé).
