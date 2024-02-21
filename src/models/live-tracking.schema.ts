import { Schema, Document } from 'mongoose';

export const LiveTrackingSchema = new Schema({
  shipmentId: { type: Number, required: true, index: true },
  timestamp: { type: Date, default: Date.now },
  locations: [{ type: String, required: true }],
});

export interface LiveTracking extends Document {
  shipmentId: number;
  timestamp: Date;
  locations: string[];
}
