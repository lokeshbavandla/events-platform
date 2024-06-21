import { Schema, models, model } from 'mongoose'

const orderSchema = new Schema({
    stripeId: {
        type: String,
        required: true,
        unique: true
    },
    totalAmount: {
        type: String
    },
    event: {
        type: Schema.Types.ObjectId,
        ref: 'Event'
    },
    buyer: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Order = models.Order || model('Order', orderSchema);

export default Order;