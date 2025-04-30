const express = require("express");
const adminRouter = express.Router();
const admin_controller = require("../controllers/admin/admin.controller");
const { ensureAdmin } = require("../middlewares/admin.middleware");
const { uploadFiles } = require("../middlewares/uploadFiles.middleware");
const { uploadMiddleware } = require("../middlewares/upload.middleware");
const { testimonialUpload } = require("../middlewares/uploadTestimonial.middleware");
const { howItWorkUpload } = require("../middlewares/uploadHow_it_work.middleware");
// const { imageUpload } = require("../middlewares/uploadImage.middleware");
// const { productImages } = require("../middlewares/uploadCoverImage.middleware");
// const { bannerUpload } = require("../middlewares/uploadBanner.middleware");
// const { sectionUpload } = require("../middlewares/uploadSectionImage.middleware");
// const { testimonialUpload } = require("../middlewares/uploadTestimonial.middleware");
// const { howItWorkUpload } = require("../middlewares/uploadHow_it_work.middleware");
// const { logoUpload } = require("../middlewares/uploadLogo.middleware");

//AUTH ROUTES
adminRouter.route("/login").get(admin_controller.adminPage);
adminRouter.route("/userLogin").post(admin_controller.adminLogin);
adminRouter.route("/dashboard").get(ensureAdmin,admin_controller.showLoginPage);
adminRouter.route("/logout").get(ensureAdmin,admin_controller.logout);


adminRouter.route("/unread-counters").get(ensureAdmin, admin_controller.unreadCounters);

// PRODUCT ROUTES
adminRouter.route("/products").get(ensureAdmin,admin_controller.allProducts);
// adminRouter.route("/create/product").post(ensureAdmin,productImages,admin_controller.addItem);
adminRouter.route("/product/status/:id").get(ensureAdmin,admin_controller.productStatus);
// adminRouter.route("/product/view/:id").get(ensureAdmin,admin_controller.singleProduct);
// adminRouter.route("/product/view/edit/:id").get(ensureAdmin,admin_controller.showEditText);
// adminRouter.route("/product/edit/:id").post(ensureAdmin,imageUpload,admin_controller.editProduct);

// adminRouter.route("/product/image/add/:id").post(ensureAdmin,productImages,admin_controller.addProductImage);
// adminRouter.route("/product/image/delete/:id").get(ensureAdmin,admin_controller.deleteProductImage);
// adminRouter.route("/product/image/edit/:id").post(ensureAdmin,imageUpload,admin_controller.updateProductImage);


// // USER ROUTES
adminRouter.route("/users").get(ensureAdmin,admin_controller.allUser);
adminRouter.route("/user/:id").get(ensureAdmin,admin_controller.user);
adminRouter.route("/user/deactivate/:id").get(ensureAdmin,admin_controller.userDeactivate);
adminRouter.route("/user/activate/:id").get(ensureAdmin,admin_controller.userActivate);
// adminRouter.route("/user/all/bookings/:id").get(ensureAdmin,admin_controller.userAllOrder);


// // FAMILY MEMBER
// adminRouter.route("/user/members/:userId").get(ensureAdmin,admin_controller.userFamilyMembers);
// adminRouter.route("/user/QR/:userId").get(ensureAdmin,admin_controller.userAllQr);

// //QR ROUTES
// adminRouter.route("/create/qr").post(admin_controller.generateQr);
// adminRouter.route("/qr/list/:type/:categoryId").get(admin_controller.allQr);
// adminRouter.route("/qr/delete/:id").get(ensureAdmin,admin_controller.deleteQr);
// adminRouter.route("/qr/list/select").get(admin_controller.selectQrList);
// adminRouter.route("/qr/assign").post(admin_controller.assignQr);
// adminRouter.route("/qr/unassign/:id").get(admin_controller.unassignQr);
// adminRouter.route("/qr/:id").get(admin_controller.singleQr);
// adminRouter.route("/qr/disable/:id").get(admin_controller.disableQr);
// adminRouter.route("/qr/download").post(admin_controller.downloadSelectedQr);
// adminRouter.route("/qr/download/by/range").post(admin_controller.downloadQrByRange);
// adminRouter.route("/qr/list/export").get(admin_controller.qrListExport);

// // ORDER ROUTES
// adminRouter.route("/order/list").get(admin_controller.orderList);
// adminRouter.route("/order/delete/:id").get(ensureAdmin,admin_controller.deleteOrder);
// adminRouter.route("/order/:id").get(ensureAdmin,admin_controller.orderDetails);
// adminRouter.route("/order/delivery/change/:id/:status").get(ensureAdmin,admin_controller.changeOrderDeliveryStatus);
// adminRouter.route("/order/qr/list/export").get(admin_controller.orderListExport);

