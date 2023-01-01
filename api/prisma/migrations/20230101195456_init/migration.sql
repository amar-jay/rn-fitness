/*
  Warnings:

  - You are about to drop the column `bio` on the `Profile` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `Profile` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id,name]` on the table `Profile` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `name` to the `Profile` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_profileId_fkey";

-- AlterTable
ALTER TABLE "Profile" DROP COLUMN "bio",
ADD COLUMN     "name" TEXT NOT NULL,
ALTER COLUMN "userId" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "bio" TEXT,
ADD COLUMN     "goalId" INTEGER,
ALTER COLUMN "name" DROP NOT NULL;

-- CreateTable
CREATE TABLE "Routine" (
    "id" SERIAL NOT NULL,
    "routine_name" TEXT NOT NULL,
    "routine_description" TEXT NOT NULL,
    "routine_time" TEXT NOT NULL,
    "routine_level" TEXT NOT NULL,
    "routine_image" TEXT NOT NULL,
    "routine_difficulty" TEXT NOT NULL,
    "userId" INTEGER,

    CONSTRAINT "Routine_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Exercise" (
    "id" SERIAL NOT NULL,
    "exercise_name" TEXT NOT NULL,
    "exercise_image" TEXT NOT NULL,
    "exercise_video" TEXT,
    "exercise_sets" INTEGER NOT NULL,
    "exercise_reps" INTEGER NOT NULL,
    "exercise_weight" INTEGER NOT NULL,
    "exercise_rest" INTEGER NOT NULL,
    "routineId" INTEGER NOT NULL,

    CONSTRAINT "Exercise_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Goal" (
    "id" SERIAL NOT NULL,
    "goal_weight" INTEGER NOT NULL,
    "start_date" TIMESTAMP(3) NOT NULL,
    "end_date" TIMESTAMP(3) NOT NULL,
    "goal_type" TEXT NOT NULL,
    "userId" INTEGER,

    CONSTRAINT "Goal_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Profile_name_key" ON "Profile"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Profile_id_name_key" ON "Profile"("id", "name");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_profileId_name_fkey" FOREIGN KEY ("profileId", "name") REFERENCES "Profile"("id", "name") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_goalId_fkey" FOREIGN KEY ("goalId") REFERENCES "Goal"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Routine" ADD CONSTRAINT "Routine_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Exercise" ADD CONSTRAINT "Exercise_routineId_fkey" FOREIGN KEY ("routineId") REFERENCES "Routine"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
