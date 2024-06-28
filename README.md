Project Setup

1. Clone the repository:
   git clone https://github.com/sagarstha254/Veda.git
   cd Veda

2)Install dependencies
npm install

3)Set up the PostgreSQL database:
Ensure you have PostgreSQL installed and running. Create a new database:
CREATE DATABASE e_commerce;

4)Update the database connection string in the .env file:
DATABASE_URL="postgresql://postgres:test123@localhost:5432/E_Commerce?schema=public"

5. Run the following scripts
   i) To fetch Data: npx ts-node fetchData.ts
   ii) To store/populate postgresql: npx ts-node storeData.ts
   iii) To run the admin: npx ts-node server.ts