// //TERM AND CONDITION
adminRouter.route("/term/condition/:id").post(ensureAdmin,admin_controller.termCondition);
adminRouter.route("/get/term/condition/:id").get(ensureAdmin,admin_controller.getTermCondition);
adminRouter.route("/show/term/condition").get(admin_controller.termAndCondition);
adminRouter.route("/term-condition").get(admin_controller.termConditionList);
adminRouter.route("/term/condition/show").get(admin_controller.termConditionView); // api for term and condition

// //Privacy Policy
adminRouter.route("/create/privacy/policy/:id").post(ensureAdmin,admin_controller.privacyPolicy);
adminRouter.route("/privacy/policy/:id").get(ensureAdmin,admin_controller.getPrivacyPolicy);
adminRouter.route("/get/privacy/policy").get(admin_controller.getPrivacyAndPolicy);
adminRouter.route("/privacy-policy").get(admin_controller.PrivacyPolicyList);
adminRouter.route("/privacy-policy/show").get(admin_controller.PrivacyPolicyView); // api for privacy policy

// //FAQ
adminRouter.route("/faq/page").get(ensureAdmin,admin_controller.showFaqPage);
adminRouter.route("/create/faq").post(ensureAdmin,admin_controller.createFaq);
adminRouter.route("/faq").get(ensureAdmin,admin_controller.faq);
// adminRouter.route("/all/faq").get(admin_controller.allFaq);
adminRouter.route("/delete/faq/:id").get(ensureAdmin,admin_controller.deleteFaq);
adminRouter.route("/view/faq/:id").get(ensureAdmin,admin_controller.viewFaq);
adminRouter.route("/faq/update/:id").post(ensureAdmin,admin_controller.updateFaq);
adminRouter.route("/faq/all").get(admin_controller.faqAll); // api for all faq


// // HOME BANNER
// adminRouter.route("/show/banner/:id").get(ensureAdmin,admin_controller.showBanner);
// adminRouter.route("/create/banner/:id").post(ensureAdmin,bannerUpload,admin_controller.banner);
// adminRouter.route("/banner").get(admin_controller.getBanner); // api for landing page
// adminRouter.route("/get/banner").get(ensureAdmin,admin_controller.getBanners);
// // adminRouter.route("/view/banner/:id").get(ensureAdmin,admin_controller.viewBanner);
// // adminRouter.route("/banner/update/:id").post(ensureAdmin,admin_controller.updateBanner);

// // PRODUCT SECTION
// adminRouter.route("/create/section").post(ensureAdmin,sectionUpload,admin_controller.createSection);
// adminRouter.route("/section").get(admin_controller.getSection);
// adminRouter.route("/show/section").get(ensureAdmin,admin_controller.showSection);
// adminRouter.route("/sections").get(ensureAdmin,admin_controller.sections);
// adminRouter.route("/delete/section/:id").get(ensureAdmin,admin_controller.deleteSection);
// adminRouter.route("/view/section/:id").get(ensureAdmin,admin_controller.viewSection);
// adminRouter.route("/section/update/:id").post(ensureAdmin,sectionUpload,admin_controller.updateSection);

// // TESTIMONIAL 
adminRouter.route("/create/testimonial").post(ensureAdmin,testimonialUpload,admin_controller.createTestimonial);
adminRouter.route("/create/testimonial/header").post(ensureAdmin,admin_controller.createTestimonialHeader);
adminRouter.route("/testimonial").get(admin_controller.getTestimonial);
adminRouter.route("/show/testimonial").get(ensureAdmin,admin_controller.showTestimonial);
adminRouter.route("/list/testimonials").get(ensureAdmin,admin_controller.listTestimonials);
adminRouter.route("/delete/testimonial/:id").get(ensureAdmin,admin_controller.deleteTestimonial);
adminRouter.route("/view/testimonial/:id").get(ensureAdmin,admin_controller.viewTestimonial);
adminRouter.route("/testimonial/update/:id").post(ensureAdmin,testimonialUpload,admin_controller.updateTestimonial);
adminRouter.route("/testimonial/all").get(admin_controller.testimonialAll); // api for all testimonial

