"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("Users", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            name: {
                type: Sequelize.STRING
            },
            email: {
                type: Sequelize.STRING,
                unique: true, // уникальное значение
                allowNull: false // без имейла юзер не может существовать
            },
            password: {
                type: Sequelize.STRING
            },
            createdAt: {
                // allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.fn("NOW") // установленное значение от sql
            },
            updatedAt: {
                // allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.fn("NOW")
            }
        });
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("Users");
    }
};
