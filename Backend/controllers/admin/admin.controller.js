// const { HttpStatus, CustomMessages } = require("../../helper/statusCode");
const Response = require("../../helper/response");
const { Op, Sequelize, where, json } = require("sequelize");
const helpers = require("../../helper/function");
const User = require("../../models/user/User");
const path = require("path");
const bcrypt = require("bcrypt");
const ejs = require("ejs");
const Product = require("../../models/product/Product");
const Category = require("../../models/product/Category");
// const ProductImage = require('../../models/product/Product_image')
const uuid = require("uuid").v4;
const { HttpStatus } = require("../../helper/statusCode");
const html_to_pdf = require("html-pdf-node");
const { Parser } = require("@json2csv/plainjs");
const Enquiry = require("../../models/user/Enquiry");
const SubCategory = require("../../models/product/SubCategory");
const DownSubCategory = require("../../models/product/DownSubcategory");

const adminPage = async (req, res) => {
  const { admin } = req.cookies;
  console.log("show login page");
  res.render("login");
};

const adminLogin = async (req, res) => {
  try {
    const { email = "", password } = req.body;
    if (email && password) {
      const user = await User.findOne({
        where: {
          email: email,
          roles: "Admin",
        },
      });

      if (user === null) {
        return res.status(404).send({ status: 404, msg: "Admin not found!" });
      }

      if (user) {
        const auth = await bcrypt.compare(password, user.password);
        if (auth) {
          res.cookie("admin", user);
          res.locals.admin = {
            name: user.name,
            email: user.email,
            id: user.id,
            roles: user.roles,
          };
          console.log("Admin", res.locals.admin);
          res.status(200);
          return res.redirect("/admin/dashboard");
        } else {
          return res.redirect("/admin/login");
        }
      }
    } else {
      return res.redirect("/admin/login");
    }
  } catch (err) {
    console.log(err.message);
    return res.redirect("/admin/login");
  }
};

const showLoginPage = async (req, res) => {
  const { admin } = req.cookies;
  if (typeof admin !== "undefined") {
    let totalUser = await User.count({
      where: {
        userStatus: "Active",
        roles:{
            [Op.ne]:"Admin"
        }
      },
    });
    let totalProduct = await Product.count({
      where: {
        status: true,
      },
    });

    return res.render("dashboard", { admin, totalUser, totalProduct });
  } else {
    return res.redirect("/admin/login");
  }
};

const unreadCounters = async (req, res) => {
  try {
    // let feedbackCount = await Feedback.count({});
    // let contactUsCount = await ContactUs.count({
    //   where: {
    //     isRead: "true",
    //   },
    // });
    // let orderCounter = await Order.count({
    //   where: {
    //     readStatus: false,
    //   },
    // });
    const response = {
      feedbackCount:  0,
      contactUsCount:  0,
      orderCounter:  0,
    };

    return res
      .status(HttpStatus.OK.code)
      .send(new Response(true, `${HttpStatus.OK.message}`, response));
  } catch (error) {
    console.log(error);
  }
};

const allProducts = async (req, res) => {
  try {
    const { admin } = req.cookies;
    let products = await Product.findAll({});
    for (let i = 0; i < products.length; i++) {
      let category = await Category.findOne({
        where: {
          id: products[i].categoryId,
        },
        attributes: ["name"],
      });
      products[i].setDataValue("category", category);
    }
    // return res.send(products);
    return res.render("products", { products: products, admin: admin });
    return res.redirect("/admin/products");
  } catch (error) {
    console.log(error);
    return res.render("products");
  }
};

const addItem = async (req, res) => {
  try {
    const { admin } = req.cookies;
    let title = req.body.title;
    let image = req.files.image[0].filename;
    let coverImg = req.files.cover_image[0].filename;
    let arrayimg = req.files.cover_image.map((file) => file.filename);

    console.log("coverImg", arrayimg);
    for (let i = 0; i < arrayimg.length; i++) {
      console.log("121", arrayimg[i]);
    }
    let isExist = await Product.findOne({
      where: {
        categoryId: parseInt(req.body.category),
      },
    });

    if (isExist) {
      return res.redirect("/admin/products");
    }
    if (req.files.image && !arrayimg.length) {
      console.log("133");
      let addProduct = await Product.create({
        // title:req.body.title,
        categoryId: req.body.category,
        price: req.body.price,
        description: req.body.description,
        image: `products/${image}`,
      });
    } else if (!req.files.image && !req.files.cover_image) {
      console.log("142");
      let addProduct = await Product.create({
        categoryId: req.body.category,
        price: req.body.price,
        description: req.body.description,
      });
    } else {
      console.log("149");
      let addProduct = await Product.create({
        // title:req.body.title,
        categoryId: req.body.category,
        price: req.body.price,
        description: req.body.description,
        image: `products/${image}`,
      });
      for (let i = 0; i < arrayimg.length; i++) {
        console.log("152", arrayimg[i]);
        let addProductImg = await ProductImage.create({
          productId: addProduct.id,
          file: `products/${arrayimg[i]}`,
        });
      }
    }

    let allProducts = await Product.findAll({});
    for (let i = 0; i < allProducts.length; i++) {
      let category = await Category.findOne({
        where: {
          id: allProducts[i].categoryId,
        },
        attributes: ["name"],
      });
      allProducts[i].setDataValue("category", category);
    }
    return res.redirect("/admin/products");
  } catch (error) {
    return console.log(error);
  }
};

const productStatus = async (req, res) => {
  try {
    const { admin } = req.cookies;
    let id = req.params.id;
    if (!id) {
      return res.redirect("/admin/products");
    }

    let product = await Product.findOne({
      where: {
        id: id,
      },
    });
    let productStatus = product.status ? false : true;
    let deleteItem = await product.update({
      status: productStatus,
    });
    return res.redirect("/admin/products");
  } catch (error) {
    console.log(error);
    return res.redirect(req.get("referer"));
  }
};

const singleProduct = async (req, res) => {
  try {
    const { admin } = req.cookies;
    let id = req.params.id;
    if (!id) {
      return res.render("products");
    }
    let product = await Product.findOne({
      where: {
        id: id,
      },
    });

    let category = await Category.findOne({
      where: {
        id: product.categoryId,
      },
      attributes: ["name"],
    });
    let producutAllImg = await ProductImage.findAll({
      where: {
        productId: id,
      },
      attributes: ["id", "productId", "file"],
    });
    product.setDataValue("category", category);

    if (product.discount) {
      let discountAmt = Math.floor(
        (Number(product.price) * Number(product.discount)) / 100
      );
      let discountedPrice = Number(product.price) - Number(discountAmt);
      product.setDataValue("dicountedPrice", discountedPrice);
    }

    // return res.send(product)
    return res.render("product", {
      admin,
      product: product,
      producutAllImg: producutAllImg,
    });
  } catch (error) {
    console.log(error);
    return res.redirect(req.get("referer"));
    // return res.render('product', { admin })
  }
};

const editProduct = async (req, res) => {
  try {
    const { admin } = req.cookies;
    console.log("category", req.body.category);
    let isExist = await Product.findOne({
      where: {
        categoryId: Number(req.body.category),
      },
    });

    console.log("212 Exist", isExist);
    if (isExist) {
      console.log("280");

      if (req.file) {
        const editProduct = await Product.update(
          {
            categoryId: req.body.category,
            price: req.body.price,
            description: req.body.description,
            discount: req.body.discountedPrice,
            image: `products/${req.file.filename}`,
          },
          {
            where: {
              id: parseInt(req.params.id),
            },
          }
        );
      } else {
        await Product.update(
          {
            categoryId: req.body.category,
            price: req.body.price,
            description: req.body.description,
            discount: req.body.discountedPrice,
          },
          {
            where: {
              id: parseInt(req.params.id),
            },
          }
        );
      }
    } else {
      console.log("else");
      return res.redirect("/admin/products");
    }

    let allProducts = await Product.findAll({});
    for (let i = 0; i < allProducts.length; i++) {
      let category = await Category.findOne({
        where: {
          id: allProducts[i].categoryId,
        },
        attributes: ["name"],
      });
      allProducts[i].setDataValue("category", category);
    }
    return res.redirect("/admin/products");
  } catch (error) {
    console.log(error);
    return res.redirect(req.get("referer"));
  }
};

const showEditText = async (req, res) => {
  try {
    const { admin } = req.cookies;
    let id = req.params.id;
    if (!id) {
      return res.redirect("/admin/product");
    }
    let product = await Product.findOne({
      where: {
        id: id,
      },
    });

    let category = await Category.findOne({
      where: {
        id: product.categoryId,
      },
      attributes: ["name"],
    });
    product.setDataValue("category", category);
    console.log(product);
    let allCoveImages = await ProductImage.findAll({
      where: {
        productId: id,
      },
      attributes: ["id", "file"],
    });
    return res.render("editProduct", { product, admin, allCoveImages });
  } catch (error) {
    console.log(error);
    return res.redirect("/admin/product");
  }
};

// ADD IMAGE
const addProductImage = async (req, res) => {
  try {
    console.log("450", "----------------------->>>>>>>>>>>>>>>>>>>>>>>>>>>>");
    let arrayimg = req.files.cover_image.map((file) => file.filename);
    // let productImg = `products/${req.file.filename}`;
    let productId = req.params.id;
    // console.log("286", productImg, productId);
    if (!productId && !arrayimg) {
      console.log("ProductId and productImg are required");
    }
    // let uploadFile = await ProductImage.create({
    //     productId: productId,
    //     file: productImg
    // })

    for (let i = 0; i < arrayimg.length; i++) {
      console.log("152", arrayimg[i]);
      await ProductImage.create({
        productId: productId,
        file: `products/${arrayimg[i]}`,
      });
    }

    if (!uploadFile) {
      return res.redirect(req.get("referer"));
    }
    return res.redirect(req.get("referer"));
  } catch (error) {
    console.log(error);
    return res.redirect(req.get("referer"));
  }
};

// DELETE PRODUCT IMAGE
const deleteProductImage = async (req, res) => {
  try {
    // let {productId} = req.body;
    let productId = req.params.id;
    if (!productId) {
      console.log("ProductId  are required");
    }

    let removeImage = await ProductImage.destroy({
      where: {
        id: productId,
      },
    });
    if (!removeImage) {
      return res.redirect(req.get("referer"));
    }
    return res.redirect(req.get("referer"));
  } catch (error) {
    console.log(error);
    return res.redirect(req.get("referer"));
  }
};

//UPDATE PRODUCT IMAGE
const updateProductImage = async (req, res) => {
  try {
    // let {productId, productImg} = req.body;
    let productImg = `products/${req.file.filename}`;
    let productId = req.params.id;
    if (!productId && !productImg) {
      console.log("ProductId and productImg are required");
    }
    let img = await ProductImage.findOne({
      where: {
        productId: productId,
      },
    });
    console.log("349", img);
    let uploadFile = await img.update({
      file: productImg,
    });

    if (!uploadFile) {
      return res.redirect(req.get("referer"));
    }
    return res.redirect(req.get("referer"));
  } catch (error) {
    console.log(error);
    return res.redirect(req.get("referer"));
  }
};

// =============================== USER ==============================================
const allUser = async (req, res) => {
  try {
    const { admin } = req.cookies;
    let users = await User.findAll({
      where: {
        roles: {
            [Op.ne]: "Admin",
        }
      },
    });
    return res.render("users", { users, admin });
  } catch (error) {
    console.log(error);
    return res.redirect(req.get("referer"));
  }
};

