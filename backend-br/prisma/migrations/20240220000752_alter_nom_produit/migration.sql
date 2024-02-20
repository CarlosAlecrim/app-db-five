/*
  Warnings:

  - You are about to drop the column `mon` on the `Produit` table. All the data in the column will be lost.
  - Added the required column `nom` to the `Produit` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Produit` DROP COLUMN `mon`,
    ADD COLUMN `nom` VARCHAR(191) NOT NULL;
