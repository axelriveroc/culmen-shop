"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await queryInterface.bulkInsert(
      "Brand_product",
      [
        { brand_id: 1, brand_name: "ansilta" },
        { brand_id: 11, brand_name: "bergans of norway" },
        { brand_id: 4, brand_name: "fjällräven" },
        { brand_id: 5, brand_name: "haglöfs" },
        { brand_id: 6, brand_name: "montane" },
        { brand_id: 10, brand_name: "norrona" },
        { brand_id: 7, brand_name: "rab" },
        { brand_id: 9, brand_name: "salewa" },
        { brand_id: 3, brand_name: "ternua" },
        { brand_id: 2, brand_name: "trangoworld" },
        { brand_id: 8, brand_name: "vaude" },
      ],
      {}
    );

    await queryInterface.bulkInsert("category_product", [
      {
        idcategory_product: 4,
        category: "accesorios",
      },
      {
        idcategory_product: 3,
        category: "hombre",
      },
      {
        idcategory_product: 2,
        category: "mujer",
      },
      {
        idcategory_product: 1,
        category: "niño",
      },
    ]);

    await queryInterface.bulkInsert("clothes_type", [
      {
        id: 2,
        type: "buzo",
      },
      {
        id: 3,
        type: "camisa",
      },
      {
        id: 1,
        type: "campera",
      },
      {
        id: 4,
        type: "chaleco",
      },
      {
        id: 5,
        type: "gorra",
      },
      {
        id: 6,
        type: "lentes",
      },
      {
        id: 7,
        type: "pantalon",
      },
      {
        id: 8,
        type: "remera",
      },
      {
        id: 9,
        type: "zapatillas",
      },
    ]);

    await queryInterface.bulkInsert("contact_user", [
      {
        idcontact_user: 1,
        address: "Sarmiento",
        floor: null,
        number: 580,
        apartment: null,
      },
      {
        idcontact_user: 2,
        address: "Av. Santa Fe",
        floor: 3,
        number: 895,
        apartment: "5",
      },
    ]);

    await queryInterface.bulkInsert("favorite_product", [
        { id: 1, user_id: 4, product_id: 2 },
        { id: 2, user_id: 4, product_id: 4 },
        { id: 25, user_id: 8, product_id: 8 },
        { id: 26, user_id: 8, product_id: 27 },
        { id: 27, user_id: 8, product_id: 3 },
        { id: 30, user_id: 16, product_id: 7 },
        { id: 31, user_id: 16, product_id: 1 },
        { id: 32, user_id: 8, product_id: 29 },
    ]);

    await queryInterface.bulkInsert(
        "image_product",
        [
          { id: 4, image_route: "Camisa-1-H-lateral.jpg" },
          { id: 5, image_route: "Camisa-1-H-reverso.jpg" },
          { id: 6, image_route: "Camisa-1-H.jpg" },
          { id: 7, image_route: "Camisa-2-F-lateral.jpg" },
          { id: 8, image_route: "Camisa-2-F-reverso.jpg" },
          { id: 9, image_route: "Camisa-2-F.jpg" },
          { id: 1, image_route: "Campera-Abrigo-F-lateral.jpg" },
          { id: 2, image_route: "Campera-Abrigo-F-reverso.jpg" },
          { id: 3, image_route: "Campera-Abrigo-F.jpg" },
          { id: 10, image_route: "Campera-Abrigo-H.jpg" },
          { id: 14, image_route: "Campera-Abrigo-lateral-H.jpg" },
          { id: 11, image_route: "Campera-Abrigo-N-lateral.jpg" },
          { id: 12, image_route: "Campera-Abrigo-N-reverso.jpg" },
          { id: 13, image_route: "Campera-Abrigo-N.jpg" },
          { id: 15, image_route: "Campera-Abrigo-reverso-H.jpg" },
          { id: 16, image_route: "Chaleco-N-lateral.jpg" },
          { id: 17, image_route: "Chaleco-N-reverso.jpg" },
          { id: 18, image_route: "Chaleco-N.jpg" },
          { id: 19, image_route: "Gorra-acc-frontal.jpg" },
          { id: 20, image_route: "Gorra-acc.jpg" },
          { id: 45, image_route: "image.png" },
          { id: 46, image_route: "img-1678661662947.png" },
          { id: 47, image_route: "img-1678837601347.png" },
          { id: 48, image_route: "img-1679071722636.png" },
          { id: 49, image_route: "img-1679073315532.png" },
          { id: 50, image_route: "img-1679073666801.png" },
          { id: 51, image_route: "img-1679074662548.png" },
          { id: 52, image_route: "img-1679078985260.png" },
          { id: 53, image_route: "img-1679079826997.png" },
          { id: 54, image_route: "img-1679080758151.png" },
          { id: 55, image_route: "img-1679080896268.png" },
          { id: 56, image_route: "img-1679081529215.png" },
          { id: 57, image_route: "img-1679081618273.png" },
          { id: 58, image_route: "img-1679081646999.png" },
          { id: 59, image_route: "img-1679081651548.png" },
          { id: 60, image_route: "img-1679081978614.png" },
          { id: 61, image_route: "img-1679082202681.png" },
          { id: 62, image_route: "img-1679146659788.png" },
          { id: 63, image_route: "img-1679615024182.png" },
          { id: 64, image_route: "img-1680653876817.png" },
          { id: 65, image_route: "img-1680996796691.png" },
          { id: 66, image_route: "img-1684350904416.png" },
          { id: 67, image_route: "img-1684354709390.png" },
          { id: 68, image_route: "img-1684354927312.png" },
          { id: 69, image_route: "img-1684355175423.png" },
          { id: 70, image_route: "img-1684417119812.jpg" },
          { id: 71, image_route: "img-1684519850262.png" },
          { id: 72, image_route: "img-1684708370945.jpg" },
          { id: 73, image_route: "img-1684708467570.png" },
          { id: 74, image_route: "img-1684711821096.jpg" },
          { id: 75, image_route: "img-1684711861388.png" },
          { id: 76, image_route: "img-1684799679750.jpg" },
          { id: 77, image_route: "img-1685623163446.jpg" },
          { id: 21, image_route: "Lentes-1-Acc-estuche.jpg" },
          { id: 22, image_route: "Lentes-1-Acc.jpg" },
          { id: 23, image_route: "Lentes-2-Acc-estuche.jpg" },
          { id: 24, image_route: "Lentes-2-Acc.jpg" },
          { id: 25, image_route: "Pantalon-1-H.jpg" },
          { id: 26, image_route: "Pantalon-1-lateral-H.jpg" },
          { id: 27, image_route: "Pantalon-1-reverso-H.jpg" },
          { id: 28, image_route: "Pantalon-2-F-lateral.jpg" },
          { id: 29, image_route: "Pantalon-2-F-reverso.jpg" },
          { id: 30, image_route: "Pantalon-2-F.jpg" },
          { id: 31, image_route: "Pantalon-3-N-lateral.jpg" },
          { id: 32, image_route: "Pantalon-3-N-reverso.jpg" },
          { id: 33, image_route: "Pantalon-3-N.jpg" },
          { id: 34, image_route: "Remera-1-F-lateral.jpg" },
          { id: 35, image_route: "Remera-1-F-reverso.jpg" },
          { id: 36, image_route: "Remera-1-F.jpg" },
          { id: 37, image_route: "Remera-1-H-lateral.jpg" },
          { id: 38, image_route: "Remera-1-H-reverso.jpg" },
          { id: 39, image_route: "Remera-1-H.jpg" },
          { id: 40, image_route: "Remera-3-N-reverso.jpg" },
          { id: 41, image_route: "Remera-3-N.jpg" },
          { id: 42, image_route: "Zapas-acc-dif.jpg" },
          { id: 43, image_route: "Zapas-acc-lateral.jpg" },
          { id: 44, image_route: "Zapas-acc.jpg" },
        ],
        {}
    );

    await queryInterface.bulkInsert(
        "other_images",
        [
          {
            id_images: 26,
            image: "Campera-Abrigo-F-lateral.jpg",
            id_product: 1,
          },
          {
            id_images: 27,
            image: "Campera-Abrigo-F-reverso.jpg",
            id_product: 1,
          },
          { id_images: 28, image: "Camisa-1-H-lateral.jpg", id_product: 2 },
          { id_images: 29, image: "Camisa-1-H-reverso.jpg", id_product: 2 },
          {
            id_images: 30,
            image: "Campera-Abrigo-lateral-H.jpg",
            id_product: 4,
          },
          {
            id_images: 31,
            image: "Campera-Abrigo-reverso-H.jpg",
            id_product: 4,
          },
          { id_images: 32, image: "Chaleco-N-lateral.jpg", id_product: 6 },
          { id_images: 33, image: "Chaleco-N-reverso.jpg", id_product: 6 },
          { id_images: 34, image: "Gorra-acc-frontal.jpg", id_product: 7 },
          { id_images: 35, image: "Lentes-1-Acc-estuche.jpg", id_product: 8 },
          { id_images: 36, image: "Lentes-1-Acc.jpg", id_product: 8 },
          { id_images: 37, image: "Lentes-2-Acc-estuche.jpg", id_product: 9 },
          { id_images: 38, image: "Lentes-2-Acc.jpg", id_product: 9 },
          { id_images: 39, image: "Pantalon-1-H-lateral.jpg", id_product: 10 },
          { id_images: 40, image: "Pantalon-1-reverso-H.jpg", id_product: 10 },
          { id_images: 41, image: "Pantalon-2-F-lateral.jpg", id_product: 11 },
          { id_images: 42, image: "Pantalon-2-F-reverso.jpg", id_product: 11 },
          { id_images: 43, image: "Pantalon-3-N-lateral.jpg", id_product: 12 },
          { id_images: 44, image: "Pantalon-3-N-reverso.jpg", id_product: 12 },
          { id_images: 45, image: "Remera-1-F-lateral.jpg", id_product: 13 },
          { id_images: 46, image: "Remera-1-F-reverso.jpg", id_product: 13 },
          { id_images: 47, image: "Remera-1-H-lateral.jpg", id_product: 14 },
          { id_images: 48, image: "Remera-1-H-reverso.jpg", id_product: 14 },
          { id_images: 49, image: "Zapas-acc-dif.jpg", id_product: 16 },
          { id_images: 50, image: "Zapas-acc-lateral.jpg", id_product: 16 },
          { id_images: 53, image: "img-1678837601385.png", id_product: 18 },
          { id_images: 71, image: "img-1684708370949.png", id_product: 27 },
          { id_images: 72, image: "img-1684708371026.png", id_product: 27 },
          { id_images: 73, image: "img-1684708371066.png", id_product: 27 },
          { id_images: 81, image: "img-1685623163451.jpg", id_product: 29 },
          { id_images: 82, image: "img-1685623163453.jpg", id_product: 29 },
        ],
        {}
    );
    
    await queryInterface.bulkInsert(
  "product",
  [
    { idProduct: 1, category_id: 2, clothes_type_id: 1, waist_id: 1, brand_id: 1, name: 'Campera de abrigo Damas', price: 5890, description: 'Una campera de abrigo para damas diseñada para mantenerte cálida y protegida durante tus aventuras en la montaña. ¡Combina estilo y funcionalidad en cada paso!', stars: 0, image_product_id: 3, discount: 0 },
    { idProduct: 2, category_id: 3, clothes_type_id: 3, waist_id: 1, brand_id: 1, name: 'Camisa salidora Hombres', price: 3890, description: 'Una elegante camisa salidora para hombres, perfecta para lucirte en tus excursiones. Su diseño resistente y cómodo te mantendrá fresco en todo momento.', stars: 0, image_product_id: 6, discount: 0 },
    { idProduct: 3, category_id: 2, clothes_type_id: 3, waist_id: 1, brand_id: 1, name: 'Camisa salidora Mujeres', price: 3390, description: 'Una camisa salidora para mujeres, ideal para las amantes de la montaña. Su estilo moderno y tejido duradero te acompañarán en cada travesía.', stars: 0, image_product_id: 9, discount: 0 },
    { idProduct: 4, category_id: 3, clothes_type_id: 1, waist_id: 1, brand_id: 1, name: 'Campera de abrigo Hombres', price: 8390, description: 'Una campera de abrigo resistente para hombres, diseñada para protegerte del frío extremo. Su diseño funcional y moderno te mantendrá abrigado sin renunciar al estilo.', stars: 0, image_product_id: 10, discount: 0 },
    { idProduct: 5, category_id: 1, clothes_type_id: 1, waist_id: 1, brand_id: 1, name: 'Campera de abrigo Niños', price: 6390, description: 'Una campera de abrigo especialmente diseñada para los más pequeños. Mantén a tus niños calientes y cómodos mientras disfrutan de la naturaleza.', stars: 0, image_product_id: 13, discount: 0 },
    { idProduct: 6, category_id: 1, clothes_type_id: 4, waist_id: 1, brand_id: 1, name: 'Chaleco para Niños', price: 6390, description: 'Un chaleco para niños perfecto para añadir una capa extra de calidez en sus aventuras al aire libre. Su diseño práctico y ajustable los mantendrá cómodos todo el día.', stars: 0, image_product_id: 18, discount: 0 },
    { idProduct: 7, category_id: 4, clothes_type_id: 5, waist_id: 1, brand_id: 1, name: 'Gorra deportiva', price: 3190, description: 'Una gorra deportiva imprescindible para protegerte del sol mientras practicas tus actividades favoritas en la montaña. Combina estilo y protección en un solo accesorio.', stars: 0, image_product_id: 20, discount: 0 },
    { idProduct: 8, category_id: 4, clothes_type_id: 6, waist_id: 1, brand_id: 1, name: 'Lentes 1', price: 3190, description: 'Estos lentes de alta calidad no solo te protegerán de los rayos UV, sino que también te brindarán una visión clara y nítida en tus actividades al aire libre.', stars: 0, image_product_id: 22, discount: 0 },
    { idProduct: 9, category_id: 4, clothes_type_id: 6, waist_id: 1, brand_id: 1, name: 'Lentes 2', price: 3190, description: 'Descubre el mundo con estos modernos lentes diseñados para ofrecerte una visión panorámica y una protección óptima. El complemento perfecto para tus aventuras.', stars: 0, image_product_id: 24, discount: 0 },
    { idProduct: 10, category_id: 3, clothes_type_id: 7, waist_id: 1, brand_id: 1, name: 'Pantalon Hombre', price: 4190, description: 'Un pantalón duradero y resistente para hombres, ideal para tus actividades al aire libre. Su diseño ergonómico y tejido de calidad te brindarán comodidad y estilo.', stars: 0, image_product_id: 25, discount: 0 },
    { idProduct: 11, category_id: 2, clothes_type_id: 7, waist_id: 1, brand_id: 1, name: 'Pantalon Femenino', price: 4190, description: 'Un pantalón femenino diseñado para las amantes de la montaña. Combina funcionalidad y moda en cada paso. ¡Disfruta de la comodidad sin sacrificar el estilo!', stars: 0, image_product_id: 30, discount: 0 },
    { idProduct: 12, category_id: 1, clothes_type_id: 7, waist_id: 1, brand_id: 1, name: 'Pantalon Niños', price: 4190, description: 'Un pantalón para niños que los mantendrá cómodos y protegidos durante sus aventuras al aire libre. Diseñado pensando en su libertad de movimiento y durabilidad.', stars: 0, image_product_id: 33, discount: 0 },
    { idProduct: 13, category_id: 2, clothes_type_id: 8, waist_id: 1, brand_id: 1, name: 'Remera femenina', price: 4090, description: 'Una remera femenina de alta calidad, perfecta para tus actividades en la montaña. Su diseño transpirable y ajuste cómodo te mantendrán fresca en todo momento.', stars: 0, image_product_id: 36, discount: 0 },
    { idProduct: 14, category_id: 3, clothes_type_id: 8, waist_id: 1, brand_id: 1, name: 'Remera masculina', price: 4090, description: 'Una remera masculina diseñada para los amantes de la montaña . Combina estilo y rendimiento en cada aventura. ¡Siéntete cómodo y seguro en todo momento!', stars: 0, image_product_id: 39, discount: 0 },
    { idProduct: 15, category_id: 1, clothes_type_id: 8, waist_id: 1, brand_id: 1, name: 'Remera Niños', price: 4090, description: 'Una remera para niños diseñada para acompañarlos en sus exploraciones al aire libre. Su suave tejido y ajuste cómodo les brindarán libertad de movimiento mientras disfrutan de la naturaleza y se divierten al máximo.', stars: 0, image_product_id: 41, discount: 0 },
    { idProduct: 16, category_id: 4, clothes_type_id: 9, waist_id: 1, brand_id: 1, name: 'Zapatillas', price: 7390, description: 'Descubre la combinación perfecta de estilo y rendimiento con estas zapatillas diseñadas para tus aventuras al aire libre. Su suela resistente y amortiguación óptima te brindarán comodidad en cada paso.', stars: 0, image_product_id: 44, discount: 0 },
    { idProduct: 18, category_id: 3, clothes_type_id: 3, waist_id: 2, brand_id: 1, name: 'PRODUCTO 222', price: 3232, description: 'asdasd', stars: 0, image_product_id: 47, discount: 0 },
    { idProduct: 27, category_id: 2, clothes_type_id: 1, waist_id: 5, brand_id: 6, name: 'Campera Hombre Mujer color roja', price: 21036, description: 'Campera de abrigo, muy liviana, ideal para actividades de montaña y zonas urbanas. Especialmente diseñada para adaptarse al cuerpo, mejorando el ajuste y la eficiencia térmica. Tejido Pertex® Quantum. Relleno de plumón ALLIED® 800 FP.', stars: 0, image_product_id: 72, discount: 0 },
    { idProduct: 29, category_id: 3, clothes_type_id: 2, waist_id: 2, brand_id: 11, name: 'Campera', price: 5455, description: 'Camperra copada para el proyecto', stars: 0, image_product_id: 77, discount: 0 },
    ]);

    await queryInterface.bulkInsert(
      "sale_by_product",
      [
        {
          sale_by_user_id: 1,
          Product_idProduct: 1,
          quantity: 1,
          unit_price: 5890,
          id: 1,
        },
        {
          sale_by_user_id: 2,
          Product_idProduct: 1,
          quantity: 1,
          unit_price: 7000,
          id: 2,
        },
      ],
      {}
    );

    await queryInterface.bulkInsert(
      "sale_by_user",
      [
        {
          id: 1,
          user_id: 4,
          detalle: "detalle de user_has_detalle_venta",
          numero_factura: "asa556asasdas8a6",
        },
        { id: 2, user_id: 3, detalle: "sasasa", numero_factura: "asa55sa" },
      ],
      {}
    );

    await queryInterface.bulkInsert(
      "ubication_user",
      [
        {
          idubication_user: 1,
          city: "Albani",
          "state/province": "New York",
          country: "USA",
          postal_code: "8621",
        },
        {
          idubication_user: 2,
          city: "Capital Federal",
          "state/province": "Buenos Aires",
          country: "Argentina",
          postal_code: "2000",
        },
        {
          idubication_user: 3,
          city: null,
          "state/province": null,
          country: null,
          postal_code: null,
        },
      ],
      {}
    );

    await queryInterface.bulkInsert(
  "user",
  [
    { iduser: 1, name: 'Marcos', last_name: 'Gomez', email: 'jesusMarcosgomez@example.com', password: 'password12333', avatar: 'imagenUsuario.png', is_admin: 0, contact_user: 2, ubication_user: 2 },
    { iduser: 2, name: 'Juan', last_name: 'Pérez', email: 'juanperez@example.com', password: 'password123', avatar: 'imagenUsuario.png', is_admin: 0, contact_user: 1, ubication_user: 1 },
    { iduser: 3, name: 'Jesus', last_name: 'Gomez', email: 'jesusgomez@example.com', password: 'password12333', avatar: 'imagenUsuario.png', is_admin: 0, contact_user: 2, ubication_user: 2 },
    { iduser: 4, name: 'Axel', last_name: 'Rivero', email: 'axel@gmail.com', password: 'Axel1234', avatar: 'avatar-1676074150283.png', is_admin: 1, contact_user: 2, ubication_user: 2 },
    { iduser: 5, name: 'jorge', last_name: 'mora', email: 'jorge@mora.com', password: 'JorgeMora1234', avatar: 'avatar-1679176865224.png', is_admin: 0, contact_user: null, ubication_user: null },
    { iduser: 8, name: 'Hash Super', last_name: 'Ketchup recargado', email: 'hash@hash.com', password: '$2a$10$6rWwuAxA0oXDLQ/dfKsNC.A1ksW.gs8A6gbq0kznBhRtwtZFxvSSm', avatar: 'avatar-1683158724563.png', is_admin: 0, contact_user: null, ubication_user: null },
    { iduser: 9, name: 'CHATGPT', last_name: 'MARTINEZ', email: 'culmen@cito.com', password: '$2a$10$81/uvAMioDKZroLDauE.yeohGhThWoXKMBYR/xMpEHUU/8PgmlK/a', avatar: 'avatar-1683159220906.png', is_admin: 0, contact_user: null, ubication_user: null },
    { iduser: 10, name: 'Axel', last_name: 'Rivero coronel', email: 'Riverocoronelaxel1@gmail.com', password: '$2a$10$PWLGPRfJK.vtDvGUXk2VDupSgbQHFWjKaInpkmJCT6Mek8LC6Pwbi', avatar: 'avatar-1684164454459.png', is_admin: 0, contact_user: null, ubication_user: null },
    { iduser: 16, name: 'Lionel', last_name: 'Messi', email: 'messi@gmail.com', password: '$2a$10$KtgTf0mKkdgVcATCQNrs2Oqn2jiE/GYOy081mIKZIjp/dVR0xNJD.', avatar: 'avatar-1684786866897.jpg', is_admin: 0, contact_user: null, ubication_user: null }
        ],
        {}
    );

    await queryInterface.bulkInsert(
          "waist",
          [
            { id: 4, waist: "l" },
            { id: 3, waist: "m" },
            { id: 2, waist: "s" },
            { id: 5, waist: "xl" },
            { id: 1, waist: "xs" },
            { id: 6, waist: "xxl" },
            { id: 7, waist: "xxxl" },
          ],
          {}
    );

    


  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete("brand_product", null, {});
     /*await queryInterface.bulkDelete("Category_product", null, {});
    await queryInterface.bulkDelete('Clothes_type', null, {});
    await queryInterface.bulkDelete("Contact_user", null, {});
    await queryInterface.bulkDelete("Favorite_product", null, {});
    await queryInterface.bulkDelete("Image_product", null, {});
    await queryInterface.bulkDelete("Other_images", null, {});
    await queryInterface.bulkDelete("Product", null, {});
    await queryInterface.bulkDelete("Sale_by_product", null, {});
    await queryInterface.bulkDelete("Sale_by_user", null, {});
    await queryInterface.bulkDelete("Ubication_user", null, {});
    await queryInterface.bulkDelete("User", null, {});
    await queryInterface.bulkDelete("Waist", null, {}); */



  },
};