const userFamilyMembers = async (req, res) => {
  try {
    const { admin } = req.cookies;
    let userId = req.params.userId;
    console.log(userId);
    let members = await QrMember.findAll({
      where: {
        userId: Number(userId),
      },
      include: [
        {
          model: User,
          as: "memberDetails",
          // attributes:['id', 'fullName', 'email', 'mobileNumber','']
        },
      ],
    });
    let users = [];
    for (let i = 0; i < members.length; i++) {
      let usersData = {
        id: members[i].memberDetails.id,
        fullName: members[i].memberDetails.fullName,
        mobileNumber: members[i].memberDetails.mobileNumber,
        email: members[i].memberDetails.email,
        userStatus: members[i].memberDetails.userStatus,
        createdAt: members[i].memberDetails.createdAt,
      };

      users.push(usersData);
    }

    // return res.send(users)
    return res.render("users", { users, admin });
  } catch (error) {
    console.log(error);
    return res.redirect(req.get("referer"));
  }
};

const userAllQr = async (req, res) => {
  try {
    const { admin } = req.cookies;
    let userId = req.params.userId;
    console.log("560 userId", userId);
    let qr = await OrderQr.findAll({
      where: {
        userId: Number(userId),
      },
      include: [
        {
          model: Category,
          required: false,
        },
      ],
      order: [["id", "DESC"]],
    });

    // console.log("574", qr);

    // return res.send(qr)
    if (qr.length > 0) {
      for (let i = 0; i < qr.length; i++) {
        if (qr[i].itemId) {
          let item = await OrderItem.findOne({
            where: {
              id: Number(qr[i].itemId),
            },
            // attributes: ['membershipId'],
            // required:true
          });

          // return res.send(qr)

          if (item.membershipId) {
            let activeSubs = await Membership.findOne({
              where: {
                id: Number(item.membershipId),
              },
            });

            if (activeSubs) {
              console.log("598", activeSubs);
              qr[i].setDataValue("activeSubs", activeSubs);
            } else {
              qr[i].setDataValue("activeSubs", "N/A");
            }
          }
        }
      }
    }
    // return res.send(qr)
    return res.render("userQr", { qr, admin });
  } catch (error) {
    console.log(error);
    return res.redirect(req.get("referer"));
  }
};

const user = async (req, res) => {
  try {
    const { admin } = req.cookies;
    let id = req.params.id;
    console.log(id);
    if (!id) {
      return res.redirect(req.get("referer"));
    }
    let user = await User.findOne({
      where: {
        id: id,
      },
    });
   

    return res.render("user", {
      user,
      admin,
    });
  } catch (error) {
    console.log(error);
    return res.redirect(req.get("referer"));
  }
};

const userDeactivate = async (req, res) => {
  try {
    const { admin } = req.cookies;
    let id = req.params.id;
    let user = await User.update(
      {
        userStatus: "Banned",
      },
      {
        where: {
          id: id,
        },
      }
    );
    return res.redirect(req.get("referer"));
  } catch (error) {
    console.log(error);
    return res.redirect(req.get("referer"));
  }
};
const userActivate = async (req, res) => {
  try {
    const { admin } = req.cookies;
    let id = req.params.id;
    let user = await User.update(
      {
        userStatus: "Active",
      },
      {
        where: {
          id: id,
        },
      }
    );
    return res.redirect(req.get("referer"));
  } catch (error) {
    console.log(error);
    return res.redirect(req.get("referer"));
  }
};

const userAllOrder = async (req, res) => {
  try {
    const { admin } = req.cookies;
    let id = req.params.id;
    if (!id) {
      return res.redirect(req.get("referer"));
    }
    let order = await Order.findAll({
      where: {
        userId: Number(id),
      },
      include: [
        {
          model: OrderItem,
          include: [
            {
              model: Product,
              include: [Category],
            },
            {
              model: OrderQr,
              attributes: [
                "id",
                "url",
                "status",
                "orderId",
                "userId",
                "itemId",
              ],
            },
          ],
        },
        {
          model: User,
          attributes: ["id", "fullname", "email", "mobileNumber"],
        },
      ],
    });

    let familyMember = await User.findAll({
      where: {
        familyId: Number(id),
      },
    });

    // return res.send(order)

    return res.render("user_order", { admin, order, familyMember });
  } catch (error) {
    console.log(error);
    return res.redirect(req.get("referer"));
  }
};

// new qr code
// const generateQr = async (req, res) => {
//     try {
//         const { category, qrCodes, uids } = req.body;

//         if (!category || !qrCodes || !uids || qrCodes.length === 0 || uids.length !== qrCodes.length) {
//             return res.status(400).send("Invalid data received.");
//         }

//         // Define prefixes for each category
//         const categoryPrefixes = {
//             1: "DB-", // Doorbell Tag
//             2: "VT-", // Vehicle Tag
//             3: "LT-", // Luggage Tag
//             4: "PT-", // Pet Tag
//             5: "WT-", // Wrist Tag
//             6: "PR-", // Property Tag
//         };

//         // Get the prefix for the given category
//         const prefix = categoryPrefixes[category] || "QR"; // Default to "QR" if no match

//         // Retrieve the highest serial number for the given category
//         const lastOrderQr = await OrderQr.findOne({
//             where: { categoryId: category },
//             order: [["id", "DESC"]],
//         });

//         // Start serial numbers from the last recorded value
//         let currentSerialNumber = lastOrderQr?.serialNumber
//             ? parseInt(lastOrderQr.serialNumber.slice(prefix.length), 10)
//             : 0;

//         // Generate URLs and check for duplicates in a single batch query
//         const urls = uids.map(uid => `http://scanzureact.dignitech.com/en/qr/${uid}`);
//         const existingQrRecords = await OrderQr.findAll({
//             where: { url: urls },
//             attributes: ["url"],
//         });

//         const existingUrls = new Set(existingQrRecords.map(record => record.url));

//         // Prepare records to insert
//         const recordsToInsert = [];
//         for (let i = 0; i < qrCodes.length; i++) {
//             const url = urls[i];

//             if (existingUrls.has(url)) {
//                 return res.status(400).send(`Duplicate QR detected for UID: ${uids[i]}`);
//             }

//             // Increment the serial number
//             currentSerialNumber++;

//             // Generate the full serial number with prefix
//             const fullSerialNumber = `${prefix}${currentSerialNumber}`; // e.g., "DB1"

//             recordsToInsert.push({
//                 qr: qrCodes[i],
//                 url,
//                 categoryId: category,
//                 serialNumber: fullSerialNumber,
//             });
//         }

//         // Batch insert the records
//         if (recordsToInsert.length > 0) {
//             await OrderQr.bulkCreate(recordsToInsert);
//         }

//         console.log("QR Codes saved successfully.");
//         res.status(200).send("QR Codes generated and saved successfully.");
//     } catch (error) {
//         console.error("Error saving QR codes:", error);
//         res.status(500).send("An error occurred while saving QR codes.");
//     }
// };

const MAX_RETRIES = 3; // Retry attempts for deadlocks

const generateQr = async (req, res) => {
  let attempts = 0;

  while (attempts < MAX_RETRIES) {
    let transaction;

    try {
      const { category, qrCodes, uids } = req.body;

      if (
        !category ||
        !qrCodes ||
        !uids ||
        qrCodes.length === 0 ||
        uids.length !== qrCodes.length
      ) {
        return res.status(400).json({ message: "Invalid data received." });
      }

      // Define category prefixes
      const categoryPrefixes = {
        1: "DB-", // Doorbell Tag
        2: "VT-", // Vehicle Tag
        3: "LT-", // Luggage Tag
        4: "PT-", // Pet Tag
        5: "WT-", // Wrist Tag
        6: "PR-", // Property Tag
      };

      const prefix = categoryPrefixes[category] || "QR"; // Default prefix

      // Start a transaction
      transaction = await OrderQr.sequelize.transaction({
        isolationLevel: Sequelize.Transaction.ISOLATION_LEVELS.SERIALIZABLE,
      });

      // **FIX: Use an Atomic Counter Instead of MAX(serialNumber)**
      const counter = await SerialNumberCounter.findOne({
        where: { categoryId: category },
        transaction,
        lock: transaction.LOCK.UPDATE, //Lock the row for this category
      });

      if (!counter) {
        throw new Error(
          `Serial number counter not found for category ${category}`
        );
      }

      let currentSerialNumber = counter.lastSerialNumber; // Get the last serial number

      // Generate URLs
      const urls = uids.map(
        (uid) => `http://scanzureact.dignitech.com/en/qr/${uid}`
      );

      // Fetch existing records to avoid duplicates
      const existingQrRecords = await OrderQr.findAll({
        where: { url: { [Op.in]: urls } },
        attributes: ["url"],
        transaction,
      });

      const existingUrls = new Set(
        existingQrRecords.map((record) => record.url)
      );

      // Prepare records for insertion, filtering out duplicates
      const recordsToInsert = [];
      for (let i = 0; i < qrCodes.length; i++) {
        const url = urls[i];

        if (existingUrls.has(url)) {
          console.warn(`Skipping duplicate UID: ${uids[i]}`);
          continue; // Skip duplicate records instead of failing
        }

        currentSerialNumber++; // Increment serial number inside transaction
        const fullSerialNumber = `${prefix}${currentSerialNumber}`;

        recordsToInsert.push({
          qr: qrCodes[i],
          url,
          categoryId: category,
          serialNumber: fullSerialNumber,
        });
      }

      // **Update the counter table with the latest serial number**
      await SerialNumberCounter.update(
        { lastSerialNumber: currentSerialNumber },
        { where: { categoryId: category }, transaction }
      );

      // Batch insert valid records
      if (recordsToInsert.length > 0) {
        await OrderQr.bulkCreate(recordsToInsert, { transaction });
      }

      await transaction.commit(); // Commit transaction
      console.log("QR Codes saved successfully.");
      return res
        .status(200)
        .json({ message: "QR Codes generated and saved successfully." });
    } catch (error) {
      if (transaction) {
        try {
          await transaction.rollback();
        } catch (rollbackError) {
          console.error("Rollback failed:", rollbackError);
        }
      }

      // **Retry on Deadlock or Duplicate Serial Number Error**
      if (error?.errno === 1213 || error?.errno === 1062) {
        attempts++;
        console.warn(
          `Database conflict detected, retrying transaction... (${attempts}/${MAX_RETRIES})`
        );
        await new Promise((resolve) => setTimeout(resolve, 200 * attempts)); // Small delay before retry
        continue;
      }

      console.error("Error saving QR codes:", error);
      return res
        .status(500)
        .json({ message: "An error occurred while saving QR codes." });
    }
  }

  // If all retries fail, return an error
  return res
    .status(500)
    .json({ message: "Failed to save QR codes due to database conflict." });
};

