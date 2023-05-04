import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    try {
        // Connect the client
        await prisma.$connect()
  // ... you will write your Prisma Client queries here
        console.log("Se ha conectado exitosamente a la BD")

  //Crear usuario en BD
  const createUser = await prisma.user.create({
    data:{
        name: "juan carlos",
        lastName: "Ramirez lopez",
        email: "juanramirez1@hotmail.com"

    }

  })

  //listar usuarios en al BD
  const allUsers = await prisma.user.findMany();
  console.log(allUsers)
        
    } catch (error) {
        throw new Error(JSON.stringify(error))
        
    }
  
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })