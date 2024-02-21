import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { LiveTracking } from '../models/live-tracking.schema';

@Injectable()
export class MongoService {
  constructor(
    @InjectModel('LiveTracking')
    private readonly liveTrackingModel: Model<LiveTracking>,
  ) {}

  async insertLiveTracking(
    shipmentId: number,
    locations: string[],
  ): Promise<LiveTracking> {
    const result = await this.liveTrackingModel.findOneAndUpdate(
      { shipmentId },
      { $set: { locations } },
      { upsert: true, new: true },
    );

    return result;
  }

  async getLastLocationByShipmentId(
    shipmentId: number,
  ): Promise<string | null> {
    const result = await this.liveTrackingModel
      .findOne({ shipmentId })
      .sort({ timestamp: -1 })
      .select('locations')
      .lean();

    return result ? result.locations[result.locations.length - 1] : null;
  }
}
