# Gestion Stagiaires Backend

Ce projet est le backend de l'application de gestion des stagiaires, développé avec **Spring Boot** et exposant une API REST consommée par le frontend Vue/React.

## Prérequis

- Java 17+ (Spring Boot 3.2.5) ([github.com](https://github.com/olafass222/gestions_tagiaires/blob/main/backend/pom.xml))
- Maven 3.6+ (ou utiliser le wrapper Maven)
- MySQL (base de données `gestion_stagiaires`) ([github.com](https://github.com/olafass222/gestions_tagiaires/blob/main/backend/application.yml))

## Installation et lancement

1. Clonez le dépôt :
   ```bash
   git clone https://github.com/olafass222/gestions_tagiaires.git
   cd gestions_tagiaires/backend
   ```
2. Créez la base MySQL :
   ```sql
   CREATE DATABASE gestion_stagiaires CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

   Le fichier sql de la base de donnée se trouve dans le dossier gestionstagiaires du back
   ```
   (Vous pouvez aussi utiliser le script `stagiaire_db.sql` présent dans `src/main/java/com/example/gestionstagiaires/gestionstagiaires/`) ([github.com](https://github.com/olafass222/gestions_tagiaires/tree/main/backend/src/main/java/com/example/gestionstagiaires))
3. Configurez `src/main/resources/application.yml` :
   - `spring.datasource.username`, `spring.datasource.password`
   - `spring.mail.username`, `spring.mail.password` ([github.com](https://github.com/olafass222/gestions_tagiaires/blob/main/backend/application.yml))
4. Compilez et lancez l’application :
   ```bash
   mvn clean package
   mvn spring-boot:run
   ```
   Ou bien :
   ```bash
   java -jar target/gestion-stagiaires-1.0-SNAPSHOT.jar
   ```


    Ou bien : pour ne pas risquer de detruire votre système utiliser un environnement virtuel a travers ces étapes:
   ```bash

  ``` Je tiens à préciser que je fonctionne sous ubuntu si ce n'est pas votre cas veuillez faire tout ce qui s'impose 
   dans le dossier backer executer:
   curl -s "https://get.sdkman.io" | bash
   sdk install java 17.0.1-open
   sdk install maven 3.8.1
   sdk use java 17.0.1-open
   sdk use maven 3.8.1
   puis
   mvn clean install
   mvn spring-boot:run -e -X
   ```


## Configuration CORS

Pour autoriser le frontend (port **3002**) à accéder à l’API, ajoutez dans `GestionStagiairesApplication.java` ou une configuration dédiée :

```java
@Bean
public WebMvcConfigurer corsConfigurer() {
  return new WebMvcConfigurer() {
    @Override
    public void addCorsMappings(CorsRegistry registry) {
      registry.addMapping("/**")
        .allowedOrigins("http://localhost:3002")
        .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS");
    }
  };
}
```
(Placez ce bean dans la classe principale) ([github.com](https://github.com/olafass222/gestions_tagiaires/tree/main/backend/src/main/java/com/example/gestionstagiaires))

## Endpoints

### Demandes de stage

- `GET  /api/demande-de-stage/toutes_les_demandes` : récupérer toutes les demandes ([github.com](https://github.com/olafass222/gestions_tagiaires/blob/main/backend/src/main/java/com/example/gestionstagiaires/resource/DemandeStageController.java))
- `POST /api/demande-de-stage/creer_une_demande` : soumettre une nouvelle demande ([github.com](https://github.com/olafass222/gestions_tagiaires/blob/main/backend/src/main/java/com/example/gestionstagiaires/resource/DemandeStageController.java))
- `PUT  /api/demande-de-stage/accepter/{id}` : accepter la demande par ID ([github.com](https://github.com/olafass222/gestions_tagiaires/blob/main/backend/src/main/java/com/example/gestionstagiaires/resource/DemandeStageController.java))
- `PUT  /api/demande-de-stage/refuser/{id}` : refuser la demande par ID ([github.com](https://github.com/olafass222/gestions_tagiaires/blob/main/backend/src/main/java/com/example/gestionstagiaires/resource/DemandeStageController.java))
- `GET  /api/demande-de-stage/statut/{statut}` : filtrer par statut (`EN_ATTENTE`, `ACCEPTEE`, `REFUSEE`) ([github.com](https://github.com/olafass222/gestions_tagiaires/blob/main/backend/src/main/java/com/example/gestionstagiaires/resource/DemandeStageController.java))

### Encadrants

- `GET    /api/encadrants/tous_les_encadrants` : lister tous les encadrants ([github.com](https://github.com/olafass222/gestions_tagiaires/blob/main/backend/src/main/java/com/example/gestionstagiaires/resource/EncadrantController.java))
- `POST   /api/encadrants/creer_un_encadrant` : créer un encadrant ([github.com](https://github.com/olafass222/gestions_tagiaires/blob/main/backend/src/main/java/com/example/gestionstagiaires/resource/EncadrantController.java))
- `GET    /api/encadrants/recuperer_un_encadrant/{id}` : récupérer un encadrant par ID ([github.com](https://github.com/olafass222/gestions_tagiaires/blob/main/backend/src/main/java/com/example/gestionstagiaires/resource/EncadrantController.java))
- `PUT    /api/encadrants/mettre_a_jour_encadrant/{id}` : mettre à jour un encadrant (body complet) ([github.com](https://github.com/olafass222/gestions_tagiaires/blob/main/backend/src/main/java/com/example/gestionstagiaires/resource/EncadrantController.java))
- `DELETE /api/encadrants/supprimer_encadrant/{id}` : supprimer un encadrant ([github.com](https://github.com/olafass222/gestions_tagiaires/blob/main/backend/src/main/java/com/example/gestionstagiaires/resource/EncadrantController.java))

### Stagiaires

- `GET    /api/stagiaires/tous_les_stagiaires` : lister tous les stagiaires ([github.com](https://github.com/olafass222/gestions_tagiaires/blob/main/backend/src/main/java/com/example/gestionstagiaires/resource/StagiaireController.java))
- `GET    /api/stagiaires/stagiaire/{id}` : récupérer un stagiaire par ID ([github.com](https://github.com/olafass222/gestions_tagiaires/blob/main/backend/src/main/java/com/example/gestionstagiaires/resource/StagiaireController.java))
- `POST   /api/stagiaires/creer_un_stagiaire` : créer un nouveau stagiaire ([github.com](https://github.com/olafass222/gestions_tagiaires/blob/main/backend/src/main/java/com/example/gestionstagiaires/resource/StagiaireController.java))
- `PUT    /api/stagiaires/metter_a_jour_stagiaire/{id}` : mettre à jour un stagiaire ([github.com](https://github.com/olafass222/gestions_tagiaires/blob/main/backend/src/main/java/com/example/gestionstagiaires/resource/StagiaireController.java))
- `DELETE /api/stagiaires/delete_stagiaire/{id}` : supprimer un stagiaire ([github.com](https://github.com/olafass222/gestions_tagiaires/blob/main/backend/src/main/java/com/example/gestionstagiaires/resource/StagiaireController.java))

## Technologie & dépendances

- **Spring Boot Starter Web** pour exposer les contrôleurs REST ([github.com](https://github.com/olafass222/gestions_tagiaires/blob/main/backend/pom.xml))
- **Spring Data JPA** pour la persistance avec Hibernate/MySQL ([github.com](https://github.com/olafass222/gestions_tagiaires/blob/main/backend/pom.xml))
- **Java MailSender** pour l’envoi d’e-mails de notification (acceptation/refus) ([github.com](https://github.com/olafass222/gestions_tagiaires/blob/main/backend/src/main/java/com/example/gestionstagiaires/service/EmailService.java))

## Contribuer

1. Forkez / clonez le dépôt
2. Créez une branche : `feature/ma-fonctionnalite`
3. Testez, documentez puis ouvrez une Pull Request

---

