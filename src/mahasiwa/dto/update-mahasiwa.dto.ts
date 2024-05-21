import { PartialType } from '@nestjs/mapped-types';
import { CreateMahasiwaDto } from './create-mahasiwa.dto';

export class UpdateMahasiwaDto extends PartialType(CreateMahasiwaDto) {}