const allQr = async (req, res) => {
  try {
    const { admin } = req.cookies;
    let type = req.params.type;
    let categoryId = req.params.categoryId;

    if (type === "Smart-Doorbell") {
      type = "Smart Doorbell";
    } else if (type === "Pet-Tag") {
      type = "Pet Tag";
    } else if (type === "Luggage-Tag") {
      type = "Luggage Tag";
    } else if (type === "Vehicle-Tag") {
      type = "Vehicle Tag";
    } else if (type === "Small-Wrist-Tag") {
      type = "Small Wrist Tag";
    } else if (type === "Property-Tag") {
      type = "Property-Tag";
    }

    let qr = await OrderQr.findAll({
      where: {
        categoryId,
      },
      include: [
        {
          model: Category,
          required: false,
        },
      ],
      order: [["id", "DESC"]],
    });

    if (qr.length > 0) {
      for (let i = 0; i < qr.length; i++) {
        // allocated user
        if (qr[i].userId) {
          let user = await User.findOne({
            where: {
              id: qr[i].userId,
            },
            attributes: ["id", "fullName"],
          });
          qr[i].setDataValue("userFullName", user.fullName);
        } else {
          qr[i].setDataValue("userFullName", null);
        }

        // owner user
        if (qr[i].ownerId) {
          let user = await User.findOne({
            where: {
              id: qr[i].ownerId,
            },
            attributes: ["id", "fullName"],
          });
          qr[i].setDataValue("ownerUserFullName", user.fullName);
        } else {
          qr[i].setDataValue("ownerUserFullName", null);
        }
      }
    }

    //   return res.send(qr)
    console.log("975", type);
    return res.render("qrs", { qr, admin, user, type, categoryId });
  } catch (error) {
    console.log(error);
    return res.redirect(req.get("referer"));
  }
};

const selectQrList = async (req, res) => {
  try {
    // if (!req.params.id) {
    //     res.redirect(req.get('referer'));
    // }
    // let id = req.params.id;
    let qr = await OrderQr.findAll({
      where: {
        // categoryId: id,
        orderId: null,
        userId: null,
        status: false,
      },
      attributes: ["id", "qr", "url"],
    });
    return res.status(200).send(qr);
  } catch (error) {
    console.log(error);
    return res.redirect(req.get("referer"));
  }
};

const deleteQr = async (req, res) => {
  try {
    let id = req.params.id;
    if (!id) {
      return res.redirect(req.get("referer"));
    }
    let qr = await OrderQr.destroy({
      where: {
        id: id,
      },
    });
    return res.redirect(req.get("referer"));
  } catch (error) {
    console.log(error);
    return res.redirect(req.get("referer"));
  }
};

let orderList = async (req, res) => {
  try {
    const { admin } = req.cookies;
    let order = await Order.findAll({
      include: [
        {
          model: OrderItem,
          include: [
            {
              model: Product,
              include: [Category],
            },
          ],
        },
        {
          model: User,
          attributes: ["id", "fullname"],
        },
      ],
      order: [["id", "DESC"]],
    });

    let order_read_status = await Order.update(
      { readStatus: true },
      { where: { readStatus: false } }
    );
    //    return res.send(order)
    return res.render("orders", { order, admin });
  } catch (error) {
    console.log(error);
    return res.redirect(req.get("referer"));
  }
};

const deleteOrder = async (req, res) => {
  try {
    let id = req.params.id;
    if (!id) {
      return res.redirect(req.get("referer"));
    }
    let qr = await Order.destroy({
      where: {
        id: id,
      },
    });
    return res.redirect(req.get("referer"));
  } catch (error) {
    console.log(error);
    return res.redirect(req.get("referer"));
  }
};

const orderDetails = async (req, res) => {
  try {
    const { admin } = req.cookies;
    let id = req.params.id;
    if (!id) {
      return res.redirect(req.get("referer"));
    }
    let order = await Order.findOne({
      where: {
        id: Number(id),
      },
      include: [
        {
          model: OrderItem,
          include: [
            {
              model: Product,
              include: [Category],
            },
            {
              model: OrderQr,
              attributes: [
                "id",
                "url",
                "status",
                "orderId",
                "userId",
                "itemId",
              ],
            },
          ],
        },
        {
          model: User,
          attributes: ["id", "fullname", "email", "mobileNumber"],
        },
      ],
    });
    let address;
    if (order.shippingAddressId) {
      address = await OrderAddress.findOne({
        where: {
          id: order.shippingAddressId,
        },
      });
    } else {
      address = await OrderAddress.findOne({
        where: {
          orderId: order.id,
        },
      });
    }

    if (order?.order_items?.length > 0) {
      for (let i = 0; i < order?.order_items?.length; i++) {
        if (order?.order_items[i].membershipId) {
          let membership = await Membership.findOne({
            where: {
              id: order?.order_items[i].membershipId,
            },
          });
          await order.order_items[i].setDataValue("membership", membership);
        } else {
          await order.order_items[i].setDataValue("membership", "N/A");
        }
      }
    }

    let coupon = await UserCoupon.findOne({
      where: {
        orderId: order.id,
      },
      include: [Coupon],
    });

    // return res.send(address)

    return res.render("order", { admin, order, address, coupon });
  } catch (error) {
    console.log(error);
    return res.redirect(req.get("referer"));
  }
};

const assignQr = async (req, res) => {
  console.log("722");
  try {
    let id = req.body.orderQrId;
    let orderId = req.body.orderId;
    let userId = req.body.userId;
    let itemId = req.body.itemId;
    let categoryId = req.body.categoryId;
    let ownerId = req.body.userId;
    // console.log("728", id, orderId, userId, itemId);
    // console.log("801", categoryId);
    if (!id && !orderId && !userId && !itemId) {
      return res
        .status(400)
        .send({ success: false, message: "something went wrong" });
      // return res.redirect(req.get('referer'));
    }
    let qr = await OrderQr.findOne({
      where: {
        id: Number(id),
        categoryId: Number(categoryId),
      },
    });

    if (qr) {
      let orderItemDetails = await OrderItem.findOne({
        where: {
          id: Number(itemId),
        },
      });
      let info = orderItemDetails.toJSON();
      const updatedQr = await qr.update({
        orderId,
        userId,
        itemId,
        ownerId,
        // categoryId : info.productId,
        dispatch_date: new Date().toLocaleString("en-US", {
          hour12: false,
        }),
      });

      if (updatedQr) {
        return res
          .status(200)
          .send({ success: true, message: "Assignment successful" });
      }
    }

    return res
      .status(400)
      .send({ success: false, message: "something went wrong" });
    // return res.redirect(req.get('referer'));
  } catch (error) {
    console.log(error);
    return res.redirect(req.get("referer"));
  }
};

const unassignQr = async (req, res) => {
  try {
    let id = req.params.id;
    if (!id) {
      return res.redirect(req.get("referer"));
    }

    let qr = await OrderQr.findOne({
      where: {
        id: Number(id),
      },
    });

    if (qr) {
      await qr.update({
        orderId: null,
        userId: null,
        itemId: null,
        dispatch_date: null,
        ownerId: null,
      });
    }

    return res.redirect(req.get("referer"));
  } catch (error) {
    console.log(error);
    return res.redirect(req.get("referer"));
  }
};

const changeOrderDeliveryStatus = async (req, res) => {
  console.log("hit hit");
  try {
    let orderId = req.params.id;
    let status = req.params.status;
    console.log("875", orderId, status);
    let order = await Order.findOne({
      where: {
        id: Number(orderId),
      },
    });

    if (order) {
      await order.update({ orderStatus: status });
    }
    return res.redirect(req.get("referer"));
  } catch (error) {
    console.log(error);
    return res.redirect(req.get("referer"));
  }
};

const orderListExport = async (req, res) => {
  console.log("order listing export....");
  try {
    let order = await Order.findAll({
      include: [
        {
          model: OrderItem,
          include: [
            {
              model: Product,
              include: [Category],
            },
          ],
        },
        {
          model: User,
          attributes: ["id", "fullname"],
        },
      ],
      order: [["id", "DESC"]],
    });

    const rowsData = [];
    let fileName = `${
      new Date().getDate
    }_${new Date().getTime()}_${new Date().getSeconds()}`;

    for (let i = 0; i < order.length; i++) {
      // Format date fields
      const createdAt = new Date(order[i].createdAt);
      const paidAmt = order[i].paidAmt || "N/A";
      const paymentStatus = order[i].paymentStatus || "N/A";
      const orderStatus = order[i].orderStatus || "N/A";

      // Create row object to match the table columns
      const row = {
        "User Id": order[i].userId || "N/A", // Matching with 'User Id' column
        Name: order[i]?.user.dataValues?.fullname || "N/A", // Matching with 'Name' column
        "Order Id": order[i].id || "N/A", // Matching with 'Order Id' column
        Price: paidAmt, // Matching with 'Price' column
        "Payment Status": paymentStatus, // Matching with 'Payment Status' column
        "Order Status": orderStatus, // Matching with 'Order Status' column
        "Created On":
          createdAt.toLocaleString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          }) || "N/A", // Matching with 'Created On' column
      };
      rowsData.push(row);
    }

    // Convert the JSON data to CSV
    const parser = new Parser();
    const csv = parser.parse(rowsData, { flatten: true });

    // Set response headers to download the CSV file
    res.attachment(`order_list_export_${fileName}.csv`);
    return res.send(csv);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: false,
      message:
        error.message || "An unexpected error occurred. Please try again.",
    });
  }
};

const singleQr = async (req, res) => {
  try {
    const { admin } = req.cookies;
    let id = req.params.id;

    if (!id) {
      return res.redirect(req.get("referer"));
    }
    let qr = await OrderQr.findOne({
      where: {
        id: Number(id),
      },
    });
    let user;
    if (qr.userId) {
      user = await User.findOne({
        where: {
          id: qr.userId,
        },
      });
    }
    // return res.send(qr)
    return res.render("qr", { qr, admin, user });
  } catch (error) {
    console.log(error);
    return res.redirect(req.get("referer"));
  }
};

const disableQr = async (req, res) => {
  try {
    let id = req.params.id;
    if (!id) {
      return res.redirect(req.get("referer"));
    }

    let qr = await OrderQr.findOne({
      where: {
        id: Number(id),
      },
    });

    if (qr) {
      await qr.update({
        status: false,
        action_status: "Disabled by admin",
      });
    }

    return res.redirect(req.get("referer"));
  } catch (error) {
    console.log(error);
    return res.redirect(req.get("referer"));
  }
};

