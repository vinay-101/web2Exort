const cron = require('node-cron');
const { Op } = require('sequelize');
const UserSubscription = require('../models/user/UserSubscription');

// Check expired subscriptions daily at midnight
const checkExpiredSubscriptions = async () => {
    try {
        const now = new Date();
        
        // Find all active subscriptions where end date has passed
        const expiredSubscriptions = await UserSubscription.findAll({
            where: {
                status: 'active',
                endDate: { [Op.lt]: now }
            }
        });

        console.log(`Found ${expiredSubscriptions.length} expired subscriptions`);
        
        // Update each expired subscription
        let updatedCount = 0;
        for (const subscription of expiredSubscriptions) {
            await subscription.update({ status: 'expired' });
            updatedCount++;
        }
        
        console.log(`Successfully updated ${updatedCount} subscriptions to expired status`);
    } catch (error) {
        console.error('Error checking subscription expirations:', error);
    }
};

// Schedule job to run daily at 00:00
cron.schedule('0 0 * * *', () => {
    console.log('Running subscription expiration check...');
    checkExpiredSubscriptions();
});

// Initial check when server starts
checkExpiredSubscriptions();

module.exports = { checkExpiredSubscriptions };