// // HOW IT WORK
// adminRouter.route("/show/how-it-work/:id").get(ensureAdmin,admin_controller.showHowItWork);
// adminRouter.route("/create/how-it-work/:id").post(ensureAdmin,howItWorkUpload,admin_controller.createHowItWork);
// adminRouter.route("/how-it-work").get(admin_controller.howItwork);
// adminRouter.route("/how/it/works").get(ensureAdmin,admin_controller.howItWorks);
// // adminRouter.route("/view/testimonial/:id").get(ensureAdmin,admin_controller.viewHowItWork);
// // adminRouter.route("/testimonial/update/:id").post(ensureAdmin,admin_controller.updateHowItWork);

// // UPDATE GET IN TOUCH
// adminRouter.route("/create/get-in-touch").post(ensureAdmin,admin_controller.updateGetInTouch);
// adminRouter.route("/get-in-touch").get(ensureAdmin,admin_controller.showGetInTouch);

// // CHANGE LOGO
// adminRouter.route("/show/changeLogo").get(ensureAdmin,admin_controller.showChangeLogo);
// adminRouter.route("/change/logo").post(ensureAdmin,logoUpload,admin_controller.changeLogo);
// adminRouter.route("/get/logo").get(admin_controller.getLogo);
// adminRouter.route("/logos").get(ensureAdmin,admin_controller.logos);


// // ADD SOCIAL LINKS
// adminRouter.route("/show/social/link").get(ensureAdmin,admin_controller.showSocialLink);
// adminRouter.route("/create/social/link").post(ensureAdmin,logoUpload, admin_controller.socialLink);
// adminRouter.route("/get/socical/link").get(admin_controller.getSocialLink);
// adminRouter.route("/social/links").get(ensureAdmin,admin_controller.socailLinks);
// adminRouter.route("/delete/social/links/:id").get(ensureAdmin,admin_controller.deleteLinks);
// adminRouter.route("/view/social/links/:id").get(ensureAdmin,admin_controller.viewSocialLink);
// adminRouter.route("/social/links/update/:id").post(ensureAdmin, logoUpload, admin_controller.updateSocialLink);


// // HOME CMS 
// adminRouter.route("/cms/home").get(admin_controller.getHomeCms);

// // HOW TO WORK CMS
// adminRouter.route("/cms/how/to/work").get(admin_controller.getHtwCms);


// // ADD PURPOSE TO VIST
// adminRouter.route("/purpose/visit/list").get(ensureAdmin,admin_controller.listPurposeVisits);
// adminRouter.route("/purpose/visit/create").post(ensureAdmin,admin_controller.createPurposeVisit);
// adminRouter.route("/purpose/visit/update").post(ensureAdmin,admin_controller.UpdatePurposeVisits);
// adminRouter.route("/purpose/visit/delete/:id").get(ensureAdmin,admin_controller.deletePurposeVisits);

// // REVIEWS AND FEEDBACK
// adminRouter.route("/feedbacks").get(ensureAdmin,admin_controller.feedbackandReviews);
// adminRouter.route("/feedback/delete/:id").get(ensureAdmin,admin_controller.deleteReviews)

// // CONTACT US
// adminRouter.route("/contact-us").get(ensureAdmin,admin_controller.contactUsList);
// adminRouter.route("/contact-us/delete/:id").get(ensureAdmin,admin_controller.deleteContactUs)
// adminRouter.route("/view/contact-us/:id").get(ensureAdmin,admin_controller.contactUsView);

// About us
adminRouter.route("/about/list").get(ensureAdmin,admin_controller.aboutList);
adminRouter.route("/create/About/us/:id").post(ensureAdmin, howItWorkUpload ,admin_controller.createAboutUs);
adminRouter.route("/about-us/:id").get(ensureAdmin,admin_controller.showAboutUs);
adminRouter.route("/about/us/show").get(admin_controller.aboutUs); // api for all about us

// // FOOTER
// adminRouter.route("/footer/list").get(ensureAdmin,admin_controller.footerList);
// adminRouter.route("/footer/:id").get(ensureAdmin,admin_controller.viewFooter);
// adminRouter.route("/footer/update/:id").post(howItWorkUpload, admin_controller.updateFooter);

// // REFUND POLICY
// adminRouter.route("/refund-policy/list").get(ensureAdmin,admin_controller.refundPolicyList);
// adminRouter.route("/refund-policy/:id").get(ensureAdmin,admin_controller.viewRefundPolicy);
// adminRouter.route("/refund-policy/update/:id").post(ensureAdmin, admin_controller.updateRefundPolicy);

