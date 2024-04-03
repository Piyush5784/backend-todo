## Commands to initialize

# Initialize a new npm project with default settings
``
npm init -y
``
# Install required dependencies for Prisma with TypeScript
``
npm install prisma typescript ts-node @types/node --save-dev
``
# Initialize TypeScript configuration
``
npx tsc --init
``
#### Change the 'rootDir' setting to 'src'
#### Change the 'outDir' setting to 'dist'

# Initialize Prisma configuration
``
npx prisma init
``

# Run a PostgreSQL Docker container
``
docker run -e POSTGRES_PASSWORD=<your_pass> -d -p 5432:5432 postgres 
``
### Make sure you change the environment string with your Docker string

# Apply migrations to set up the database schema
``
npx prisma migrate dev --name Initialize the schema
``

# Explore the database using bash mode
``
docker exec -it <containerName> bash
``
# Access PostgreSQL using psql client
``
psql -h localhost -d postgres -U postgres 
``
