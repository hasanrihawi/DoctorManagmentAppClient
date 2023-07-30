export default interface AppointmentDto {
  id: number;
  patientID: number;
  doctorID: number;
  clinicID: number;
  appointmentDateTime: Date;
  arrivalDateTime: Date | null;
  completionDateTime: Date | null;
}