const downloadSelectedQr = async (req, res) => {
  try {
    let selectedCheckboxes = req.body.id;
    let arr = selectedCheckboxes;
    let firstHeading = req.body.firstHeading || "";
    const companyHeading = req.body.companyHeading || "";

    if (!arr || arr.length === 0) {
      return res
        .status(400)
        .setHeader("Content-Type", "application/json")
        .json({
          status: 400,
          message: "No QR codes selected.",
        });
    }

    let allQr = await OrderQr.findAll({
      where: { id: { [Op.in]: arr } },
      attributes: ["id", "qr", "type", "categoryId"],
    });

    if (allQr.length === 0) {
      return res
        .status(404)
        .setHeader("Content-Type", "application/json")
        .json({
          status: 404,
          message: "QR codes not found.",
        });
    }

    const firstCategoryId = allQr[0].categoryId;
    const invalidQr = allQr.find((qr) => qr.categoryId !== firstCategoryId);

    if (invalidQr) {
      const category = await Category.findOne({
        where: { id: firstCategoryId, status: true },
        attributes: ["name"],
      });
      return res
        .status(401)
        .setHeader("Content-Type", "application/json")
        .json({
          status: 401,
          message: `Only ${
            category ? category.name : "this category"
          } are allowed.`,
        });
    }

    const category = await Category.findOne({
      where: { id: firstCategoryId, status: true },
      attributes: ["id", "name"],
    });

    // Render template based on categoryId
    let templatePath;
    let totalItemByCategory;
    if (category) {
      switch (category.id) {
        case 1:
          templatePath = "./templates/doorbellTag.ejs"; // Doorbell tag template
          totalItemByCategory = 16;
          break;
        case 2:
          templatePath = "./templates/vehicleTag.ejs"; // Vehicle tag template
          totalItemByCategory = 20;
          break;
        case 3:
          templatePath = "./templates/luggageTag.ejs"; // Luggage tag template
          break;
        case 4:
          templatePath = "./templates/petTag.ejs"; // Pet tag template
          break;
        case 5:
          templatePath = "./templates/wristTag.ejs"; // Wrist tag template
          break;
        case 6:
          templatePath = "./templates/propertyTag.ejs"; // Property tag template
          totalItemByCategory = 96;
          break;
        default:
          return res
            .status(400)
            .setHeader("Content-Type", "application/json")
            .json({
              status: 400,
              message: "Unknown category ID.",
            });
      }
    }

    for (let i = 0; i < allQr.length; i++) {
      allQr[i].downloadedAt = new Date();
      await allQr[i].save();
    }

    const itemsPerPage = totalItemByCategory;
    const paginatedQr = [];
    for (let i = 0; i < allQr.length; i += itemsPerPage) {
      paginatedQr.push(allQr.slice(i, i + itemsPerPage));
    }

    // Render the HTML with pagination
    const templateData = { paginatedQr, firstHeading, companyHeading };
    const invoiceHtml = await ejs.renderFile(templatePath, templateData);

    const options = {
      width: "13in",
      height: "19in",
      margin: "0in",
      printBackground: true,
    };
    const file = { content: invoiceHtml };

    // Generate the PDF buffer
    const pdfBuffer = await html_to_pdf.generatePdf(file, options);

    // Fetch the category name
    const categoryName = category ? category.name : "qrcode";

    // Set the PDF filename based on the category name

    const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
    const fileName = `${categoryName.replace(/\s+/g, "_")}_${timestamp}.pdf`;

    // Set the response headers with the dynamic filename
    res.setHeader("Content-Disposition", `attachment; filename=${fileName}`);
    res.setHeader("Content-Type", "application/pdf");

    // Send the PDF buffer
    return res.send(pdfBuffer);
  } catch (error) {
    console.error("Error in QR download:", error);
    return res.status(500).setHeader("Content-Type", "application/json").json({
      status: 500,
      message: "An unexpected error occurred. Please try again.",
    });
  }
};

const downloadQrByRange = async (req, res) => {
  try {
    let from = Number(req.body.from);
    let to = Number(req.body.to);
    let typeId = Number(req.body.category);
    let firstHeading = req.body.firstHeading || "";
    const companyHeading = req.body.companyHeading || "";

    // Validate required fields
    if (!from || !to || !typeId) {
      return res
        .status(400)
        .send({ status: false, message: "All fields are required" });
    }

    // Ensure proper range regardless of order
    const range = from < to ? [from, to] : [to, from];

    // Render template based on categoryId
    let templatePath;
    let categoryName;
    let totalItemByCategory;
    switch (typeId) {
      case 1:
        templatePath = "./templates/doorbellTag.ejs"; // Doorbell tag template
        categoryName = "Doorbell Tag";
        totalItemByCategory = 16;
        break;
      case 2:
        templatePath = "./templates/vehicleTag.ejs"; // Vehicle tag template
        categoryName = "Vehicle Tag";
        totalItemByCategory = 20;
        break;
      case 3:
        templatePath = "./templates/luggageTag.ejs"; // Luggage tag template
        categoryName = "Luggage Tag";
        break;
      case 4:
        templatePath = "./templates/petTag.ejs"; // Pet tag template
        categoryName = "Pet Tag";
        break;
      case 5:
        templatePath = "./templates/wristTag.ejs"; // Wrist tag template
        categoryName = "Wrist Tag";
        break;
      case 6:
        templatePath = "./templates/propertyTag.ejs"; // Property tag template
        categoryName = "Property Tag";
        totalItemByCategory = 96;
        break;
      default:
        return res
          .status(400)
          .setHeader("Content-Type", "application/json")
          .json({
            status: 400,
            message: "Unknown category ID.",
          });
    }

    // Fetch QR codes within the specified ID range for the category
    let rangeQr = await OrderQr.findAll({
      where: {
        categoryId: typeId,
        id: {
          [Op.between]: range,
        },
      },
      order: [["id", from < to ? "ASC" : "DESC"]], // Adjust order based on direction
      attributes: ["id", "qr", "type", "categoryId", "downloadedAt"],
    });

    if (!rangeQr || rangeQr.length === 0) {
      return res
        .status(404)
        .send({
          status: 404,
          message: "No QR codes found in the specified range.",
        });
    }

    // Update the downloadedAt timestamp for each QR code
    for (let qr of rangeQr) {
      qr.downloadedAt = new Date();
      await qr.save();
    }

    // Paginate the QR cards (20 per page)
    const itemsPerPage = totalItemByCategory;
    const paginatedQr = [];
    for (let i = 0; i < rangeQr.length; i += itemsPerPage) {
      paginatedQr.push(rangeQr.slice(i, i + itemsPerPage));
    }

    // Generate PDF for the range
    const templateData = { paginatedQr, firstHeading, companyHeading };
    const invoiceHtml = await ejs.renderFile(templatePath, templateData);

    const options = {
      width: "13in",
      height: "19in",
      margin: "0in",
      printBackground: true,
    };
    const file = { content: invoiceHtml };

    const pdfBuffer = await html_to_pdf.generatePdf(file, options);
    // console.log("categoryName",categoryName)

    // Generate dynamic PDF file name based on the category name
    const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
    const dynamicFileName = `${categoryName.replace(
      /\s+/g,
      "_"
    )}_${timestamp}.pdf`;

    // console.log("dynamicFilename", dynamicFileName);

    // Send the PDF
    res.setHeader(
      "Content-Disposition",
      `attachment; filename=${dynamicFileName}`
    );
    res.setHeader("Content-Type", "application/pdf");
    return res.send(pdfBuffer);
  } catch (error) {
    console.error("Error in downloadQrByRange:", error);
    return res.status(500).json({
      status: false,
      message:
        error.message || "An unexpected error occurred. Please try again.",
    });
  }
};

// const downloadQrByRange = async (req, res) => {
//     try {
//         let from = Number(req.body.from);
//         let to = Number(req.body.to);
//         let typeId = Number(req.body.category);
//         let firstHeading = req.body.firstHeading || ""
//         const companyHeading = req.body.companyHeading || ""

//         // Validate required fields
//         if (!from || !to || !typeId) {
//             return res.status(400).send({ status: false, message: "All fields are required" });
//         }

//         // Ensure proper range regardless of order
//         const range = from < to ? [from, to] : [to, from];

//         // Render template based on categoryId
//         let templatePath;
//         switch (typeId) {
//             case 1:
//                 templatePath = './templates/doorbellTag.ejs'; // Doorbell tag template
//                 break;
//             case 2:
//                 templatePath = './templates/vehicleTag.ejs'; // Vehicle tag template
//                 break;
//             case 3:
//                 templatePath = './templates/luggageTag.ejs'; // Luggage tag template
//                 break;
//             case 4:
//                 templatePath = './templates/petTag.ejs'; // Pet tag template
//                 break;
//             case 5:
//                 templatePath = './templates/wristTag.ejs'; // Wrist tag template
//                 break;
//             case 6:
//                 templatePath = './templates/propertyTag.ejs'; // Property tag template
//                 break;
//             default:
//                 return res.status(400).setHeader('Content-Type', 'application/json').json({
//                     status: 400,
//                     message: 'Unknown category ID.',
//                 });
//         }

//         // Fetch QR codes within the specified ID range for the category
//         let rangeQr = await OrderQr.findAll({
//             where: {
//                 categoryId: typeId,
//                 id: {
//                     [Op.between]: range
//                 }
//             },
//             order: [['id', from < to ? 'ASC' : 'DESC']], // Adjust order based on direction
//             attributes: ['id', 'qr', 'type', 'categoryId', 'downloadedAt']
//         });

//         if (!rangeQr || rangeQr.length === 0) {
//             return res.status(404).send({ status: 404, message: 'No QR codes found in the specified range.' });
//         }

//         // Update the downloadedAt timestamp for each QR code
//         for (let qr of rangeQr) {
//             qr.downloadedAt = new Date();
//             await qr.save();
//         }

//         // Paginate the QR cards (20 per page)
//         const itemsPerPage = 20;
//         const paginatedQr = [];
//         for (let i = 0; i < rangeQr.length; i += itemsPerPage) {
//             paginatedQr.push(rangeQr.slice(i, i + itemsPerPage));
//         }

//         // Generate PDF for the range
//         const templateData = { paginatedQr, firstHeading, companyHeading };
//         const invoiceHtml = await ejs.renderFile(templatePath, templateData);

//         const options = { width: '13in', height: '19in', margin: '0in', printBackground: true };
//         const file = { content: invoiceHtml };

//         const pdfBuffer = await html_to_pdf.generatePdf(file, options);

//         // Send the PDF
//         res.setHeader('Content-Disposition', 'attachment; filename=qrcode_range.pdf');
//         res.setHeader('Content-Type', 'application/pdf');
//         return res.send(pdfBuffer);

//     } catch (error) {
//         console.error('Error in downloadQrByRange:', error);
//         return res.status(500).json({
//             status: false,
//             message: error.message || 'An unexpected error occurred. Please try again.'
//         });
//     }
// };

const qrListExport = async (req, res) => {
  console.log("qr listing export....");
  try {
    let categoryId = Number(req.query.categoryId);
    console.log("1560->categoryId: " + categoryId);
    let allQr = await OrderQr.findAll({
      where: {
        categoryId,
      },
      include: [
        {
          model: Category,
          required: false,
        },
      ],
    });

    if (allQr.length > 0) {
      for (let i = 0; i < allQr.length; i++) {
        if (allQr[i].userId) {
          let user = await User.findOne({
            where: {
              id: allQr[i].userId,
            },
            attributes: ["id", "fullName"],
          });
          allQr[i].setDataValue("userFullName", user.fullName);
        } else {
          allQr[i].setDataValue("userFullName", null);
        }
      }
    }

    const rowsData = [];

    for (let i = 0; i < allQr.length; i++) {
      // Format date fields
      const reqData = new Date(allQr[i].createdAt);

      const dispatch_date = new Date(allQr[i].dispatch_date); // Assuming 'dispatch_date' is the paid date

      // Create row object to match the table columns
      const row = {
        "SR.no": allQr[i].serialNumber || "N/A", // Matching with 'SR.no' column
        "QR.no": allQr[i].id, // Matching with 'QR.no' column
        Category: allQr[i].category?.name || "N/A", // Matching with 'Category' column
        Url: allQr[i].url || "N/A", // Matching with 'Url' column
        Status: allQr[i].status ? "Active" : "Inactive", // Matching with 'Status' column
        "Created At":
          reqData.toLocaleString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          }) || "N/A", // Matching with 'Created At' column
        "Allocated At": allQr[i]?.dispatch_date
          ? new Date(allQr[i].dispatch_date).toLocaleString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })
          : "N/A", // Matching with 'Allocated At' column
        "Allocated User": allQr[i]?.getDataValue?.userFullName || "N/A", // Assuming you have this field, otherwise use 'N/A'
        "Download At": allQr[i]?.downloadedAt
          ? new Date(allQr[i].downloadedAt).toLocaleString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })
          : "N/A", // Matching with 'Download At' column
        "Download Status": allQr[i]?.downloadedAt ? "Downloaded" : "Pending", // Matching with 'Download Status' column
      };
      rowsData.push(row);
    }

    // Convert the JSON data to CSV
    const parser = new Parser();
    const csv = parser.parse(rowsData, { flatten: true });

    // Set response headers to download the CSV file
    res.attachment(`qr_list_export_${categoryId}.csv`);
    return res.send(csv);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: false,
      message:
        error.message || "An unexpected error occurred. Please try again.",
    });
  }
};

