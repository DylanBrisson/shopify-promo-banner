# Bannière Promo - Pléiades pour Shopify

Cette fonctionnalité permet d'ajouter une bannière promotionnelle interactive avec un compte à rebours et un effet d'animation d'étoiles sur Shopify. Lorsque l'utilisateur clique sur la bannière un certain nombre de fois, des étoiles scintillantes apparaissent.

## Prérequis

Avant de commencer, assurez-vous d'avoir les éléments suivants installés sur votre machine :
- Un environnement Shopify pour tester le code.
- Accès au thème de votre boutique Shopify.

## Installation

1. **Clonez le dépôt** :

    ```bash
    git clone https://github.com/votre-utilisateur/votre-depot.git
    ```

2. **Ajoutez les fichiers nécessaires au thème Shopify** :
    - Téléversez les fichiers `promo-banner.css` et `promo-banner.js` dans le dossier `assets` de votre thème Shopify.
    - Ajoutez le code suivant dans le fichier `theme.liquid` (ou le fichier où vous voulez afficher la bannière) juste avant la fermeture de la balise `</body>` :
    
    ```liquid
    <script src="{{ 'promo-banner.js' | asset_url }}"></script>
    <link rel="stylesheet" href="{{ 'promo-banner.css' | asset_url }}">
    ```

3. **Ajoutez le code HTML de la bannière dans le fichier où vous voulez afficher la bannière** :

    ```liquid
    <div class="promo-banner cosmic-bg p-4 text-white text-center rounded-lg" data-end-date="2025-12-31">
        <p class="text-lg font-bold">✨ Pléiades vous réserve une surprise ! Profitez d’une offre exclusive avant la fin du compte à rebours. 🚀</p>
        <p class="text-xl font-semibold mt-2 countdown-timer"></p>
        <a href="#" class="mt-4 inline-block cosmic-button py-2 px-4 rounded-lg">J'en profite</a>
    </div>
    ```

4. **Personnalisez les paramètres** :
    - Modifiez les paramètres dans le fichier Liquid (ex. : `promo_message`, `countdown_date`, `button_text`, etc.) pour adapter la bannière à vos besoins.

## Test du projet

### 1. Affichage de la bannière
- La bannière apparaîtra sur la page de votre boutique avec un message personnalisé et un compte à rebours jusqu'à la date que vous avez définie.
  
### 2. Interaction avec la bannière
- Cliquez plusieurs fois sur la bannière pour voir l'effet des étoiles apparaître. Après 3 clics, des étoiles scintillantes apparaîtront pendant quelques secondes.

### 3. Vérifiez la bonne fonction du compte à rebours
- Le compte à rebours doit afficher la durée restante avant la fin de l'offre. Lorsque l'offre expire, le texte doit changer en "Offre expirée".

## Tester via GitHub Pages

1. **Déployer sur GitHub Pages** :
    - Dans votre dépôt GitHub, allez dans les **Paramètres** (Settings).
    - Sous **Pages**, sélectionnez la branche à partir de laquelle vous souhaitez déployer, généralement `main` ou `master`.
    - Choisissez le dossier `/ (root)` et cliquez sur **Save**.

2. **Ajouter les fichiers nécessaires pour GitHub Pages** :
    - Placez vos fichiers `promo-banner.css` et `promo-banner.js` dans le dossier `assets` de votre dépôt GitHub.
    - Ajoutez le code suivant dans un fichier HTML à la racine de votre dépôt pour tester la bannière localement via GitHub Pages :

    ```html
    <!DOCTYPE html>
    <html lang="fr">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Démo Bannière Promo - Shopify</title>
        <link rel="stylesheet" href="assets/promo-banner.css">
    </head>
    <body>

        <div class="promo-banner cosmic-bg p-4 text-white text-center rounded-lg" data-end-date="2025-12-31">
            <p class="text-lg font-bold">✨ Pléiades vous réserve une surprise ! Profitez d’une offre exclusive avant la fin du compte à rebours. 🚀</p>
            <p class="text-xl font-semibold mt-2 countdown-timer"></p>
            <a href="#" class="mt-4 inline-block cosmic-button py-2 px-4 rounded-lg">J'en profite</a>
        </div>

        <script src="assets/promo-banner.js"></script>
    </body>
    </html>
    ```

3. **Accéder à votre page de test** :
    - Une fois que vous avez déployé GitHub Pages, vous pourrez accéder à votre page de test en allant sur l'URL suivante :
    
    ```
    https://votre-utilisateur.github.io/votre-depot/
    ```

4. **Vérifiez la bannière** :
    - Vérifiez si la bannière s'affiche correctement et si l'effet des étoiles fonctionne comme prévu.

## License

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.
