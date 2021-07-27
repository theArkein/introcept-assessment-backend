import { IsDate, IsDateString, IsEmail, IsEnum, IsNotEmpty, IsNumberString, IsString, Length } from 'class-validator';
import { Gender } from '../../../enum/gender.enum';
import { EducationLevel } from '../../../enum/education-level.enum';
import { ContactMode } from '../../../enum/contact-mode.enum';
import { Nationality } from '../../../enum/nationality.enum';

export class CreateClientDto {
    @IsNotEmpty()
    @IsString()
    firstname: string;

    @IsNotEmpty()
    @IsString()
    lastname: string;

    @IsNotEmpty()
    @IsEnum(Gender)
    gender: string;

    @IsNotEmpty()
    @IsNumberString()
    @Length(10)
    phone: string

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsString()
    address: string;

    @IsNotEmpty()
    @IsEnum(Nationality)
    nationality: string;

    @IsNotEmpty()
    @IsDateString()
    dob: string;

    @IsNotEmpty()
    @IsEnum(EducationLevel)
    educationLevel: string;

    @IsNotEmpty()
    @IsEnum(ContactMode)
    contactMode: string;
}