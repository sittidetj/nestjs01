import { PartialType } from '@nestjs/mapped-types';
import { CreateApi1Dto } from './create-api1.dto';

export class UpdateApi1Dto extends PartialType(CreateApi1Dto) {}
