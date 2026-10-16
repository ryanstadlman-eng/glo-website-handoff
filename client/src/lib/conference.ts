/**
 * Current Glo convention: a human-confirmed meeting request in conference-local time.
 * Event dates and location verified against SIA's official 2027 event listing.
 */
export const CONFERENCE_NAME = "SIA Executive Forum North America";
export const CONFERENCE_LOGO = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663283983903/DxqXrtXPCUEpcdap.png";
export const CONFERENCE_PATH = "/executive-forum-glo-up/";
export const CONFERENCE_LOCATION = "Miami Beach, Florida";
export const CONFERENCE_DATE_LABEL = "March 8–11, 2027";
export const CONFERENCE_TICKER_MESSAGE = `Join Glo at ${CONFERENCE_NAME} • ${CONFERENCE_DATE_LABEL} • ${CONFERENCE_LOCATION}`;
export const CONFERENCE_TICKER_LABEL = `${CONFERENCE_NAME}, March 8 through 11, 2027, in ${CONFERENCE_LOCATION}`;

export type ConferenceDate = {
  id: "2027-03-08" | "2027-03-09" | "2027-03-10" | "2027-03-11";
  weekday: string;
  month: string;
  day: string;
  fullLabel: string;
};

export const CONFERENCE_DATES: ConferenceDate[] = [
  { id: "2027-03-08", weekday: "Monday", month: "March", day: "8", fullLabel: "Monday, March 8, 2027" },
  { id: "2027-03-09", weekday: "Tuesday", month: "March", day: "9", fullLabel: "Tuesday, March 9, 2027" },
  { id: "2027-03-10", weekday: "Wednesday", month: "March", day: "10", fullLabel: "Wednesday, March 10, 2027" },
  { id: "2027-03-11", weekday: "Thursday", month: "March", day: "11", fullLabel: "Thursday, March 11, 2027" },
];

// These are requested meeting preferences, not confirmed bookings or event opening hours.
export const CONFERENCE_TIMES = [
  "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM",
  "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM",
] as const;
export type ConferenceTime = (typeof CONFERENCE_TIMES)[number];

export function gloUpSubject(date: ConferenceDate, time: ConferenceTime) {
  return `${CONFERENCE_NAME} Glo Up request: ${date.fullLabel} at ${time}`;
}
