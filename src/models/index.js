// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { SeatArrangement, Bookings, Movies } = initSchema(schema);

export {
  SeatArrangement,
  Bookings,
  Movies
};