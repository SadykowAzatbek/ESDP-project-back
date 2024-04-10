import mongoose from 'mongoose';
import User from './User';

const Schema = mongoose.Schema;


const ShipmentSchema = new Schema({
  user: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
    required: true,
    validate: {
      validator: async (value: mongoose.Types.ObjectId) => await User.findById(value),
      message: 'User does not exist',
    },
  },

  userMarketId: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
    required: true,
    validate: {
      validator: async (value: mongoose.Types.ObjectId) => await User.findById(value),
      message: 'User market id does not exist',
    },
  },

  pupId: {
    type: mongoose.Types.ObjectId,
    ref: 'PUPS',// ToDo возможно надо поменять название
    required: true,
    validate: {
      validator: async (value: mongoose.Types.ObjectId) => await PUP.findById(value),
      message: 'Pup does not exist',
    },
  },

  status: {
    type:String,
    required: true,
    enum: ['KGZ_DISPATCHED', 'KGZ_ARRIVED', 'CHN_DISPATCHED', 'CHN_ARRIVED'],
  },

  dimensions: {
    type:String,
    required: true,
  },

  weight: {
    type: Number,
    required: true
  },

  price: {
    type: Number,
    required: true,
  },

  isPaid: {
    type: Boolean,
    required: true,
    default: false
  },
});


const Shipment = mongoose.model('Shipment', ShipmentSchema);
export default Shipment;
