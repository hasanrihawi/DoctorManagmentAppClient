import AppointmentDto from "./AppointmentDto";

export default interface DoctorDto {
  id: number;
  name: string;
  specialization: string;
  email: string;
  phone: string;
  appointments: AppointmentDto[];
}