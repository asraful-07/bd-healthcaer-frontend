export type Specialty = {
  id: string;
  title: string;
};

export type DoctorSpecialty = {
  id: string;
  doctorId: string;
  specialtyId: string;
  specialty: Specialty;
};

export type User = {
  id: string;
  name: string;
  email: string;
  emailVerified: boolean;
  image: string | null;
};

export type IDoctor = {
  id: string;
  name: string;
  email: string;
  profilePhoto: string;
  contactNumber: string;

  address: string;
  gender: "MALE" | "FEMALE";

  qualification: string;
  designation: string;

  experience: number;
  appointmentFee: number;
  averageRating: number;

  registrationNumber: string;

  currentWorkingPlace: string;

  specialties: DoctorSpecialty[];

  user: User;
  userId: string;

  isDeleted: boolean;
  deletedAt: string | null;

  createdAt: string;
  updatedAt: string;
};

export type DoctorsResponse = {
  success: boolean;
  data: IDoctor[];
};
