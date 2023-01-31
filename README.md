# Angular-Routing

Dans cet atelier, nous allons mettre en place un système de navigation au sein d'une application de films et série télé.

L'application est composée de cinq components :

- `MoviesListComponent` : pour l'affichage des films
- `MovieComponent` : qui affichera le détail d'un film
- `TvShowsListComponent` : pour l'affichage des séries
- `TvShowComponent` : qui affichera le détail d'une série
- `NavbarComponent` : barre de menu pour la navigation entre les components `MoviesListComponent` et `TvShowsListComponent`

**Les requêtes API sont déjà présentes dans le service `ApiService`, nous allons nous concentrer sur  la navigation uniquement.**

## Prérequis

- Cloner le repository
- `npm install` à la racine du projet

## Partie 1

- Créer une route qui affiche le `MoviesListComponent` en page d'accueil .
- Créer une route `/tvshows` qui affiche le `TvShowsListComponent`.
- Utiliser le  `NavbarComponent` pour naviguer d'une page à l'autre via des liens
- Créer une route `/movies/:id` qui affiche le `MovieComponent`.
- Créer une route `/tvshows/:id` qui affiche le `TvShowComponent`.
- Intégrer un lien autour de chaque film afin de rediriger le visiteur vers la page `/movies/:id`.
- Intégrer un lien autour de chaque série afin de rediriger le visiteur vers la page `/tvshow/:id`.

**Bravo, tu as réussi à mettre en place une navigation au sein de ton application. Tu l'auras remarqué, les pages `MovieComponent` et `TvShowComponent` affichent la même information, quelque soit le film ou la série cliqué. Nous allons, dans la partie 2, personnaliser l'affichage en fonction du choix de l'utilisateur**

## Partie 2

- Au sein du `MovieComponent`, récupère le paramètre `id` du film et utilise la méthode `getMovieById()` pour récupérer ses informations.
- De même, au sein du `TvShowComponent`, récupère le paramètre `id` de la série et utilise la méthode `getTvShowById()` pour récupérer ses informations.

## Allez les devs Gones !
