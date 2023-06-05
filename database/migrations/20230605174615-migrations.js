'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
      await queryInterface.createTable("brand_product", {
        brand_id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        brand_name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
      });

      await queryInterface.createTable("category_product", {
         idcategory_product: {
           type: Sequelize.INTEGER,
           primaryKey: true,
           autoIncrement: true,
         },
         category: {
           type: Sequelize.STRING,
           allowNull: false,
         },
      });

      await queryInterface.createTable("clothes_type", {
         id: {
           type: Sequelize.INTEGER,
           primaryKey: true,
           autoIncrement: true,
         },
         type: {
           type: Sequelize.STRING,
           allowNull: false,
         },
      });

      await queryInterface.createTable("contact_user", {
         idcontact_user: {
           type: Sequelize.INTEGER,
           primaryKey: true,
           autoIncrement: true,
           allowNull: false,
         },
         address: {
           type: Sequelize.STRING(100),
           allowNull: false,
         },
         floor: {
           type: Sequelize.SMALLINT,
           allowNull: true,
         },
         number: {
           type: Sequelize.SMALLINT,
           allowNull: true,
         },
         apartment: {
           type: Sequelize.STRING,
           allowNull: true,
         },
      });

      await queryInterface.createTable("favorite_product", {
            id: {
              type: Sequelize.INTEGER,
              primaryKey: true,
              autoIncrement: true,
              allowNull: false,
            },
            user_id: {
              type: Sequelize.INTEGER,
              allowNull: false,
              references: {
                model: "user",
                key: "iduser",
              },
            },
            product_id: {
              type: Sequelize.INTEGER,
              allowNull: false,
              references: {
                model: "Product",
                key: "idProduct",
              },
            },
      });

      await queryInterface.createTable("image_product", {
         id: {
           type: Sequelize.INTEGER,
           primaryKey: true,
           autoIncrement: true,
           allowNull: false,
         },
         image_route: {
           type: Sequelize.STRING,
           allowNull: false,
         },
      });

      await queryInterface.createTable("other_images", {
         id_images: {
           type: Sequelize.INTEGER,
           primaryKey: true,
           autoIncrement: true,
           allowNull: false,
         },
         image: {
           type: Sequelize.STRING,
           allowNull: false,
           defaultValue: "image.png",
         },
         id_product: {
           type: Sequelize.INTEGER,
           allowNull: false,
           references: {
             model: "product",
             key: "idProduct",
           },
           onDelete: "CASCADE",
         },
      });

      await queryInterface.createTable("Product", {
           idProduct: {
             type: Sequelize.INTEGER,
             primaryKey: true,
             autoIncrement: true,
             allowNull: false,
           },
           discount: {
             type: Sequelize.INTEGER,
           },
           stars: {
             type: Sequelize.INTEGER,
           },
           description: {
             type: Sequelize.TEXT,
             length: 1000,
           },
           price: {
             type: Sequelize.INTEGER,
             allowNull: false,
           },
           name: {
             type: Sequelize.STRING,
             allowNull: false,
           },
           image_product_id: {
             type: Sequelize.INTEGER,
             allowNull: false,
             references: {
               model: "image_product",
               key: "id",
             },
           },
           brand_id: {
             type: Sequelize.INTEGER,
             allowNull: false,
             references: {
               model: "brand_product",
               key: "brand_id",
             },
           },
           waist_id: {
             type: Sequelize.INTEGER,
             allowNull: false,
             references: {
               model: "waist",
               key: "id",
             },
           },
           clothes_type_id: {
             type: Sequelize.INTEGER,
             allowNull: false,
             references: {
               model: "clothes_type",
               key: "id",
             },
           },
           category_id: {
             type: Sequelize.INTEGER,
             allowNull: false,
             references: {
               model: "category_product",
               key: "idcategory_product",
             },
           },
      });

      await queryInterface.createTable("sale_by_product", {
         id: {
           type: Sequelize.INTEGER,
           primaryKey: true,
           autoIncrement: true,
           allowNull: false,
         },
         sale_by_user_id: {
           type: Sequelize.INTEGER,
           allowNull: false,
           references: {
             model: "sale_by_user",
             key: "id",
           },
         },
         Product_idProduct: {
           type: Sequelize.INTEGER,
           allowNull: false,
           references: {
             model: "Product",
             key: "idProduct",
           },
         },
         quantity: {
           type: Sequelize.INTEGER,
           allowNull: false,
         },
         unit_price: {
           type: Sequelize.INTEGER,
           allowNull: false,
         },
      });

      await queryInterface.createTable("sale_by_user", {
           id: {
             type: Sequelize.INTEGER,
             primaryKey: true,
             autoIncrement: true,
             allowNull: false,
           },
           user_id: {
             type: Sequelize.INTEGER,
             allowNull: false,
             references: {
               model: "user",
               key: "iduser",
             },
           },
           numero_factura: {
             type: Sequelize.STRING,
             allowNull: false,
           },
           detalle: {
             type: Sequelize.STRING,
           },
      });

      await queryInterface.createTable("ubication_user", {
           idubication_user: {
             type: Sequelize.INTEGER,
             primaryKey: true,
             autoIncrement: true,
             allowNull: false,
           },
           city: {
             type: Sequelize.STRING,
           },
           "state/province": {
             type: Sequelize.STRING,
             field: "`state/province`",
           },
           country: {
             type: Sequelize.STRING,
           },
           postal_code: {
             type: Sequelize.STRING,
           },
      });

      await queryInterface.createTable("user", {
           iduser: {
             type: DataTypes.INTEGER,
             primaryKey: true,
             autoIncrement: true,
           },
           name: {
             type: DataTypes.STRING(45),
             allowNull: false,
           },
           last_name: {
             type: DataTypes.STRING(45),
             allowNull: false,
           },
           email: {
             type: DataTypes.STRING(45),
             allowNull: false,
             unique: true,
           },
           password: {
             type: DataTypes.STRING(100),
             allowNull: false,
           },
           avatar: {
             type: DataTypes.STRING(100),
             allowNull: false,
           },
           is_admin: {
             type: DataTypes.TINYINT(1),
             allowNull: false,
           },
           contact_user: {
             type: DataTypes.INTEGER,
             allowNull: true,
             references: {
               model: "contact_user",
               key: "idcontact_user",
             },
           },
           ubication_user: {
             type: DataTypes.INTEGER,
             allowNull: true,
             references: {
               model: "ubication_user",
               key: "idubication_user",
             },
           },
           createdAt: {
             type: DataTypes.DATE,
             allowNull: false,
           },
           updatedAt: {
             type: DataTypes.DATE,
             allowNull: false,
           },
           deletedAt: {
             type: DataTypes.DATE,
             allowNull: true,
           },
      });

      await queryInterface.addConstraint("user", {
           type: "foreign key",
           fields: ["contact_user"],
           references: {
             table: "contact_user",
             field: "idcontact_user",
           },
           onDelete: "SET NULL",
           onUpdate: "CASCADE",
      });

      await queryInterface.addConstraint("user", {
           type: "foreign key",
           fields: ["ubication_user"],
           references: {
             table: "ubication_user",
             field: "idubication_user",
           },
           onDelete: "SET NULL",
           onUpdate: "CASCADE",
      });

      await queryInterface.createTable("waist", {
         id: {
           type: Sequelize.INTEGER,
           primaryKey: true,
           autoIncrement: true,
         },
         waist: {
           type: Sequelize.STRING,
           allowNull: false,
         },
      });



  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */

    await queryInterface.dropTable("Brand_product");

  }
};