let termCondition = async (req, res) => {
  try {
    const { admin } = req.cookies;
    let id = req.params.id;
    let desc = req.body.description;
    let term = await TermCondition.findOne({
      where: {
        id: Number(id),
      },
    });

    await term.update({
      desc: desc,
    });
    return res.redirect(req.get("referer"));
  } catch (error) {
    console.log(error);
    return res.redirect(req.get("referer"));
  }
};
let getTermCondition = async (req, res) => {
  try {
    const { admin } = req.cookies;
    let id = req.params.id;
    let term = await TermCondition.findOne({
      where: {
        id: Number(id),
      },
    });

    return res.render("termCondition", { admin, term });
  } catch (error) {
    console.log(error);
    return res.redirect(req.get("referer"));
  }
};
let termAndCondition = async (req, res) => {
  try {
    let term = await TermCondition.findOne({});

    term
      ? res
          .status(HttpStatus.OK.code)
          .send(new Response(true, `${HttpStatus.OK.message}`, term))
      : res
          .status(HttpStatus.OK.code)
          .send(
            new Response(
              false,
              `TERM AND CONDITION ${HttpStatus.NOT_FOUND.message}`
            )
          );
  } catch (error) {
    return helpers.validationHandler(res, error);
  }
};

let privacyPolicy = async (req, res) => {
  try {
    const { admin } = req.cookies;
    let desc = req.body.description;
    let id = req.params.id;
    let policy = await PrivacyPolicy.findOne({
      where: {
        id: Number(id),
      },
    });

    await policy.update({
      desc: desc,
    });
    return res.redirect(req.get("referer"));
  } catch (error) {
    console.log(error);
    return res.redirect(req.get("referer"));
  }
};
let getPrivacyPolicy = async (req, res) => {
  try {
    const { admin } = req.cookies;
    let id = req.params.id;
    let policy = await PrivacyPolicy.findOne({
      where: {
        id: Number(id),
      },
    });

    return res.render("privacyPolicy", { admin, policy });
  } catch (error) {
    console.log(error);
    return res.redirect(req.get("referer"));
  }
};
let getPrivacyAndPolicy = async (req, res) => {
  try {
    let policy = await PrivacyPolicy.findOne({});

    policy
      ? res
          .status(HttpStatus.OK.code)
          .send(new Response(true, `${HttpStatus.OK.message}`, policy))
      : res
          .status(HttpStatus.OK.code)
          .send(
            new Response(
              false,
              `PRIVACY POLICY ${HttpStatus.NOT_FOUND.message}`
            )
          );
  } catch (error) {
    return helpers.validationHandler(res, error);
  }
};
let PrivacyPolicyList = async (req, res) => {
  try {
    const { admin } = req.cookies;

    let policy = await PrivacyPolicy.findAll({});

    return res.render("privacyPolicies", { admin, policy });
  } catch (error) {
    console.log(error);
    return res.redirect(req.get("referer"));
  }
};

let termConditionList = async (req, res) => {
  try {
    const { admin } = req.cookies;

    let term = await TermCondition.findAll({});

    return res.render("termConditions", { admin, term });
  } catch (error) {
    console.log(error);
    return res.redirect(req.get("referer"));
  }
};

const showFaqPage = async (req, res) => {
  try {
    const { admin } = req.cookies;
    return res.render("faq", { admin });
  } catch (error) {
    console.log(error);
    return res.redirect(req.get("referer"));
  }
};

const createFaq = async (req, res) => {
  try {
    const { admin } = req.cookies;
    let heading = req.body.heading;
    let desc = req.body.description;
    let lang = req.body.language;
    console.log(heading, desc);
    if (!heading && !desc) {
      return res.redirect(req.get("referer"));
    }
    await Faq.create({ heading, desc, lang });
    // return res.redirect(req.get('referer'));
    return res.redirect("/admin/faq");
  } catch (error) {
    console.log(error);
    return res.redirect(req.get("referer"));
  }
};

let faq = async (req, res) => {
  try {
    const { admin } = req.cookies;
    let faq = await Faq.findAll({});

    return res.render("faqs", { admin, faq });
  } catch (error) {
    console.log(error);
    return res.redirect(req.get("referer"));
  }
};
let allFaq = async (req, res) => {
  try {
    let faq = await Faq.findAll({});

    faq
      ? res
          .status(HttpStatus.OK.code)
          .send(new Response(true, `${HttpStatus.OK.message}`, faq))
      : res
          .status(HttpStatus.OK.code)
          .send(new Response(false, `FAQ ${HttpStatus.NOT_FOUND.message}`));
  } catch (error) {
    return helpers.validationHandler(res, error);
  }
};

const deleteFaq = async (req, res) => {
  try {
    let id = req.params.id;
    if (!id) {
      return res.redirect(req.get("referer"));
    }
    let faq = await Faq.destroy({
      where: {
        id: id,
      },
    });
    return res.redirect(req.get("referer"));
  } catch (error) {
    console.log(error);
    return res.redirect(req.get("referer"));
  }
};

let viewFaq = async (req, res) => {
  try {
    const { admin } = req.cookies;
    let id = req.params.id;
    if (!id) {
      return res.redirect(req.get("referer"));
    }
    let faq = await Faq.findOne({
      where: {
        id: id,
      },
    });

    return res.render("faq_update", { admin, faq });
  } catch (error) {
    console.log(error);
    return res.redirect(req.get("referer"));
  }
};

const updateFaq = async (req, res) => {
  try {
    console.log("922");
    const { admin } = req.cookies;
    let id = req.params.id;
    let lang = req.body.language;
    console.log("925", id);
    if (!id) {
      return res.redirect(req.get("referer"));
    }
    let heading = req.body.heading;
    let desc = req.body.description;
    console.log(heading, desc);
    let faq = await Faq.findOne({
      where: {
        id: id,
      },
    });

    await faq.update({ heading, desc, lang });
    return res.redirect("/admin/faq");
    // return res.redirect(req.get('referer'));
  } catch (error) {
    console.log(error);
    return res.redirect(req.get("referer"));
  }
};

let getBanners = async (req, res) => {
  try {
    const { admin } = req.cookies;
    let banner = await HomeCms.findAll({
      where: {
        type: "Banner",
      },
    });

    return res.render("banners_cms", { admin, banner });
  } catch (error) {
    console.log(error);
    return res.redirect(req.get("referer"));
  }
};

let viewBanner = async (req, res) => {
  try {
    const { admin } = req.cookies;
    let id = req.params.id;
    if (!id) {
      return res.redirect(req.get("referer"));
    }
    let banner = await HomeCms.findOne({
      where: {
        id: id,
      },
    });

    return res.render("banner_update", { admin, banner });
  } catch (error) {
    console.log(error);
    return res.redirect(req.get("referer"));
  }
};

const updateBanner = async (req, res) => {
  try {
    console.log("922");
    const { admin } = req.cookies;
    let id = req.params.id;
    console.log("925", id);
    if (!id) {
      return res.redirect(req.get("referer"));
    }

    let banner = await HomeCms.findOne({
      where: {
        id: id,
      },
    });
    if (req.file) {
      let file = `banner/${req.file.filename}`;
      let title = req.body.title;
      let desc = req.body.text;
      await banner.update({ file, title, desc });
    } else {
      let title = req.body.title;
      let desc = req.body.text;
      await banner.update({ title, desc });
    }
    return res.redirect(req.get("referer"));
  } catch (error) {
    console.log(error);
    return res.redirect(req.get("referer"));
  }
};

let sections = async (req, res) => {
  try {
    const { admin } = req.cookies;
    let section = await HomeCms.findAll({
      where: {
        type: "Section",
      },
    });

    return res.render("sections_cms", { admin, section });
  } catch (error) {
    console.log(error);
    return res.redirect(req.get("referer"));
  }
};

const deleteSection = async (req, res) => {
  try {
    let id = req.params.id;
    if (!id) {
      return res.redirect(req.get("referer"));
    }
    let section = await HomeCms.destroy({
      where: {
        id: id,
      },
    });
    return res.redirect(req.get("referer"));
  } catch (error) {
    console.log(error);
    return res.redirect(req.get("referer"));
  }
};

let viewSection = async (req, res) => {
  try {
    const { admin } = req.cookies;
    let id = req.params.id;
    if (!id) {
      return res.redirect(req.get("referer"));
    }
    let section = await HomeCms.findOne({
      where: {
        id: id,
        type: "Section",
      },
    });
    // return res.send(section)
    return res.render("section_update", { admin, section });
  } catch (error) {
    console.log(error);
    return res.redirect(req.get("referer"));
  }
};

const updateSection = async (req, res) => {
  try {
    console.log("922");
    const { admin } = req.cookies;
    let id = req.params.id;
    let lang = req.body.lang;
    console.log("925", id);
    if (!id) {
      return res.redirect(req.get("referer"));
    }
    let section = await HomeCms.findOne({
      where: {
        id: id,
      },
    });

    if (req.file) {
      let file = `section/${req.file.filename}`;
      let name = req.body.name;
      let title = req.body.title;
      let desc = req.body.text;
      console.log("1096", file, name, title, desc);
      await section.update({ file, name, title, desc, lang });
    } else {
      let name = req.body.name;
      let title = req.body.title;
      let desc = req.body.text;
      console.log("1096", name, title, desc);
      await section.update({ name, title, desc, lang });
    }
    // return res.redirect(req.get('referer'));
    return res.redirect("/admin/sections");
  } catch (error) {
    console.log(error);
    return res.redirect(req.get("referer"));
  }
};

let listTestimonials = async (req, res) => {
  try {
    const { admin } = req.cookies;
    let testimonial = await TestimonialCms.findAll({});

    return res.render("testimonials_cms", { admin, testimonial });
  } catch (error) {
    console.log(error);
    return res.redirect(req.get("referer"));
  }
};

const deleteTestimonial = async (req, res) => {
  try {
    let id = req.params.id;
    if (!id) {
      return res.redirect(req.get("referer"));
    }
    await TestimonialCms.destroy({
      where: {
        id: id,
      },
    });
    return res.redirect(req.get("referer"));
  } catch (error) {
    console.log(error);
    return res.redirect(req.get("referer"));
  }
};

let viewTestimonial = async (req, res) => {
  try {
    const { admin } = req.cookies;
    let id = req.params.id;
    if (!id) {
      return res.redirect(req.get("referer"));
    }
    let testimonial = await TestimonialCms.findOne({
      where: {
        id: id,
      },
    });

    return res.render("testimonial_update", { admin, testimonial });
  } catch (error) {
    console.log(error);
    return res.redirect(req.get("referer"));
  }
};

