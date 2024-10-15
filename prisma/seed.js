import prisma from '../prismaClient.js'
import bcryptUtil from '../util/bcrypt.js'

async function seedDatabase() {
  const hashedPassword = await bcryptUtil.hashText('hoangnm40')
  await prisma.user.upsert({
    where: { email: 'mihhoangoffical@gmail.com'},
    update: {},
    create: {
        email: 'minhhoangoffical@gmail.com',
        hashedPassword: hashedPassword,
        name: 'hoangnm',
      }
    })
}

seedDatabase()
  .then(() => {
    console.log('Database seeded successfully');
    prisma.$disconnect();
  })
  .catch((error) => {
    console.error('Error seeding database:', error);
    prisma.$disconnect();
  });
