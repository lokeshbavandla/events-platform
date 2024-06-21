import { Schema, models, model } from 'mongoose'

const eventSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: { 
        type: String
    },
    location: { 
        type: String
    },
    imageUrl: { 
        type: String,
         required: true
    },
    startDateTime: {
        type: Date,
        default: Date.now
    },
    endDateTime: { 
        type: Date,
        default: Date.now 
    },
    price: { 
        type: String 
    },
    isFree: { 
        type: Boolean,
        default: false 
    },
    url: { 
        type: String 
    },
    category: { 
        type: Schema.Types.ObjectId,
        ref: 'Category' 
    },
    organizer: { 
        type: Schema.Types.ObjectId,
        ref: 'User' 
    },
    createdAt: { 
        type: Date,
        default: Date.now
    },
  })
  
  const Event = models.Event || model('Event', eventSchema);
  
  export default Event;