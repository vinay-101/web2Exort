const path = require("path");
const { HttpStatus } = require("./statusCode");
const { Op, Sequelize } = require("sequelize");
const nodemailer = require("nodemailer");
const hbs = require("nodemailer-express-handlebars");
const express = require("express");
const axios = require("axios");
const emailTemplatesPath = path.resolve(__dirname, "../templates/email/");
const emailTemplateParialsPath = path.resolve(
  __dirname,
  "../templates/emails/partials"
);
const fs = require("fs");
const { v4: uuidv4 } = require('uuid');
const Coupon = require("../models/Coupon");

const sendOtp = async (data) => {
  // const otp =  Math.floor(100000 + Math.random() * 900000);
  // let res = await axios.get(`https://www.fast2sms.com/dev/bulkV2?authorization=${process.env.FAST2SMS_API_KEY}&message=${data.message} ${otp}&language=english&route=q&numbers=${data.number}`);
  // console.log("res", res)
  // return otp.toString();
  let otp = 123456;
  return otp;
};

const generateRandomString = (length) => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charactersLength);
    result += characters.charAt(randomIndex);
  }
  return result;
};

const sendEmail = async (mailOptions) => {
  let transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    // secure: true,
    auth: {
      user: process.env.EMAIL_USER, // apikey
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  transporter.use(
    "compile",
    hbs({
      viewEngine: {
        //extension name
        extName: ".html",
        // layout path declare
        layoutsDir: emailTemplatesPath,
        defaultLayout: false,
        //partials directory path
        partialsDir: emailTemplateParialsPath,
        express,
      },
      //View path declare
      viewPath: emailTemplatesPath,
      extName: ".html",
    })
  );

  transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
      console.log("Error while sending email: " + err);
    } else {
      console.log("Email sent successfully " + data);
    }
  });
};

const validationHandler = (res, error) => {
  console.error(error); // Log error for debugging purposes

  // Handle Sequelize validation errors
  if (error?.name?.includes("Sequelize")) {
    return res.status(HttpStatus.BAD_REQUEST.code).json({
      success: false,
      message: error.errors
        ? error.errors.map((e) => e.message)
        : "Database validation error occurred.",
    });
  }

  // Handle Joi validation errors
  if (error?.isJoi === true) {
    return res.status(HttpStatus.BAD_REQUEST.code).json({
      success: false,
      message: error.details
        ? error.details.map((e) => e.message).join(", ")
        : "Invalid input data provided.",
    });
  }

  // Handle custom application errors with user-friendly API messages
  if (error?.customMessage) {
    return res.status(error.statusCode || HttpStatus.BAD_REQUEST.code).json({
      success: false,
      message: error.customMessage,
    });
  }

  // Handle generic JavaScript errors
  if (error instanceof Error) {
    return res.status(HttpStatus.BAD_REQUEST.code).json({
      success: false,
      message:
        error.message || "An unexpected error occurred. Please try again.",
    });
  }

  // Handle unknown or unexpected errors
  return res.status(HttpStatus.INTERNAL_SERVER_ERROR.code).json({
    success: false,
    message: "An internal server error occurred. Please contact support.",
  });
};

// Helper function to delete image file
const deleteImageFile = (imagePath) => {
  if (imagePath) {
    const fullPath = path.join(__dirname, "../uploads", imagePath);
    console.log("fullPath", fullPath);
    if (fs.existsSync(fullPath)) {
      fs.unlinkSync(fullPath);
    }
  }
};

// Add to existing helper functions
const calculateEndDate = (durationDays) => {
  const endDate = new Date();
  endDate.setDate(endDate.getDate() + parseInt(durationDays));
  return endDate;
};

// Coupon related functions
function generateCouponCode() {
  return uuidv4().split('-')[0].toUpperCase();
}

async function validateCoupon(code, userId) {
  const coupon = await Coupon.findOne({ where: { code: code } });

  if (!coupon) {
      return { error: true, message: 'Coupon not found', status: HttpStatus.BAD_REQUEST.code };
  }

  if (coupon.usedCount >= coupon.usageLimit) {
      return { error: true, message: 'Coupon usage limit reached', status: HttpStatus.BAD_REQUEST.code };
  }

  const customerUsageCount = await UserCoupon.count({ where: { userId: userId, couponId: coupon.id } });

  if (customerUsageCount >= coupon.perCustomerLimit) {
      return { error: true, message: 'You have already used this coupon', status: HttpStatus.BAD_REQUEST.code };
  }

  const currentDate = new Date();

  if (currentDate < coupon.startDate || currentDate > coupon.expirationDate) {
      return { error: true, message: 'Coupon is not valid at this time', status: HttpStatus.BAD_REQUEST.code };
  }

  return { error: false, coupon: coupon };
}


function calculateDiscountedPrice(originalPrice, coupon) {
  let discountedPrice = originalPrice;

  if (coupon.discountType === 'percentage') {
      discountedPrice = originalPrice - (originalPrice * (coupon.discountValue / 100));
  } else if (coupon.discountType === 'fixed') {
      discountedPrice = originalPrice - coupon.discountValue;
  }

  return discountedPrice > 0 ? discountedPrice : 0;
}


// Function to calculate the expiration date
const calculateExpirationDate = (startDate) => {
  const date = new Date(startDate);

  // Add one year to the current date
  date.setFullYear(date.getFullYear() + 1);
  
  // Subtract one day
  date.setDate(date.getDate() - 1);
  return date;
};

function calculateDaysUsed(createdAt) {
  // Convert createdAt to a Date object
  const planStartDate = new Date(createdAt);
  
  // Get the current date
  const currentDate = new Date();
  
  // Calculate the difference in time (in milliseconds)
  const timeDifference = currentDate - planStartDate;
  
  // Convert milliseconds to days
  const daysUsed = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  
  return daysUsed;
}


// Add to module exports
module.exports = {
  validationHandler,
  calculateEndDate, // Add this line
  deleteImageFile,
  generateCouponCode,
  validateCoupon,
  calculateDiscountedPrice,
  calculateExpirationDate,
  calculateDaysUsed,
};
