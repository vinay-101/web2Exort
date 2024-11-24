const path = require('path')
const { HttpStatus } = require("./statusCode");
const { Op, Sequelize } = require('sequelize');
const nodemailer = require("nodemailer");
const hbs = require('nodemailer-express-handlebars');
const express = require('express');
const emailTemplatesPath = path.resolve(__dirname, '../templates/email/');
const emailTemplateParialsPath = path.resolve(__dirname, '../templates/emails/partials');


const sendOtp = async(msg_data) => {
    const otp = Math.floor(100000 + Math.random() * 900000);
    return otp.toString();
    // let otp = 123456;
    // return otp;

}

const generateRandomString = (length)=> {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charactersLength);
      result += characters.charAt(randomIndex);
    }
    return result;
  }

const sendEmail = async (mailOptions) => {
    let transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        // secure: true, 
        auth: {
            user: process.env.EMAIL_USER, // apikey
            pass: process.env.EMAIL_PASSWORD
        }
    });

    transporter.use('compile', hbs({
        viewEngine: {
            //extension name
            extName: '.html',
            // layout path declare
            layoutsDir: emailTemplatesPath,
            defaultLayout: false,
            //partials directory path
            partialsDir: emailTemplateParialsPath,
            express

        },
        //View path declare
        viewPath: emailTemplatesPath,
        extName: '.html',
    }));

    transporter.sendMail(mailOptions, (err, data) => {
        if (err) {
            console.log('Error while sending email: ' + err);
        } else {
            console.log('Email sent successfully ' + data);
        }

    });
}





const validationHandler = (res, error) => {
    console.log(error);
    if (error?.name.includes('Sequelize')) { //Validation errors
        return res.status(HttpStatus.BAD_REQUEST.code).json({
            success: false,
            message: error.errors.map(e => e.message)
        })
    }
    if (error?.isJoi === true) {
        return res.status(HttpStatus.BAD_REQUEST.code).json({
            success: false,
            message: error.details.map(e => e.message)
        });
    }
    if (!error?.isJoi && !error?.name?.includes("Sequelize")) {
        return res.status(HttpStatus.BAD_REQUEST.code).json({
            success: false,
            message: error.message
        })
    }
    return res.status(HttpStatus.INTERNAL_SERVER_ERROR.code).json({
        success: false,
        message: error?.errors?.map(e => e.message)
    })

}

module.exports = {
    sendOtp,
    generateRandomString,
    sendEmail,
    validationHandler
};