const updateTestimonial = async (req, res) => {
  try {
    console.log("922");
    const { admin } = req.cookies;
    let id = req.params.id;
    console.log("925", id);
    if (!id) {
      return res.redirect(req.get("referer"));
    }
    let testimonial = await TestimonialCms.findOne({
      where: {
        id: id,
      },
    });

    if (req.file) {
      let image = `testimonial/${req.file.filename}`;
      let name = req.body.name;
      let title = req.body.title;
      let desc = req.body.text;
      let lang = req.body.lang;

      await testimonial.update({ image, name, title, desc, lang });
    } else {
      let name = req.body.name;
      let title = req.body.title;
      let desc = req.body.text;
      let lang = req.body.lang;
      await testimonial.update({ name, title, desc, lang });
    }
    // return res.redirect(req.get('referer'));
    return res.redirect("/admin/list/testimonials");
  } catch (error) {
    console.log(error);
    return res.redirect(req.get("referer"));
  }
};

const createTestimonial = async (req, res) => {
  try {
    let image = req.file ? `testimonial/${req.file.filename}` : null;
    let name = req.body.name;
    let title = req.body.title;
    let desc = req.body.text;
    let lang = req.body.lang;

    await TestimonialCms.create({
      image,
      name,
      title,
      desc,
      type: "Testimonial",
      lang,
    });

    // res.redirect(req.get('referer'));
    return res.redirect("/admin/list/testimonials");
  } catch (error) {
    console.log(error);
    return res.redirect(req.get("referer"));
  }
};

let howItWorks = async (req, res) => {
  try {
    const { admin } = req.cookies;
    let work = await HomeCms.findAll({
      where: {
        type: "How-it-work",
      },
    });

    return res.render("how_it_works_cms", { admin, work });
  } catch (error) {
    console.log(error);
    return res.redirect(req.get("referer"));
  }
};

let viewHowItWork = async (req, res) => {
  try {
    const { admin } = req.cookies;
    let id = req.params.id;
    if (!id) {
      return res.redirect(req.get("referer"));
    }
    let how = await HomeCms.findOne({
      where: {
        id: id,
      },
    });

    return res.render("how_it_work_update", { admin, how });
  } catch (error) {
    console.log(error);
    return res.redirect(req.get("referer"));
  }
};

const updateHowItWork = async (req, res) => {
  try {
    console.log("922");
    const { admin } = req.cookies;
    let id = req.params.id;
    console.log("925", id);
    if (!id) {
      return res.redirect(req.get("referer"));
    }
    let how = await HomeCms.findOne({
      where: {
        id: id,
      },
    });

    if (req.file) {
      let file = `how_it_work/${req.file.filename}`;
      let title = req.body.title;
      let desc = req.body.text;

      await how.update({ file, title, desc });
    } else {
      let title = req.body.title;
      let desc = req.body.text;
      await how.update({ title, desc });
    }
    return res.redirect(req.get("referer"));
  } catch (error) {
    console.log(error);
    return res.redirect(req.get("referer"));
  }
};

let logos = async (req, res) => {
  try {
    const { admin } = req.cookies;
    let logo = await FooterCms.findOne({
      where: {
        type: "logo",
      },
    });

    return res.render("logos_cms", { admin, logo });
  } catch (error) {
    console.log(error);
    return res.redirect(req.get("referer"));
  }
};
let socailLinks = async (req, res) => {
  try {
    const { admin } = req.cookies;
    let links = await FooterCms.findAll({
      where: {
        type: "social-link",
      },
    });

    return res.render("social_links_cms", { admin, links });
  } catch (error) {
    console.log(error);
    return res.redirect(req.get("referer"));
  }
};

const deleteLinks = async (req, res) => {
  try {
    let id = req.params.id;
    if (!id) {
      return res.redirect(req.get("referer"));
    }
    await FooterCms.destroy({
      where: {
        id: id,
      },
    });
    return res.redirect(req.get("referer"));
  } catch (error) {
    console.log(error);
    return res.redirect(req.get("referer"));
  }
};

let viewSocialLink = async (req, res) => {
  try {
    const { admin } = req.cookies;
    let id = req.params.id;
    if (!id) {
      return res.redirect(req.get("referer"));
    }
    let link = await FooterCms.findOne({
      where: {
        id: id,
      },
    });

    return res.render("social_link_update", { admin, link });
  } catch (error) {
    console.log(error);
    return res.redirect(req.get("referer"));
  }
};

const updateSocialLink = async (req, res) => {
  try {
    console.log("922");
    const { admin } = req.cookies;
    let id = req.params.id;
    console.log("925", id);
    if (!id) {
      return res.redirect(req.get("referer"));
    }
    let Social_link = await FooterCms.findOne({
      where: {
        id: Number(id),
      },
    });
    let logo = req.file ? `logo/${req.file.filename}` : null;
    let name = req.body.name;
    let link = req.body.link;
    if (logo) {
      await Social_link.update({ logo, name, link });
    } else {
      await Social_link.update({ name, link });
    }

    return res.redirect("/admin/social/links");
  } catch (error) {
    console.log(error);
    // return res.redirect(req.get('referer'));
    return res.redirect("/admin/social/links");
  }
};

let showBanner = async (req, res) => {
  try {
    const { admin } = req.cookies;
    let id = req.params.id;
    let isBanner = await HomeCms.findOne({
      where: {
        type: "Banner",
        id: Number(id),
      },
    });
    return res.render("banner_cms", { admin, isBanner });
  } catch (error) {
    console.log(error);
    return res.redirect(req.get("referer"));
  }
};
let showSection = async (req, res) => {
  try {
    const { admin } = req.cookies;

    return res.render("section_cms", { admin });
  } catch (error) {
    console.log(error);
    return res.redirect(req.get("referer"));
  }
};

let showHowItWork = async (req, res) => {
  try {
    const { admin } = req.cookies;
    let id = req.params.id;
    let isWork = await HomeCms.findOne({
      where: {
        type: "How-it-work",
        id: Number(id),
      },
    });
    return res.render("how_it_work_cms", { admin, isWork });
  } catch (error) {
    console.log(error);
    return res.redirect(req.get("referer"));
  }
};

let showGetInTouch = async (req, res) => {
  try {
    const { admin } = req.cookies;
    let touch = await GetInTouch.findOne({});
    return res.render("get_in_touch", { admin, touch });
  } catch (error) {
    console.log(error);
    return res.redirect(req.get("referer"));
  }
};

let showTestimonial = async (req, res) => {
  try {
    const { admin } = req.cookies;

    return res.render("testimonial_cms", { admin });
  } catch (error) {
    console.log(error);
    return res.redirect(req.get("referer"));
  }
};
let showChangeLogo = async (req, res) => {
  try {
    const { admin } = req.cookies;
    let isLogo = await FooterCms.findOne({
      where: {
        type: "logo",
      },
    });
    return res.render("change_logo_cms", { admin, isLogo });
  } catch (error) {
    console.log(error);
    return res.redirect(req.get("referer"));
  }
};
let showSocialLink = async (req, res) => {
  try {
    const { admin } = req.cookies;

    return res.render("social_link_cms", { admin });
  } catch (error) {
    console.log(error);
    return res.redirect(req.get("referer"));
  }
};

const banner = async (req, res) => {
  try {
    let file = req.file ? `banner/${req.file.filename}` : null;
    let id = req.params.id;
    let title = req.body.title;
    let desc = req.body.text;
    let lang = req.body.language;
    let isBanner = await HomeCms.findOne({
      where: {
        id: Number(id),
        type: "Banner",
      },
    });
    if (isBanner == null) {
      await HomeCms.create({ file, title, desc, type: "Banner", lang });
    } else {
      // if(isBanner.lang !== 'en' || isBanner.lang !== 'hi'){
      //     await HomeCms.create({ file, title, desc, type: 'Banner', lang })
      // }else{
      //     await isBanner.update({file, title, desc, type: 'Banner', lang})
      // }
      if (req.file) {
        await isBanner.update({ file, title, desc, lang });
      } else {
        await isBanner.update({ title, desc, lang });
      }
    }
    return res.redirect(req.get("referer"));
  } catch (error) {
    console.log(error);
    return res.redirect(req.get("referer"));
  }
};

let getBanner = async (req, res) => {
  try {
    let banner = await HomeCms.findOne({
      where: {
        type: "Banner",
      },
    });

    banner
      ? res
          .status(HttpStatus.OK.code)
          .send(new Response(true, `${HttpStatus.OK.message}`, banner))
      : res
          .status(HttpStatus.OK.code)
          .send(new Response(false, `Banner ${HttpStatus.NOT_FOUND.message}`));
  } catch (error) {
    return helpers.validationHandler(res, error);
  }
};

const createSection = async (req, res) => {
  try {
    let file = req.file ? `section/${req.file.filename}` : null;
    let name = req.body.name;
    let title = req.body.title;
    let desc = req.body.text;
    let lang = req.body.language;

    await HomeCms.create({ file, name, title, desc, type: "Section", lang });

    // res.redirect(req.get('referer'));
    return res.redirect("/admin/sections");
  } catch (error) {
    console.log(error);
    return res.redirect(req.get("referer"));
  }
};

let getSection = async (req, res) => {
  try {
    let section = await HomeCms.findAll({
      where: {
        type: "Section",
      },
    });

    section
      ? res
          .status(HttpStatus.OK.code)
          .send(new Response(true, `${HttpStatus.OK.message}`, section))
      : res
          .status(HttpStatus.OK.code)
          .send(new Response(false, `Section ${HttpStatus.NOT_FOUND.message}`));
  } catch (error) {
    return helpers.validationHandler(res, error);
  }
};

const createTestimonialHeader = async (req, res) => {
  try {
    let name = req.body.name;
    let title = req.body.title;
    let desc = req.body.text;
    // console.log(name);
    let isHeader = await HomeCms.findOne({
      where: {
        type: "Testimonial-Header",
      },
    });
    if (isHeader == null) {
      await TestimonialCms.create({
        name,
        title,
        desc,
        type: "Testimonial-Header",
      });
    } else {
      await isHeader.update({ name, title, desc });
    }
    return res.redirect(req.get("referer"));

    res.redirect(req.get("referer"));
  } catch (error) {
    console.log(error);
    return res.redirect(req.get("referer"));
  }
};

let getTestimonial = async (req, res) => {
  try {
    let testimonial = await TestimonialCms.findAll({});

    testimonial
      ? res
          .status(HttpStatus.OK.code)
          .send(new Response(true, `${HttpStatus.OK.message}`, testimonial))
      : res
          .status(HttpStatus.OK.code)
          .send(
            new Response(false, `Testimonial ${HttpStatus.NOT_FOUND.message}`)
          );
  } catch (error) {
    return helpers.validationHandler(res, error);
  }
};

const createHowItWork = async (req, res) => {
  try {
    let file = req.file ? `how_it_work/${req.file.filename}` : null;
    let title = req.body.title;
    let desc = req.body.text;
    let lang = req.body.language;
    let id = req.params.id;
    let isWork = await HomeCms.findOne({
      where: {
        type: "How-it-work",
        id: Number(id),
      },
    });
    if (isWork == null) {
      await HomeCms.create({ file, title, desc, type: "How-it-work", lang });
    } else {
      if (req.file) {
        await isWork.update({ file, title, desc, lang });
      } else {
        await isWork.update({ title, desc, lang });
      }
    }
    return res.redirect(req.get("referer"));
  } catch (error) {
    console.log(error);
    return res.redirect(req.get("referer"));
  }
};

