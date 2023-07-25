export default interface PatientDto {
  id: number;
  name: string;
  email: string;
  phone: string;
  address?: string;
  gender: string;
  dateOfBirth: Date;
}