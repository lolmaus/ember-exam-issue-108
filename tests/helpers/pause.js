import RSVP from 'rsvp';



export default function pause (ms = 0) {
  return new RSVP.Promise((resolve) => setTimeout(resolve, ms));
}