const updateGetInTouch = async (req, res) => {
  try {
    let phone = req.body.phone;
    let email = req.body.email;
    let address = req.body.address;
    let touch = await GetInTouch.findOne({});
    if (touch == null) {
      await GetInTouch.create({ phone, email, address });
    } else {
      await touch.update({ phone, email, address });
    }
    return res.redirect(req.get("referer"));
  } catch (error) {
    console.log(error);
    return res.redirect(req.get("referer"));
  }
};

let howItwork = async (req, res) => {
  try {
    let how = await HomeCms.findOne({
      where: {
        type: "How-it-work",
      },
    });

    how
      ? res
          .status(HttpStatus.OK.code)
          .send(new Response(true, `${HttpStatus.OK.message}`, how))
      : res
          .status(HttpStatus.OK.code)
          .send(
            new Response(false, `How it work ${HttpStatus.NOT_FOUND.message}`)
          );
  } catch (error) {
    return helpers.validationHandler(res, error);
  }
};

const changeLogo = async (req, res) => {
  try {
    let logo = req.file ? `logo/${req.file.filename}` : null;
    let isLogo = await FooterCms.findOne({
      where: {
        type: "logo",
      },
    });
    if (isLogo == null) {
      await FooterCms.create({ logo, type: "logo" });
    } else {
      if (req.file) {
        await isLogo.update({ logo });
      }
    }
    return res.redirect(req.get("referer"));
  } catch (error) {
    console.log(error);
    return res.redirect(req.get("referer"));
  }
};

let getLogo = async (req, res) => {
  try {
    let logo = await FooterCms.findOne({
      where: {
        type: "logo",
      },
    });

    logo
      ? res
          .status(HttpStatus.OK.code)
          .send(new Response(true, `${HttpStatus.OK.message}`, logo))
      : res
          .status(HttpStatus.OK.code)
          .send(new Response(false, `Logo ${HttpStatus.NOT_FOUND.message}`));
  } catch (error) {
    return helpers.validationHandler(res, error);
  }
};

const socialLink = async (req, res) => {
  try {
    let logo = req.file ? `logo/${req.file.filename}` : null;
    let name = req.body.name;
    let link = req.body.link;

    await FooterCms.create({ logo, name, link, type: "social-link" });

    // res.redirect(req.get('referer'));
    return res.redirect("/admin/social/links");
  } catch (error) {
    console.log(error);
    return res.redirect(req.get("referer"));
  }
};

let getSocialLink = async (req, res) => {
  try {
    let social = await FooterCms.findAll({
      where: {
        type: "social-link",
      },
    });

    social
      ? res
          .status(HttpStatus.OK.code)
          .send(new Response(true, `${HttpStatus.OK.message}`, social))
      : res
          .status(HttpStatus.OK.code)
          .send(
            new Response(false, `Social link ${HttpStatus.NOT_FOUND.message}`)
          );
  } catch (error) {
    return helpers.validationHandler(res, error);
  }
};

const getHomeCms = async (req, res) => {
  try {
    let banner = await HomeCms.findOne({
      where: {
        type: "Banner",
      },
    });

    let section = await HomeCms.findAll({
      where: {
        type: "Section",
      },
    });

    let faq = await Faq.findAll({});

    let testimonial = await TestimonialCms.findAll({});

    let logo = await FooterCms.findOne({
      where: {
        type: "logo",
      },
    });

    let data = {
      banner: banner,
      section: section,
      faq: faq,
      testimonial: testimonial,
      logo: logo,
    };

    data
      ? res
          .status(HttpStatus.OK.code)
          .send(new Response(true, `${HttpStatus.OK.message}`, data))
      : res
          .status(HttpStatus.OK.code)
          .send(
            new Response(false, `HOME CMS ${HttpStatus.NOT_FOUND.message}`)
          );
  } catch (error) {
    return helpers.validationHandler(res, error);
  }
};

const getHtwCms = async (req, res) => {
  try {
    let how = await HomeCms.findOne({
      where: {
        type: "How-it-work",
      },
    });

    let faq = await Faq.findAll({});

    let logo = await FooterCms.findOne({
      where: {
        type: "logo",
      },
    });

    let data = {
      howToWork: how,
      faq: faq,
      logo: logo,
    };

    data
      ? res
          .status(HttpStatus.OK.code)
          .send(new Response(true, `${HttpStatus.OK.message}`, data))
      : res
          .status(HttpStatus.OK.code)
          .send(
            new Response(
              false,
              `HOW TO WORK CMS ${HttpStatus.NOT_FOUND.message}`
            )
          );
  } catch (error) {
    return helpers.validationHandler(res, error);
  }
};

const createPurposeVisit = async (req, res) => {
  try {
    let productId = req.body.productId;
    let option = req.body.name;
    if (productId && option) {
      await PurposeVisit.create({ productId, option });
    }
    return res.redirect(req.get("referer"));
    // return res.redirect('/admin/list/testimonials')
  } catch (error) {
    console.log(error);
    return res.redirect(req.get("referer"));
  }
};

let listPurposeVisits = async (req, res) => {
  try {
    const { admin } = req.cookies;
    let purpose_to_visit = await PurposeVisit.findAll({
      include: [
        {
          model: Category,
          attributes: ["id", "name"],
        },
      ],
    });
    // return res.send(purpose_to_visit)

    return res.render("purposeVisits", { admin, purpose_to_visit });
  } catch (error) {
    console.log(error);
    return res.redirect(req.get("referer"));
  }
};

const UpdatePurposeVisits = async (req, res) => {
  try {
    const { admin } = req.cookies;
    let id = req.body.id;
    let option = req.body.name;
    let productId = req.body.categoryId;
    console.log("925", id);
    if (!id || !option) {
      return res.redirect(req.get("referer"));
    }
    let purposeToVisit = await PurposeVisit.findOne({
      where: {
        id: id,
      },
    });

    if (purposeToVisit) {
      await purposeToVisit.update({ option, productId });
    }

    return res.redirect(req.get("referer"));
    // return res.redirect('/admin/list/testimonials');
  } catch (error) {
    console.log(error);
    return res.redirect(req.get("referer"));
  }
};

const deletePurposeVisits = async (req, res) => {
  try {
    let id = req.params.id;
    if (!id) {
      return res.redirect(req.get("referer"));
    }
    await PurposeVisit.destroy({
      where: {
        id: id,
      },
    });
    return res.redirect(req.get("referer"));
  } catch (error) {
    console.log(error);
    return res.redirect(req.get("referer"));
  }
};

let feedbackandReviews = async (req, res) => {
  try {
    const { admin } = req.cookies;
    let feedbacks = await Feedback.findAll({});
    // return res.send(purpose_to_visit)

    return res.render("feedbackReviews", { admin, feedbacks });
  } catch (error) {
    console.log(error);
    return res.redirect(req.get("referer"));
  }
};

let contactUsList = async (req, res) => {
  try {
    const { admin } = req.cookies;
    let contactUs = await ContactUs.findAll({});
    // return res.send(purpose_to_visit)

    return res.render("contact-us", { admin, contactUs });
  } catch (error) {
    console.log(error);
    return res.redirect(req.get("referer"));
  }
};

let contactUsView = async (req, res) => {
  try {
    const { admin } = req.cookies;
    let id = req.params.id;
    let contactUs = await ContactUs.findOne({
      where: {
        id: Number(id),
      },
    });

    await contactUs.update({ isRead: true });

    return res.render("contact_us_view", { admin, contactUs });
  } catch (error) {
    console.log(error);
    return res.redirect(req.get("referer"));
  }
};

const deleteReviews = async (req, res) => {
  try {
    let id = req.params.id;
    if (!id) {
      return res.redirect(req.get("referer"));
    }
    await Feedback.destroy({
      where: {
        id: id,
      },
    });
    return res.redirect(req.get("referer"));
  } catch (error) {
    console.log(error);
    return res.redirect(req.get("referer"));
  }
};

const deleteContactUs = async (req, res) => {
  try {
    let id = req.params.id;
    if (!id) {
      return res.redirect(req.get("referer"));
    }
    await ContactUs.destroy({
      where: {
        id: id,
      },
    });
    return res.redirect(req.get("referer"));
  } catch (error) {
    console.log(error);
    return res.redirect(req.get("referer"));
  }
};

let aboutList = async (req, res) => {
  try {
    const { admin } = req.cookies;
    let about = await AboutUs.findAll();

    return res.render("aboutList", { admin, about });
  } catch (error) {
    console.log(error);
    return res.redirect(req.get("referer"));
  }
};

let createAboutUs = async (req, res) => {
  try {
    let image = req.file ? `how_it_work/${req.file.filename}` : null;
    let id = req.params.id;
    let title = req.body.title;
    let desc = req.body.about;
    console.log("2373", image, title, desc);
    let about = await AboutUs.findOne({
      where: {
        id: Number(id),
      },
    });

    if (about == null) {
      await AboutUs.create({ image, title, about: desc });
    } else {
      if (req.file) {
        await about.update({ image, title, about: desc });
      } else {
        await about.update({ title, about: desc });
      }
    }

    return res.redirect(req.get("referer"));
  } catch (error) {
    console.log(error);
    return res.redirect(req.get("referer"));
  }
};

let showAboutUs = async (req, res) => {
  try {
    const { admin } = req.cookies;
    let id = req.params.id;
    let aboutUs = await AboutUs.findOne({
      where: {
        id: Number(id),
      },
    });

    return res.render("aboutUs", { admin, aboutUs });
  } catch (error) {
    console.log(error);
    return res.redirect(req.get("referer"));
  }
};

let footerList = async (req, res) => {
  try {
    const { admin } = req.cookies;
    let footer = await HomeCms.findAll({
      where: {
        type: "Footer",
      },
    });

    return res.render("footers", { admin, footer });
  } catch (error) {
    console.log(error);
    return res.redirect(req.get("referer"));
  }
};

let viewFooter = async (req, res) => {
  try {
    const { admin } = req.cookies;
    let id = req.params.id;
    let footer = await HomeCms.findOne({
      where: {
        id: Number(id),
      },
    });

    return res.render("footer", { admin, footer });
  } catch (error) {
    console.log(error);
    return res.redirect(req.get("referer"));
  }
};

let updateFooter = async (req, res) => {
  try {
    let id = req.params.id;
    let name = req.body.name;
    let desc = req.body.desc;
    console.log("2373", id, name, desc);

    let footer = await HomeCms.findOne({
      where: {
        id: Number(id),
      },
    });

    await footer.update({ name, desc });

    return res.redirect(req.get("referer"));
  } catch (error) {
    console.log(error);
    return res.redirect(req.get("referer"));
  }
};

let refundPolicyList = async (req, res) => {
  try {
    const { admin } = req.cookies;
    let refundPolicy = await HomeCms.findAll({
      where: {
        type: "Refund policy",
      },
    });

    return res.render("refund_policies", { admin, refundPolicy });
  } catch (error) {
    console.log(error);
    return res.redirect(req.get("referer"));
  }
};

