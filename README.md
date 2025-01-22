# Library Project
## API y UI de un manejador de librería

### Instalación
Para instalar este proyecto es necesario correr
```
git clone https://github.com/borquezln/library-project/
```

### Backend
#### Tecnologías
- NodeJs
- Express
- MongoDb
- Mongoose
- Zod
- JsonWebToken
- Bcrypt
- Cors

#### Configuración
Para configurar este proyecto es necesario correr
```
cd library-project/library-project-api
```
```
npm i
```

Se incluye un archivo `.env.example` para saber cuáles son las variables de entorno necesarias a configurar.

#### Api Endpoints

##### Authentication

**POST /users/register** Registra un nuevo usuario

*Request Body*

```json
{
  "firstName": "Name"
  "lastName": "Surname"
  "email": "test@email.com",
  "password": "password"
}
```
**POST /users/login** Permite la autenticación y devuelve un token

*Request Body*

```json
{
  "email": "test@email.com",
  "password": "password"
}
```

##### Books

**GET /books/** Devuelve todos los libros

**GET /books/stats** Devuelve estadísticas de los libros mediante métodos agregados de Mongo.

**GET /books/:isbn** Devuelve un libro por su ISBN

**POST /books/** Permite crear un nuevo libro en la base de datos

*Request Body*

```json
{
  "title": "",
  "author": "",
  "isbn": "",
  "observations": "",
  "price": ,
  "stock": ,
  "genre": "",
  "publishedYear": ,
  "publisher": "",
  "description": ""
}
```
Solamente son obligatorios *title*, *author*, *isbn*, *price* y *stock*

**PATCH /books/:isbn** Actualiza los datos de un libro por su ISBN

**DELETE /books/:isbn** Devuelve un libro por su ISBN.

###### JSON de ejemplo para ingresar por Postman
```json
{
    "title": "Las aventuras de Sherlock Holmes",
    "author": "Arthur Conan Doyle",
    "isbn": "9788491052833",
    "observations": "Edición rústica - Español",
    "price": 15000,
    "stock": 10,
    "genre": "Misterio",
    "publishedYear": 1900,
    "publisher": "Ediciones Akal",
    "description": "Una colección de cuentos fascinantes de Sherlock Holmes."
}
```
```json
{
    "title": "En busca del tiempo perdido",
    "author": "Marcel Proust",
    "isbn": "9788491052910",
    "observations": "Edición tapa dura - Español",
    "price": 24000,
    "stock": 6,
    "genre": "Literatura clásica",
    "publishedYear": 1913,
    "publisher": "Alianza Editorial",
    "description": "Una exploración profunda de la memoria y el tiempo."
}
```
```json
{
    "title": "Ulises",
    "author": "James Joyce",
    "isbn": "9788491052185",
    "observations": "Edición tapa dura - Español",
    "price": 22000,
    "stock": 5,
    "genre": "Literatura clásica",
    "publishedYear": 1922,
    "publisher": "Alianza Editorial",
    "description": "Una obra maestra de la literatura moderna."
}
```
```json
{
    "title": "Lo que el viento se llevó",
    "author": "Margaret Mitchell",
    "isbn": "9788491052246",
    "observations": "Edición de bolsillo - Español",
    "price": 18000,
    "stock": 8,
    "genre": "Novela histórica",
    "publishedYear": 1936,
    "publisher": "Penguin Clásicos",
    "description": "Una historia épica de amor y guerra en el sur de Estados Unidos."
}
```
```json
{
    "title": "1984",
    "author": "George Orwell",
    "isbn": "9788491052161",
    "observations": "Edición rústica - Español",
    "price": 17000,
    "stock": 12,
    "genre": "Ciencia ficción",
    "publishedYear": 1949,
    "publisher": "Debolsillo",
    "description": "Una distopía sobre el control totalitario y la vigilancia."
}
```
```json
{
    "title": "El señor de los anillos",
    "author": "J.R.R. Tolkien",
    "isbn": "9788491052130",
    "observations": "Edición de lujo - Español",
    "price": 25000,
    "stock": 7,
    "genre": "Fantasía",
    "publishedYear": 1954,
    "publisher": "Minotauro",
    "description": "Una épica aventura en la Tierra Media."
}
```
```json
{
    "title": "El padrino",
    "author": "Mario Puzo",
    "isbn": "9788491052048",
    "observations": "Edición tapa blanda - Español",
    "price": 19000,
    "stock": 9,
    "genre": "Novela policíaca",
    "publishedYear": 1969,
    "publisher": "RBA",
    "description": "La historia de la familia Corleone en el mundo del crimen organizado."
}
```
```json

{
    "title": "El exorcista",
    "author": "William Peter Blatty",
    "isbn": "9788491052277",
    "observations": "Edición tapa blanda - Español",
    "price": 20000,
    "stock": 10,
    "genre": "Terror",
    "publishedYear": 1971,
    "publisher": "Grijalbo",
    "description": "Un clásico de terror que explora el exorcismo y la posesión demoníaca."
}
```
```json
{
    "title": "El nombre de la rosa",
    "author": "Umberto Eco",
    "isbn": "9788491052452",
    "observations": "Edición rústica - Español",
    "price": 19000,
    "stock": 10,
    "genre": "Novela histórica",
    "publishedYear": 1980,
    "publisher": "Lumen",
    "description": "Una novela de misterio ambientada en un monasterio medieval."
}
```
```json
{
    "title": "Harry Potter y la piedra filosofal",
    "author": "J.K. Rowling",
    "isbn": "9788491052506",
    "observations": "Edición tapa dura - Español",
    "price": 23000,
    "stock": 15,
    "genre": "Fantasía",
    "publishedYear": 1997,
    "publisher": "Salamandra",
    "description": "El comienzo de la mágica saga de Harry Potter."
}
```
```json
{
    "title": "El código Da Vinci",
    "author": "Dan Brown",
    "isbn": "9788491052017",
    "observations": "Edición rústica - Español",
    "price": 20000,
    "stock": 15,
    "genre": "Misterio",
    "publishedYear": 2003,
    "publisher": "Planeta",
    "description": "Una novela de misterio que combina religión y arte."
}
```
```json
{
    "title": "Cincuenta sombras de Grey",
    "author": "E.L. James",
    "isbn": "9788491052345",
    "observations": "Edición tapa blanda - Español",
    "price": 18000,
    "stock": 20,
    "genre": "Romance",
    "publishedYear": 2011,
    "publisher": "Grijalbo",
    "description": "Una historia romántica y apasionada que cautivó a millones."
}
```

### Frontend
#### Tecnologías
- Vite
- React
- Bulma
- Axios

### Introducción
Este frontend está diseñado para correr e impactar contra la API del backend. Tiene implementadas llegadas a todos los endpoints descriptos anteriormente. Es necesario que esté corriendo el 

### Configuración
Para configurar este proyecto es necesario correr
```
cd library-project/library-project-ui
```
```
npm i
```

Se incluye un archivo `.env.example` para saber cuáles son las variables de entorno necesarias a configurar.
