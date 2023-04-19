# GuideRunner

## Leírás

Egy NestJS-en alapuló akalmazás, amely egy TypeScripten elkészített alkalmazás dokumentálását hivatott bemutatni.


## Telepítési lépések:

#### Előfeltételek:
  * NodeJS 18.16 (LTS)
  * Telepített MySQL / MariaDB
#### Ehhez használd az ezt a parancsot ha még nincs feltelepítve.
      npm install --save @nestjs/typeorm typeorm mysql2

#### A parancs letölti a legújabb nestjs cli-t, amely lehetővéteszi hogy létrehozzuk a  nestjs projektet.
      npm i -g @nestjs/cli   
#### A parancs létrehozza a nestjs mappádat a szükséges fájlokkal.
    nest new projekted_neve
#### A package mangernel pedig válasszuk az 'npm'-et.


#### A parancs letölti azta csomagot amely lehetővé teszi az SQL adatbázissal való integrációt.
    npm install --save @nestjs/typeorm typeorm mysql2
    
   
   
   
   
#### A következő parancsok az alkalmazás hitelesítést fogja segíteni'?'
   ###### Ez a modul lehetővé teszi a HTTP-kérések hitelesítését vivőjogkivonatokkal
    npm i --save  passport passport-http-bearer
    
   ###### Ez a modul lehetővé teszi a felhasználónévvel és jelszóval történő hitelesítést.
    npm i --save-dev @types/passport-local
    
   ###### Ez a csomag, lehetővé teszi bármilyen strategy használatát passport-ból Nest.js-ig.
    npm i --save @nestjs/passport
    
## Az alkalmazás futtatása:

    # Hagyományos módban
    npm run start

    # Fejlesztői módban
    npm run start:debug

    # Production módban
    npm run start:prod
    
## Egységtesztek futtatása:  
    npm run test
   
    