let viewRefundPolicy = async (req, res) => {
  try {
    const { admin } = req.cookies;
    let id = req.params.id;
    let refund = await HomeCms.findOne({
      where: {
        id: Number(id),
      },
    });

    return res.render("refund_policy", { admin, refund });
  } catch (error) {
    console.log(error);
    return res.redirect(req.get("referer"));
  }
};

let updateRefundPolicy = async (req, res) => {
  try {
    let id = req.params.id;
    let name = req.body.name;
    let desc = req.body.desc;
    console.log("2373", id, name, desc);

    let refund = await HomeCms.findOne({
      where: {
        id: Number(id),
      },
    });

    await refund.update({ name, desc });

    return res.redirect(req.get("referer"));
  } catch (error) {
    console.log(error);
    return res.redirect(req.get("referer"));
  }
};

let shipping_delivery_List = async (req, res) => {
  try {
    const { admin } = req.cookies;
    let shipping_delivery = await HomeCms.findAll({
      where: {
        type: "Shipping and Delivery",
      },
    });

    return res.render("shipping_deliveries", { admin, shipping_delivery });
  } catch (error) {
    console.log(error);
    return res.redirect(req.get("referer"));
  }
};

let view_Shipping_delivery = async (req, res) => {
  try {
    const { admin } = req.cookies;
    let id = req.params.id;
    let shipping_delivery = await HomeCms.findOne({
      where: {
        id: Number(id),
      },
    });

    return res.render("shipping_delivery", { admin, shipping_delivery });
  } catch (error) {
    console.log(error);
    return res.redirect(req.get("referer"));
  }
};

let update_shipping_delivery = async (req, res) => {
  try {
    let id = req.params.id;
    let name = req.body.name;
    let desc = req.body.desc;
    console.log("2373", id, name, desc);

    let shipping = await HomeCms.findOne({
      where: {
        id: Number(id),
      },
    });

    await shipping.update({ name, desc });

    return res.redirect(req.get("referer"));
  } catch (error) {
    console.log(error);
    return res.redirect(req.get("referer"));
  }
};

const couponCreatePage = async (req, res) => {
  try {
    const { admin } = req.cookies;
    return res.render("create_coupons", { admin });
  } catch (error) {
    console.log(error);
    return res.redirect(req.get("referer"));
  }
};

const couponCreate = async (req, res) => {
  try {
    const {
      discountType,
      discountValue,
      usageLimit,
      startDate,
      expirationDate,
    } = req.body;
    console.log("2795", req.body);

    let couponCode = helpers.generateCouponCode();

    const newCoupon = await Coupon.create({
      code: couponCode,
      discountType,
      discountValue,
      usageLimit,
      startDate,
      expirationDate,
    });
    return res.redirect("/admin/coupon/all");
  } catch (error) {
    console.log(error);
    return res.redirect(req.get("referer"));
  }
};
const couponAll = async (req, res) => {
  try {
    const { admin } = req.cookies;
    let currentDate = new Date();
    let coupons = await Coupon.findAll({
      order: [["id", "DESC"]],
    });
    for (let value of coupons) {
      if (value.expirationDate < currentDate) {
        value.setDataValue("expireStatus", true);
      } else {
        value.setDataValue("expireStatus", false);
      }
    }
    // return res.send(coupons)
    return res.render("coupons", { admin, coupons });
  } catch (error) {
    console.log(error);
    return res.redirect(req.get("referer"));
  }
};

const transactionAll = async (req, res) => {
  try {
    const { admin } = req.cookies;

    // Fetch order transactions
    const ordersTransaction = await Order.findAll({
      include: [
        {
          model: User,
          attributes: ["id", "fullName"],
        },
      ],
      order: [["createdAt", "DESC"]],
    });

    // Fetch transaction histories
    const transaction = await TransactionHistory.findAll({
      include: [
        {
          model: User,
          attributes: ["id", "fullName"],
        },
      ],
      order: [["createdAt", "DESC"]],
    });

    // Combine orders and transactions into a single array
    const orders = [...(transaction || []), ...(ordersTransaction || [])];

    // Sort orders by createdAt in descending order
    orders.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    // return res.send(orders)
    res.render("transactions", { admin, orders });
  } catch (error) {
    console.error("Error fetching transactions:", error);
    // Redirect back to the referring page in case of error
    return res.redirect(req.get("referer") || "/");
  }
};

let getChangePassword = async (req, res) => {
  try {
    const { admin } = req.cookies;

    return res.render("changePassoword", { admin });
  } catch (error) {
    console.log(error);
    res.redirect(req.get("referer"));
  }
};

let resetPassword = async (req, res) => {
  try {
    console.log("396 api hit!");
    const { admin } = req.cookies;
    let oldPassword = req.body.oldPassword;
    let newPassword = req.body.newPassword;
    let confirmPassword = req.body.confirmPassword;

    let adminDetails = await User.findOne({
      where: {
        isAdmin: true,
      },
      // attributes:['password']
    });

    if (!adminDetails) {
      return res.status(200).send({ status: false, msg: "Admin not found!" });
    }

    if (newPassword !== confirmPassword) {
      return res
        .status(200)
        .send({
          status: false,
          msg: "New password and confirm password should be match!",
        });
    }

    const auth = await bcrypt.compare(oldPassword, adminDetails.password);

    if (auth) {
      const salt = await bcrypt.genSalt();
      const hashPassword = await bcrypt.hash(newPassword, salt);
      let updated = await adminDetails.update({ password: hashPassword });
      if (updated) {
        return res
          .status(200)
          .send({ status: true, msg: "Password changed successfully" });
      } else {
        return res
          .status(200)
          .send({
            status: false,
            msg: "Something went wrong for update password!",
          });
      }
    }

    return res.status(200).send({ status: false, msg: "Wrong old password!" });
  } catch (error) {
    console.log(error);
    res.redirect(req.get("referer"));
  }
};


let enquiryAll = async (req, res) => {
  try {
    const { admin } = req.cookies;
    let data = await Enquiry.findAll({
      order:[['id', "DESC"]]
    });
    // return res.send(purpose_to_visit)

    return res.render("enquries", { admin, data });
  } catch (error) {
    console.log(error);
    return res.redirect(req.get("referer"));
  }
};

const deleteEnquiry = async (req, res) => {
  try {
    let id = req.params.id;
    if (!id) {
      return res.redirect(req.get("referer"));
    }
    await Enquiry.destroy({
      where: {
        id: id,
      },
    });
    return res.redirect(req.get("referer"));
  } catch (error) {
    console.log(error);
    return res.redirect(req.get("referer"));
  }
};


const showCategoryPage = async(req,res)=>{
  try{
    const {admin} = req.cookies;
    let categories = await Category.findAll({});

    let subCategory = await SubCategory.findAll({});
    let microCategory = await DownSubCategory.findAll({});

    // return res.send({categories, subCategory, microCategory})

    return res.render("categories", {admin, categories, subCategory, microCategory});
  }catch(error){
    console.log(error);
    return res.redirect(req.get("referer"));
  }
}

// create category
const createCategory = async(req,res)=>{
  console.log("Hit create category api's")
  try{
    const name = req.body.categoryName;
    console.log(name, req.files.image[0].filename)

   let createCategory =  await Category.create({name,image:`categories/${req.files.image[0].filename}`});
   createCategory ? res.status(201).json({status:true, msg:"Category created successfully!"}):
    res.status(400).json({status:false, msg:"Something went wrong!"});
  }catch(error){
    console.log(error);
   return res.status(500).send({status:false, msg:"Something went wrong!"});
  }
}

const createSubCategory = async (req, res) => {
  try {
    const { categoryId, name } = req.body;

    let category = await SubCategory.create({ categoryId, name, image:`categories/${req.files.image[0].filename}`});
    return res
      .status(HttpStatus.CREATED.code)
      .send(
        new Response(
          true,
          `SubCategory ${HttpStatus.CREATED.message}`,
          category
        )
      );
  } catch (error) {
    return helpers.validationHandler(res, error);
  }
};


const createMicroCategory = async (req, res) => {
  try {
    const { name, categoryId, subCategoryId } = req.body;

    let category = await DownSubCategory.create({ categoryId, subCategoryId, name, image:`categories/${req.files.image[0].filename}`});
    return res
      .status(HttpStatus.CREATED.code)
      .send(
        new Response(
          true,
          `SubCategory ${HttpStatus.CREATED.message}`,
          category
        )
      );
  } catch (error) {
    return helpers.validationHandler(res, error);
  }
};



const logout = async (req, res) => {
  res.clearCookie("admin");
  res.locals.admin = null;
  return res.redirect("/admin/login");
};

module.exports = {
  adminLogin,
  showLoginPage,
  adminPage,
  addItem,
  allProducts,
  productStatus,
  singleProduct,
  editProduct,
  showEditText,
  addProductImage,
  deleteProductImage,
  updateProductImage,
  allUser,
  userFamilyMembers,
  user,
  userDeactivate,
  userActivate,
  userAllOrder,
  generateQr,
  allQr,
  selectQrList,
  deleteQr,
  orderList,
  deleteOrder,
  orderDetails,
  assignQr,
  unassignQr,
  changeOrderDeliveryStatus,
  orderListExport,
  singleQr,
  disableQr,
  downloadSelectedQr,
  termCondition,
  downloadQrByRange,
  qrListExport,
  getTermCondition,
  termAndCondition,
  privacyPolicy,
  getPrivacyPolicy,
  getPrivacyAndPolicy,
  PrivacyPolicyList,
  termConditionList,
  showFaqPage,
  createFaq,
  faq,
  allFaq,
  deleteFaq,
  viewFaq,
  updateFaq,
  getBanners,
  viewBanner,
  updateBanner,
  sections,
  deleteSection,
  viewSection,
  updateSection,
  listTestimonials,
  deleteTestimonial,
  viewTestimonial,
  updateTestimonial,
  howItWorks,
  viewHowItWork,
  updateHowItWork,
  logos,
  socailLinks,
  deleteLinks,
  viewSocialLink,
  updateSocialLink,
  showBanner,
  showSection,
  showHowItWork,
  showGetInTouch,
  showTestimonial,
  showChangeLogo,
  banner,
  getBanner,
  createSection,
  getSection,
  createTestimonial,
  createTestimonialHeader,
  getTestimonial,
  createHowItWork,
  updateGetInTouch,
  howItwork,
  changeLogo,
  getLogo,
  showSocialLink,
  socialLink,
  getSocialLink,
  getHomeCms,
  getHtwCms,
  createPurposeVisit,
  listPurposeVisits,
  UpdatePurposeVisits,
  deletePurposeVisits,
  feedbackandReviews,
  deleteReviews,
  showAboutUs,
  refundPolicyList,
  viewRefundPolicy,
  updateRefundPolicy,
  shipping_delivery_List,
  view_Shipping_delivery,
  update_shipping_delivery,
  couponCreatePage,
  couponCreate,
  logout,
  createAboutUs,
  contactUsList,
  contactUsView,
  deleteContactUs,
  unreadCounters,
  aboutList,
  footerList,
  viewFooter,
  updateFooter,
  userAllQr,
  couponAll,
  transactionAll,
  getChangePassword,
  resetPassword,
  enquiryAll,
  deleteEnquiry,
  showCategoryPage,
  createCategory,
  createSubCategory,
  createMicroCategory
};