// // SHIPPING & DELIVERY
// adminRouter.route("/shipping-delivery/list").get(ensureAdmin,admin_controller.shipping_delivery_List);
// adminRouter.route("/shipping-delivery/:id").get(ensureAdmin,admin_controller.view_Shipping_delivery);
// adminRouter.route("/shipping-delivery/update/:id").post(ensureAdmin, admin_controller.update_shipping_delivery);


// //COUPON
adminRouter.route("/coupon/create").get(ensureAdmin,admin_controller.couponCreatePage);
adminRouter.route("/coupon/create").post(ensureAdmin,admin_controller.couponCreate);
adminRouter.route("/coupon/all").get(ensureAdmin,admin_controller.couponAll);

// //TRANSACTION
// adminRouter.route("/transaction").get(ensureAdmin,admin_controller.transactionAll);


// CHANGE PASSWORD
adminRouter.route("/reset/password").get(ensureAdmin,admin_controller.getChangePassword);
adminRouter.route("/reset/password").post(ensureAdmin,admin_controller.resetPassword);

// Enquiry
adminRouter.route("/enquiry/all").get(ensureAdmin,admin_controller.enquiryAll);
adminRouter.route("/enquiry/delete/:id").get(ensureAdmin,admin_controller.deleteEnquiry)

// Category Management
adminRouter.route("/category/show/create").get(ensureAdmin,admin_controller.showCategoryPage);
adminRouter.route("/category/create").post(uploadFiles("uploads/categories/",[{ name: "image", maxCount: 1 }]),admin_controller.createCategory);


// Sub category
adminRouter.route("/create/sub/category").post(uploadFiles("uploads/categories/",[{ name: "image", maxCount: 1 }]),admin_controller.createSubCategory);

adminRouter.route("/create/micro/category").post(uploadFiles("uploads/categories/",[{ name: "image", maxCount: 1 }]),admin_controller.createMicroCategory);
// show all category listing
adminRouter.route("/category/all").get(ensureAdmin,admin_controller.showAllCategory);
adminRouter.route("/category/update/:id").post(uploadFiles("uploads/categories/",[{ name: "image", maxCount: 1 }]), ensureAdmin,admin_controller.updateCategory);
adminRouter.route("/category/delete/:id").get(ensureAdmin,admin_controller.deleteCategory);

// SubCategory
adminRouter.route("/subcategory/all/:id").get(ensureAdmin,admin_controller.showAllSubCategory);
adminRouter.route("/subcategory/update/:id").post(uploadFiles("uploads/categories/",[{ name: "image", maxCount: 1 }]),ensureAdmin,admin_controller.updateSubCategory);
adminRouter.route("/subcategory/delete/:id").get(ensureAdmin,admin_controller.deleteSubCategory);

// MicroCategory
adminRouter.route("/microcategory/all/:id").get(ensureAdmin,admin_controller.showAllMicroCategory);
adminRouter.route("/microcategory/update/:id").post(uploadFiles("uploads/categories/",[{ name: "image", maxCount: 1 }]),ensureAdmin,admin_controller.updateMicroCategory);
adminRouter.route("/microcategory/delete/:id").get(ensureAdmin,admin_controller.deleteMicroCategory);

// Lead
adminRouter.route("/lead/create").post(ensureAdmin,admin_controller.createLead);
adminRouter.route("/lead/create/new").get(ensureAdmin,admin_controller.createLeadPage);
adminRouter.route("/lead/list").get(ensureAdmin,admin_controller.leadList);
adminRouter.route("/lead/delete/:id").get(ensureAdmin,admin_controller.deleteLead);
adminRouter.route("/lead/update/:id").post(ensureAdmin,admin_controller.updateLead);
adminRouter.route("/lead/update/:id").get(ensureAdmin,admin_controller.updateLeadPage);
adminRouter.route("/lead/:id").get(ensureAdmin,admin_controller.showLead);

// Add product to user
adminRouter.route("/user/add-product/:id").post(ensureAdmin, uploadMiddleware, admin_controller.addProductToUser);
// render add product page
adminRouter.route("/add/product/:id").get(ensureAdmin,admin_controller.addProductPage);

//Subscription
adminRouter.route("/subscription/create").get(ensureAdmin,admin_controller.subscriptionCreatePage);
adminRouter.route("/subscription/create").post(ensureAdmin,admin_controller.subscriptionCreate);
adminRouter.route("/subscription/list").get(ensureAdmin,admin_controller.subscriptionList);
adminRouter.route("/subscription/delete/:id").get(ensureAdmin,admin_controller.deleteSubscription);
adminRouter.route("/subscription/update/:id").post(ensureAdmin,admin_controller.updateSubscription);


module.exports = {
  adminRouter,
};
